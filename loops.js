var sum = 0;

while (true) {
    var userInput = prompt('Enter number, or done to calc');
  if(userInput.toLowerCase() === 'end') {
    break;
  }else if(isNaN (Number(userInput) ) ){
    alert('only number or end')
  }else{
    sum += Number(userInput);
  }

  }

alert(sum);