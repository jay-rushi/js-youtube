
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()              //*saymyname now is a reference saymyyname() (with parenthesis) is execution) it doesnt require console to execute*

// function addTwoNumbers(number1, number2){          //*here values is given inside parenthesis it is called parameter*

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){              //*here values is given inside parenthesis it is called arguments*

    // let result = number1 + number2
    // return result                                     //* no values is identified anything that is used after return*
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){                                        //* !username is same as username=== undefined 
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){            //* ...num1 rest function is used it is same as spread function it willl gather all the values together and will make an array
                                                             // of all the objects together*
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);           //*object is accesed after parameter for eg anyobject.username this is the method to access
                                                                                                // object in function 
}

// handleObject(user)
handleObject({                                                             //*another method to access objects in functions by decalring it in objects*
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]                                                            //*here we have used the value of paramenter array and object value is mostly used in arguments*
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));