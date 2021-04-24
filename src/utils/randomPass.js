export function randomPassword(length) {
  length = Number(length);
  // Limit length
  if (length < 6) {
    length = 6;
  } else if (length > 30) {
    length = 30;
  }
  let passwordArray = [
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "abcdefghijklmnopqrstuvwxyz",
    "1234567890",
    "!@#$%&*()",
  ];
  let password = [];
  let n = 0;
  for (let i = 0; i < length; i++) {
    // If password length less than 9, all value random
    if (password.length < length - 4) {
      // Get random passwordArray index
      let arrayRandom = Math.floor(Math.random() * 4);
      // Get password array value
      let passwordItem = passwordArray[arrayRandom];
      // Get password array value random index
      // Get random real value
      let item = passwordItem[Math.floor(Math.random() * passwordItem.length)];
      password.push(item);
    } else {
      // If password large then 9, lastest 4 password will push in according to the random password index
      // Get the array values sequentially
      let newItem = passwordArray[n];
      let lastItem = newItem[Math.floor(Math.random() * newItem.length)];
      // Get array splice index
      let spliceIndex = Math.floor(Math.random() * password.length);
      password.splice(spliceIndex, 0, lastItem);
      n++;
    }
  }
  return password.join("");
}
