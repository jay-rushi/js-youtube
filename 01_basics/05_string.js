// practise strings get a good hold on it 
const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value"); 
// this is an outdated method to merge things we will use the below method to concaniate things

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')  //this method of string is used for many ways (practise various functions of it)
//(*we have to use the new string function only then we will be able to get the desired output for the keyword*)
// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase()); //*anything that is used after . is function this is the way to assign function to an object)
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)  // it cant be used twith neg values 
console.log(newString);

const anotherString = gameName.slice(-8, 4) // it can be used neg to start with reverse values and sllice is used to give values till specified num
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());  // it is used to remove the empty space

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));
