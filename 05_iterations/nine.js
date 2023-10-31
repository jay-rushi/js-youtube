const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {                      //* reduce function is used with accumulator and current value*
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)                                                                       //* 0 is the initial value which is given to accumulator or you can give any other value*

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)                     //* reduce is used with arrow function

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)             //* reduce is used to add all the sum*

console.log(priceToPay);
