const result = document.getElementById("result");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const history = document.getElementById("history");

function addNumbers() {
    
    pulse(document.getElementById("add"));
    let answer = parseFloat(num1.value) + parseFloat(num2.value);
    result.innerHTML = answer;
    history.innerHTML += `<br/>${num1.value} + ${num2.value} = ${answer}`; 
}

function subtractNumbers() {
    pulse(document.getElementById("sub"));
    let answer = parseFloat(num1.value) - parseFloat(num2.value);
    result.innerHTML = answer;
    history.innerHTML += `<br/>${num1.value} - ${num2.value} = ${answer}`; 
}

function multiplyNumbers() {
    pulse(document.getElementById("mul"));
    let answer = parseFloat(num1.value) * parseFloat(num2.value);
    result.innerHTML = answer;
    history.innerHTML += `<br/>${num1.value} * ${num2.value} = ${answer}`; 
}

function divideNumbers() {
    pulse(document.getElementById("div"));
    let answer = parseFloat(num1.value) / parseFloat(num2.value);
    result.innerHTML = answer;
    history.innerHTML += `<br/>${num1.value} / ${num2.value} = ${answer}`; 
}

function powerNumbers() {
    pulse(document.getElementById("pow"));
    let answer = Math.pow(parseFloat(num1.value),parseFloat(num2.value));
    result.innerHTML = answer;
    history.innerHTML += `<br/>${num1.value} ^ ${num2.value} = ${answer}`; 
}

function pulse(button) {
    button.className = "pulse";
    button.style.animation = 'none';
    button.offsetHeight; /* trigger reflow */
    button.style.animation = null; 
}