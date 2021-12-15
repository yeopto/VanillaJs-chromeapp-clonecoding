function sayHello(nameOfPerson, age) {
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}

sayHello("nico", 10);

function plus(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
}

plus(10, 20);

const age = parseInt(prompt("How old are you?"));

console.log(isNaN(age))