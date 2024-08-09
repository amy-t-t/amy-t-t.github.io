// call main()
window.onload = main;

function calculate() {
    let firstNumberHTML = document.getElementById("number1");
    let firstNum = Number(firstNumberHTML.value);

    let secondNumberHTML = document.getElementById("number2");
    let secondNum = Number(secondNumberHTML.value);

    const answerHTML = document.getElementById("answer");
    answerHTML.innerText = "(answer is " + (firstNum + secondNum).toString() + ")";

    const imageHTML = document.getElementById("imagePlaceholder");
    const image = document.createElement('img');
    image.src = 'hello_world.jpg';
    image.alt = 'Hello World';
    image.style.width = '35%';
    imageHTML.appendChild(image);
}

function main() {
    document.getElementById("calculate").addEventListener("click", calculate);
}