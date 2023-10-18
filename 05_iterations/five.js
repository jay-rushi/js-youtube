const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){        //* for each loop*
//     console.log(val);
// } )

// coding.forEach( (item) => {           //* another method of for each loop*
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {               //* access multiple objects from array with for each loop*
    
    console.log(item.languageName);
} )
