const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  //console.log('----------------'+"\r\n",matrix);
  let count = 0;
  matrix.forEach(arr => {
    arr.forEach(element => {
      if (element === '^^')
        count ++;
    })
  });
  console.log('count: '+count);
  return count;
};
