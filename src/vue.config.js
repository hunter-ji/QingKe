"use strict";
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
  },
};
