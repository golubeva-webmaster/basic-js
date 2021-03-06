const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  
  if(typeof sampleActivity !== 'string' || typeof sampleActivity.trim() !== 'string')
    return false;
  else if(
      Number(sampleActivity) === NaN
      || Number(sampleActivity) >=15
      || Number(sampleActivity) <=0
  )
    return false;
  else{
    sampleActivity = Number(sampleActivity);
    if(sampleActivity !== NaN){
      return false;
    }
    else{
      let res = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD));
      return res;
    }
  }
};
