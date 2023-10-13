const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);       
        console.log(this);                                        //* this is used to access all the variables in the scope*
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);               //* this doesnt work in function but it works in object*
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"                     //* this is arrow function another way of declaring functions*
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2                         //* in {} you have to use return
// }

// const addTwo = (num1, num2) =>  num1 + num2             //* implicit arrow function another method

// const addTwo = (num1, num2) => ( num1 + num2 )          //* if you are using () paranthesis you dont have to use return 

const addTwo = (num1, num2) => ({username: "hitesh"})      //* you have to also use object in paranthesis ()*


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
