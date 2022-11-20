const operators = document.querySelectorAll('.operator');
const numbers = document.querySelectorAll('.number');
const equalBtn = document.getElementById('equal');
const clearBtn = document.getElementById('clear');
const deleteBtn = document.getElementById('delete');
const output = document.getElementById('output');
const answer = document.getElementById('answer');
const buttons = document.querySelectorAll('button');

answer.textContent = '';
output.textContent = '';

let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;


numbers.forEach((number) => {
  number.addEventListener('click', () => {
    output.textContent += number.id;
  })
});

operators.forEach((operator) => {
  operator.addEventListener('click', () => {
    output.textContent += operator.id;
  })
});

clearBtn.addEventListener('click', () => {
  output.textContent = '';
  answer.textContent = '';
});

deleteBtn.addEventListener('click', () => {
  var str = output.textContent;
  output.textContent = str.substring(0, str.length -1)
});

const getNum1 = () => {
  num = parseFloat(output.textContent);
  return num;
    
}

const getNum2 = () => {
  var numStr = output.textContent;
  var operand = getOperator();

  if (operand === '+') {
    num = parseFloat(numStr.slice(numStr.indexOf('+') +1, numStr.length ));
    return num;
  } else if (operand === '-') {
    num = parseFloat(numStr.slice(numStr.indexOf('-') +1, numStr.length ));
    return num;
  } else if (operand === '*') {
    num = parseFloat(numStr.slice(numStr.indexOf('*') +1, numStr.length ));
    return num;
  } else if (operand === '/') {
    num = parseFloat(numStr.slice(numStr.indexOf('/') +1, numStr.length ));
    return num;
  }
}

const getOperator = () => {
  var numStr = output.textContent;
  for(const operand of operators) {
    var operator = numStr.slice(numStr.indexOf(`${operand.id}`), numStr.indexOf(`${operand.id}`) +1 );
      if (operator === '+') {
        return operator;
      } else if (operator === '-') {
        return operator;
      } else if (operator === '*') {
        return operator;
      } else if (operator === '/') {
        return operator;
      }
    }
}

const evaluate = (num1, num2, op) => {
  num1 = getNum1();
  num2 = getNum2();
  op = getOperator();

  if (op === '+') {
    return add(num1,num2)
  } else if (op === '-') {
    return subtract(num1, num2)
  } else if (op === '*') {
    return multiply(num1, num2)
  } else if (op === '/') {
    return divide(num1, num2)
  }
}

equalBtn.addEventListener('click', () => {
  answer.textContent = evaluate().toFixed(10);
})









