import path from "path";
import { remote } from "electron";
import fs from "fs";

let initStatus = false;
const filePath = path.join(remote.app.getPath("home"), ".qingke.json");

if (!fs.existsSync(filePath)) {
  initStatus = true;
}

const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync(filePath);
const db = low(adapter);

if (initStatus) {
  db.defaults({ sites: [], category: {} }).write();
}

export function saveLists(lists) {
  db.set("sites", lists).write();
}

export default db;
