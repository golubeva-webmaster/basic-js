const CustomError = require("../extensions/custom-error");

function repeat(strF, repeatF, separatorF){
  // document.write('<br>in function repeat<br>');
  //    document.write('strF = '+strF+"<br>");
  //    document.write('repeatF = '+repeatF+"<br>");
  //    document.write('separatorF = '+separatorF+"<br>");
  var result = strF;
  
  for(let i=1; i<repeatF; i++){
    //document.write('<br>'+i+') in for result = '+result+' separatorF = '+separatorF);
    result += separatorF + strF;
    //document.write('<br>in for result = '+result);
  }
  //document.write('<br>');
  return result;
}


  module.exports = function repeater(str, options) {
    if(Number(options.repeatTimes) || (options.repeatTimes === undefined)){
      let additionStr = '';
      if(String(options.addition) && (Number(options.additionRepeatTimes) || (options.additionRepeatTimes === undefined))){
        let additionSeparator = (options.additionSeparator) ?  options.additionSeparator : '|';
        additionStr = repeat(options.addition, options.additionRepeatTimes, additionSeparator);
        //document.write(additionStr);
      }
      
      let strSeparator = (options.separator) ?  options.separator : '+';
      str = (additionStr)?(str+additionStr):str;
      // document.write('str = '+str+"<br>");
      // document.write('options.repeatTimes = '+options.repeatTimes+"<br>");
      // document.write('strSeparato = '+strSeparator+"<br>");
      let strStr = repeat(str, options.repeatTimes, strSeparator);
      //document.write(strStr);
      return strStr;

    }
};
  