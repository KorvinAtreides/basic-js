const matrix = createMatrix();
class VigenereCipheringMachine {
  constructor(bool) {
    if (bool === false) {
      this.type = "reverseMachine";
    } else {
      this.type = "directMachine";
    }
  }
  encrypt(message, key) {
    if (message == undefined || key == undefined) {
      throw new Error();
    }
    let keyInside = String(key);
    while (keyInside.length < message.length) {
      keyInside += keyInside;
    }
    while (keyInside.length > message.length) {
      keyInside = keyInside.slice(0, keyInside.length - 1);
    }
    let crypt = [];
    let mes = message.toUpperCase().split("");
    let arrKey = keyInside.toUpperCase().split("");
    for (i = 0; i < mes.length; i++) {
      if (mes[i].charCodeAt(0) >= 65 && mes[i].charCodeAt(0) <= 90) {
        let letter =
          matrix[arrKey[i].charCodeAt(0) - 65][mes[i].charCodeAt(0) - 65];
        crypt.push(letter);
      } else {
        crypt.push(mes[i]);
        mes.splice(i, 1);
        i--;
      }
    }
    if (this.type == "directMachine") {
      return crypt.join("");
    } else {
      return crypt.reverse().join("");
    }
  }
  decrypt(encryptedMessage, key) {
    if (encryptedMessage == undefined || key == undefined) {
      throw new Error();
    }
    let keyInside = String(key);
    while (keyInside.length < encryptedMessage.length) {
      keyInside += keyInside;
    }
    while (keyInside.length > encryptedMessage.length) {
      keyInside = keyInside.slice(0, keyInside.length - 1);
    }
    let crypt = [];
    let mes = encryptedMessage.toUpperCase().split("");
    let arrKey = keyInside.toUpperCase().split("");
    for (i = 0; i < mes.length; i++) {
      if (mes[i].charCodeAt(0) >= 65 && mes[i].charCodeAt(0) <= 90) {
        let pos = matrix[arrKey[i].charCodeAt(0) - 65].indexOf(mes[i]);
        let letter = matrix[0][pos];
        crypt.push(letter);
      } else {
        crypt.push(mes[i]);
        mes.splice(i, 1);
        i--;
      }
    }
    if (this.type == "directMachine") {
      return crypt.join("");
    } else {
      return crypt.reverse().join("");
    }
  }
}

function createMatrix() {
  let matrix = [];
  for (j = 0; j < 26; j++) {
    matrix[j] = [];
    for (i = 0; i < 26; i++) {
      let arrPos = i + 65 + j;
      if (arrPos > 90) {
        arrPos = i + 65 + j - 26;
      }
      matrix[j].push(String.fromCharCode(arrPos));
    }
  }
  return matrix;
}

module.exports = VigenereCipheringMachine;
