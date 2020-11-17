"use strict";

const crypto = require("crypto");

const algorithm = "aes-256-cfb";

export function encryptText(keyStr, text) {
  const hash = crypto.createHash("sha256");
  hash.update(keyStr);
  const keyBytes = hash.digest();

  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(algorithm, keyBytes, iv);
  // console.log("IV:", iv);
  let enc = [iv, cipher.update(text, "utf8")];
  enc.push(cipher.final());
  return Buffer.concat(enc).toString("base64");
}

export function decryptText(keyStr, text) {
  const hash = crypto.createHash("sha256");
  hash.update(keyStr);
  const keyBytes = hash.digest();

  const contents = Buffer.from(text, "base64");
  const iv = contents.slice(0, 16);
  const textBytes = contents.slice(16);
  const decipher = crypto.createDecipheriv(algorithm, keyBytes, iv);
  let res = decipher.update(textBytes, "", "utf8");
  res += decipher.final("utf8");
  return res;
}

// const encrypted = encryptText("SecretKey", "It works!");
// console.log("Encrypted: ", encrypted);
//
// const decrypted = decryptText("SecretKey", encrypted);
// console.log("Decrypted: ", decrypted);
