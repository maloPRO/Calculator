function add(a,b) {
    return parseInt(a) + parseInt(b);
}

function subtract(a,b) {
    return parseInt(a) - parseInt(b);
}

function divide(a,b) {
    return parseInt(a) / parseInt(b);
}

function multiply(a,b) {
    return parseInt(a) * parseInt(b);
}


// ----------------------------------------------

const display = document.querySelector('#display');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const buttons = document.querySelectorAll('button');
const clear = document.querySelector('#clear');
const del = document.querySelector('#delete');

//clear button
clear.addEventListener('click', () => {
    display.textContent = '';
});

//delete button
del.addEventListener('click', () => {
    let str = display.textContent.toString();
    display.textContent = str.slice(0, -1);

});

//number buttons
numbers.forEach((number) => {
    number.addEventListener('click', () => {
        display.textContent += number.id;
    })
});

//operators
operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        display.textContent += operator.id;
    })
});

function calculate () { 
    
}

//-------------------------------------------

const equal = document.getElementById('equal');
equal.addEventListener('click', calculate);





