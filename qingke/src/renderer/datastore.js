import Datastore from "lowdb";
import LodashId from "lodash-id";
import FileSync from "lowdb/adapters/FileSync";
import path from "path";

const adapter = new FileSync(
  path.resolve("src/renderer/userData", "data.json")
);

const db = Datastore(adapter);
db._.mixin(LodashId);

db.defaults({
  site_lists: [],
  site_item: [],
  main_password: ""
}).write();

if (!db.has("uploaded").value()) {
  db.set("uploaded", []).write();
}

if (!db.has("picBed").value()) {
  db.set("picBed", {
    current: "weibo"
  }).write();
}

if (!db.has("shortKey").value()) {
  db.set("shortKey", {
    upload: "CommandOrControl+Shift+P"
  }).write();
}

export default db;
