const fs = require("fs");
import store from "@/store";
import { remote } from "electron";
import path from "path";

export function getCookie() {
  let infoPath =
    process.env.NODE_ENV === "development"
      ? path.join(remote.app.getAppPath(), "../info.dat")
      : path.join(remote.app.getAppPath("userData"), "info.data");
  fs.readFile(infoPath, (err, data) => {
    store.commit("setUserInfo", JSON.parse(data));
  });
}

export function setCookie(params) {
  let content = JSON.stringify(params);

  let infoPath =
    process.env.NODE_ENV === "development"
      ? path.join(remote.app.getAppPath(), "../info.dat")
      : path.join(remote.app.getAppPath("userData"), "info.data");

  fs.writeFile(infoPath, content, err => {
    if (err) {
      return console.error(err);
    }
  });
}
