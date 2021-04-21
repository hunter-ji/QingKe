const fs = require("fs");

export function writeFile(path, content) {
  fs.writeFile(path, content, (err) => {
    if (err) {
      console.log(err);
      return console.error(err);
    }
  });
}

export function appendFile(path, content) {
  fs.appendFile(path, content, (err) => {
    if (err) {
      return console.error(err);
    }
  });
}

export function readFile(path, callback) {
  fs.readFile(path, (err, data) => {
    if (err) {
      return console.error(err);
    }
    callback(data);
  });
}
