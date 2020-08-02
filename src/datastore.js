import low from "lowdb";
import LodashId from "lodash-id";
import FileSync from "lowdb/adapters/FileSync";

import { app, remote } from "electron";
import path from "path";

// 根据process.type来分辨在哪种模式使用哪种模块
const APP = process.type === "renderer" ? remote.app : app;

const STORE_PATH = APP.getPath("userData");

const adapter = new FileSync(path.join(STORE_PATH, "/data.json"));

const db = low(adapter);
db._.mixin(LodashId);

db.defaults({
  site_lists: [],
  site_item: [],
  main_password: "",
}).write();

export default db;
