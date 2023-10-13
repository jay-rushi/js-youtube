// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();                                             //*everything is included inside() so that execution can be done as fast as possible*

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);     //* arrow function is used with iife(fast execution)*
} )('hitesh')

