const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(arr.includes('somebody'))
  console.log(arr);
  if(Array.isArray(arr) === false)
    throw new Error('THROWN');

  let arrRes = [];
  for(let i=0; i<=arr.length-1; i++){
    if(arr[i] != "undefined"){ 
      if(arr[i] === '--discard-next'){
        // if(arr[i+2] === '--discard-prev')
        //   i = i+3;
        // else if(ar[i+2] === '--double-prev'){
        //   arrRes.push(arr[i+1]);
        //   i = i+3;
        // }
        // else{}

        // else
          i = i+2;
      }
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
  }
  ///console.log(arrRes);
  return arrRes;
};
//Пришлось написать условие, что если i  равен какой-то команде и если i+2 или i -2, тоже команда, то выполнять условия в зависимости от команд. 
//Причем, у меня были проблемы если i  == "удалить следующее" а i+2  "удалить предыдущее", то я удаляла три элемента начиная с i (включительно). 
//И еще на входе проверка была на существование элемента, я поправила на if(element != "undefined") , так как false и 0 , не проходили обычную проверку на существовани