const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(Array.isArray(arr) === false)
    throw new Error('THROWN');

  let arrRes = [];
  for(let i=0; i<=arr.length-1; i++){
    if(arr[i] === '--discard-next')
      i = i+2;
    else if (arr[i] === '--discard-prev')
      arrRes.pop();
    else if(arr[i] === '--double-next'){
      i++;
      if(arr[i] && typeof arr[i] === 'number')
        arrRes.push(arr[i],arr[i]);
    }
    else if(arr[i] === '--double-prev'){
      if(arr[i-1])
        arrRes.push(arr[i-1]);
    }
    else
      arrRes.push(arr[i]);

  }
  console.log(arrRes);
  return arrRes;
};
