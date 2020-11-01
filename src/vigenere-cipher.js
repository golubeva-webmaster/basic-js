const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  
  constructor (par) {
        if (par === false) {
      this.temp = false; // если подается фолс, 
    } else {
      this.temp = true;
    };
  }

  encrypt(message, key) {
  //  throw new CustomError('Not implemented');
    if (message && key) {
      message = message.toUpperCase();
      key = key.toUpperCase();
      let keyNew = key;
      // если длина ключа меньше длины строки
      if (key.length < message.length) {
        let k = key.length;
        for (let i = k; i < message.length; i++) {
          // чтобы длина ключа совпала с длиной сообщения
          keyNew = keyNew + keyNew[i - k];
        };
      };
      
      // строим новую фразу
      let encrypted = '';
      let messageLetterPos, 
        keyLetterPos,
        encryptedPos;
      for (let i = 0, j = 0; i < message.length; i++, j++) {
        if (message[i].match(/[A-Z]/)) { // если лат.буква
          messageLetterPos = message.charCodeAt(i) - 64;
          keyLetterPos = keyNew.charCodeAt(j) - 64;
          encryptedPos = messageLetterPos + (keyLetterPos - 1);  // номер закодированного символа
          encryptedPos = encryptedPos > 26 ? encryptedPos - 26 : encryptedPos;
          let encryptedPosCode = encryptedPos + 64; // в кодировке
          encrypted = encrypted + String.fromCharCode(encryptedPosCode);
        } else if (message[i].match(/\s/)) { // если пробел, надо сдвинуть ключ
          encrypted = encrypted + message[i];
          j = j - 1;
          } else
        { // если нет, просто добавляем к строке
          encrypted = encrypted + message[i];
        };
      };

      if (this.temp === false) {
        return encrypted.split('').reverse().join('');
      } else {
        return encrypted;
      };
      


    } else {
      throw new Error(); // если не подали сообщение и/или ключ
    };
  }    
  decrypt(message, key) {
  //  throw new CustomError('Not implemented');
  if (message && key) {
    key = key.toUpperCase(); // а строка уже будет прописными
      let keyNew = key;
      // если длина ключа меньше длины строки
      if (key.length < message.length) {
        let k = key.length;
        for (let i = k; i < message.length; i++) {
          // чтобы длина ключа совпала с длиной сообщения
          keyNew = keyNew + keyNew[i - k];
        };
      };
      
      let decrypted = '';
      let messageLetterPos, 
        keyLetterPos,
        decryptedPos;

      for (let i = 0, j = 0; i < message.length; i++, j++) {
        if (message[i].match(/[A-Z]/)) { // если лат.буква
          messageLetterPos = message.charCodeAt(i) - 64;
          keyLetterPos = keyNew.charCodeAt(j) - 64;
          decryptedPos = messageLetterPos - (keyLetterPos - 1);  // номер закодированного символа
          decryptedPos = decryptedPos > 26 ? decryptedPos - 26 : decryptedPos;
          decryptedPos = decryptedPos <= 0 ? 26 + decryptedPos : decryptedPos;
          let decryptedPosCode = decryptedPos + 64; // в кодировке
          decrypted = decrypted + String.fromCharCode(decryptedPosCode);
        } else if (message[i].match(/\s/)) { // если пробел, надо сдвинуть ключ
          decrypted = decrypted + message[i];
          j = j - 1;
          } else
        { // если нет, просто добавляем к строке
          decrypted = decrypted + message[i];
        };
      };

      if (this.temp === false) {
        return decrypted.split('').reverse().join('');
      } else {
        return decrypted;
      };
  } else {
    throw new Error(); // если не подали сообщение и/или ключ
  };
  
  }
}

module.exports = VigenereCipheringMachine;