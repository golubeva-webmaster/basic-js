const CustomError = require("../extensions/custom-error");

function repeat(strF, repeatF, separatorF){
  var result = strF;
  
  for(let i=1; i<repeatF; i++){
    result += separatorF + strF;
  }

  return result;
}

  module.exports = function repeater(str, options) {
    if(Number(options.repeatTimes) || (options.repeatTimes === undefined)){
      let additionStr = '';
      if(String(options.addition) && (Number(options.additionRepeatTimes) || (options.additionRepeatTimes === undefined))){
        let additionSeparator = (options.additionSeparator) ?  options.additionSeparator : '|';
        additionStr = repeat(options.addition, options.additionRepeatTimes, additionSeparator);
      }
      
      let strSeparator = (options.separator) ?  options.separator : '+';
      str = (additionStr)?(str+additionStr):str;

      return strStr = repeat(str, options.repeatTimes, strSeparator);
    }
};
  