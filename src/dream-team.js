const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(members === null || members === undefined)
  return false;
  if(members.constructor !== Array

    )
    return false;

    let arrLetters = [];
    members.forEach(function(element) {
      if (typeof element === 'string'){
        arrLetters.push(element.trim()[0].toUpperCase());
      }
    });

      if(arrLetters.length > 0){
        let res = arrLetters.sort().join('');
        return res;
      }
      else
        return false;
};
