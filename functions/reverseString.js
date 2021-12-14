/* eslint-disable no-plusplus */
function reverseString(string) {
  const reversedString = [];

  for (let i = string.length - 1; i >= 0; i--) {
    reversedString.push(string[i]);
  }

  return reversedString.join('');
}

module.exports = reverseString;
