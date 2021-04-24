import path from "path";
import { remote } from "electron";
import fs from "fs";
import crypto from "crypto";

let initStatus = false;
const filePath = path.join(remote.app.getPath("home"), ".qingke.json");

if (!fs.existsSync(filePath)) {
  initStatus = true;
}

const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const algorithm = "aes-256-ctr";
const ENCRYPTION_KEY = Buffer.from(
  "FoCKvdLslUuB4y3EZlKate7XGottHski1LmyqJHvUhs=",
  "base64"
);

const IV_LENGTH = 16;

function encrypt(text) {
  let iv = crypto.randomBytes(IV_LENGTH);
  let cipher = crypto.createCipheriv(
    algorithm,
    Buffer.from(ENCRYPTION_KEY, "hex"),
    iv
  );
  cipher.setAutoPadding(true);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return iv.toString("hex") + ":" + encrypted.toString("hex");
}

function decrypt(text) {
  let textParts = text.split(":");
  let iv = Buffer.from(textParts.shift(), "hex");
  let encryptedText = Buffer.from(textParts.join(":"), "hex");
  let decipher = crypto.createDecipheriv(
    algorithm,
    Buffer.from(ENCRYPTION_KEY, "hex"),
    iv
  );
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
}

// const adapter = new FileSync(filePath);
const adapter = new FileSync(filePath, {
  serialize: (data) => encrypt(JSON.stringify(data)),
  deserialize: (data) => JSON.parse(decrypt(data)),
});
const db = low(adapter);

if (initStatus) {
  db.defaults({ sites: [], category: {} }).write();
}

export function saveLists(lists) {
  db.set("sites", lists).write();
}

export default db;
