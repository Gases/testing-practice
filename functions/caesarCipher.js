function caesarCipher(string) {
  const cipheredString = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < string.length; i++) {
    if ((string.charCodeAt(i) > 64 && string.charCodeAt(i) < 91)
    || (string.charCodeAt(i) > 96 && string.charCodeAt(i) < 123)) {
      if (string.charCodeAt(i) === 90 || string.charCodeAt(i) === 122) {
        cipheredString[i] = String.fromCharCode(string.charCodeAt(i) - 25);
      } else {
        cipheredString[i] = String.fromCharCode(string.charCodeAt(i) + 1);
      }
    } else {
      cipheredString[i] = string[i];
    }
  }

  return cipheredString.join('');
}

module.exports = caesarCipher;
