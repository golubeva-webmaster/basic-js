const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {

  let depth = 1;
  for (let item of arr) {
      let currDepth = 1;
      if (Array.isArray(item)) 
        currDepth = 1 + this.calculateDepth(item);

      if (currDepth > depth)
        depth = currDepth;
  };

  return depth;

}
}