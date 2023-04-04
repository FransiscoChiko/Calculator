const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((item)=> {
    item.onclick = () => {
        if (item.id == 'clear') {
            display.innerText = '';
        } else if (item.id == 'backspace') {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        } else if (display.innerText != '' && item.id == 'equal') {
            display.innerText = eval(display.innerText);
        } else if (display.innerText == '' && item.id == 'equal') {
            display.innerText = 'Empty!';
            setTimeout(() => (display.innerText = ''), 2000);
        } else {
            display.innerText += item.id;
        }
    }


function calculate(operator) {
    let expression = result.value;
    if (expression.slice(-1) === operator) {
        expression = expression.slice(0, -1);
    }
    result.value = eval(expression);
}

function clearResult() {
    result.value = '0';
}

function backspace() {
    result.value = result.value.slice(0, -1);
    if (result.value === '') {
        result.value = '0';
    }
}

function tambah() {
    let expression = result.value;
    if (expression.slice(-1) === '+') {
    return;
    }
    if (expression.slice(-1) === '-' || expression.slice(-1) === '*' || expression.slice(-1) === '/') {
    expression = expression.slice(0, -1);
    }
    result.value = expression + '+';
}
    
function kurang() {
    let expression = result.value;
    if (expression === '0') {
    result.value = '-';
    return;
    }
    if (expression.slice(-1) === '-') {
    return;
    }
    if (expression.slice(-1) === '+' || expression.slice(-1) === '*' || expression.slice(-1) === '/') {
    expression = expression.slice(0, -1);
    }
    result.value = expression + '-';
}
    
function kali() {
    let expression = result.value;
    if (expression.slice(-1) === '*') {
    return;
    }
    if (expression.slice(-1) === '+' || expression.slice(-1) === '-' || expression.slice(-1) === '/') {
    expression = expression.slice(0, -1);
    }
    result.value = expression + '*';
}
    
function bagi() {
    let expression = result.value;
    if (expression.slice(-1) === '/') {
    return;
    }
    if (expression.slice(-1) === '+' || expression.slice(-1) === '-' || expression.slice(-1) === '*') {
    expression = expression.slice(0, -1);
    }
    result.value = expression + '/';
}

const themeTogglebtn = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');
const togglerIcon = document.querySelector('.toggler-icon');
let isDark = true;
themeTogglebtn.onclick = () => {
    calculator.classList.toggle('dark');
    themeTogglebtn.classList.toggle('active');
    isDark = isDark;
}
})