const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));  it is used to give precision value upto a certain number after decimal

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));   is used to give precision of a certain number by determining the range 

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));    it makes it readable and into string

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));    converts into positive
// console.log(Math.round(4.6));  rounds off the value
// console.log(Math.ceil(4.2));   will give 5 if any decimal is there
// console.log(Math.floor(4.9));  will give 4 only even if decimal is there
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
