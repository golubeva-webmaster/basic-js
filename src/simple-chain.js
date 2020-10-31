const CustomError = require("../extensions/custom-error");
let chain = [];
const chainMaker = {
  getLength() {
  //  throw new CustomError('Not implemented');
  return chain.length;   
  
  },
  addLink(value) {
  //  throw new CustomError('Not implemented');
  value = String(value);
  if (value === '') {
    chain.push('( )')
  } else {
    chain.push(`( ${value} )`);
  }
    
    return this;
  
  },
  removeLink(position) {
  //  throw new CustomError('Not implemented');
    if ((typeof position === 'number') && (chain[position])) {
     
      chain.splice(position - 1, 1);
      return this;
    } else { 
      chain.length = 0;
    throw new Error('error');
  };
    
  },
  reverseChain() {
  //  throw new CustomError('Not implemented');
    chain = chain.reverse();
    return this;

  },
  finishChain() {
  //  throw new CustomError('Not implemented');
    let theChain = chain.join('~~');
    chain.length = 0;
    return theChain;
    
    
    
  }
};

module.exports = chainMaker;
