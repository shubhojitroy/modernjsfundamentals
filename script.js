(function () {
  //'use strict';
  let a = 'etherium';

  (function(){
    let a = 'blockchain';
    console.log(a); // blockchain
  })();

  console.log(a); // etherium

  //Named fn 
  //function declaration
  function hello () {
    console.log('Hello World');
  }
  hello(); //Hello World

  //function expression
  //fuction assignment. assigning anonymous fuction to a variable
  const greeting = function () {
    console.log('Hello to the World!');
  };
  
  greeting(); //Hello to the World!
  greeting;
  //named function expression
  //fuction assignment . assigning named fuction to a variable
  const greetings = function hello () {
    console.log('Hallelujah!');
  };
  greetings(); //Hallelujah!
  
  //Function () contructors
  // A function can also be declared using the constructor Function(). 
  // The body of the function is entered as a string, as shown in this example:
  //It's not recommended to declare functions in this way
  
  // There are man problems associated with placing the function body inside a string.
  const hi = new Function('console.log("Hi World!");'); //

  hello.name;

  function howdy(){
    console.log('Howdy World!') ;
  }
  let message = howdy();
  message; //Howdy World!
  
  //paramters and arguments
  function mean(a,b,c){
    console.log((a+b+c)/3);
  }
  // in JS If a parameter is not provided as an argument when the function is invoked, the function will still be invoked, but the parameter will be given a value of undefined.

  mean(1, 3, 6); // 3.3333333333333335
  mean(1,2);  //NaN (because the function cannot do the required operation with undefined:)
  mean(1,2,3,4,5); // 2 as will only find the mean of 1,2 and 3 

  // Variable Numbers of Arguments
  // Arguments is not an array. It has a length property and you can read and write each element using index notation
  // index notation to ax the arguments
  function arguments(){
    console.log(arguments);
  }
  arguments('hello', NaN); //Arguments(2)
   
  arguments(1,2,3,4,5); //Arguments(5)

  // REST operator
  // in ES6 and can be used to deal with multiple arguments by creating an array of arguments that are available inside the body of the function.

  function rest(...args){
    console.log(args) ;
  }
  rest(2,4,6,8); // (4) [2, 4, 6, 8]

  //or 
  // here the args parameter is an actual array, and has access to the same methods. For example we can use a for-of loop to iterate over each value given as an argument:
  function rest(...args){
    for(arg of args){
        console.log(arg);
    }
  }
  rest(2,4,6,8); // 2 4 6 8

  // Improved Mean Function with use of rest operator

  function mean(...values) {
    let total = 0;
    for(const value of values) {
      total += value;
    }
    console.log(total/values.length);
  }
  mean(2,8,13,11,4,2); // 6.666666666666667

  // Default Parameters
  // in ES6 a convenient way to specify default parameters for a function. 
  // These are values that will be used by the function if no arguments are provided when it is invoked.
  // Default parameters should always come after non-default parameters
  // The golden rule to remember here is to always put default parameters after all the other parameters.
  function hello(name='Rest of the World') {
    console.log(`Hello ${name}!`);
  }
  hello(); // Hello Rest of the World!

  //but over writing the default parameter by specifying an argument (paraeter), while setting the function:
  hello('Universe'); // Hello Universe!

  function discount(price, amount=10) {
    console.log(price*(100-amount)/100);
  }
  discount(20) // standard discount of 10% - 18
  discount(15, 20) // 12

  discount(20); // this sets amount = 20, but doesn't provide a value for price so NaN

  // Arrow Functions
  // ES6 introduced a new syntax for declaring functions called the arrow syntax. 
  // These make declaring functions much more succinct by using less verbose syntax.
  // Arrow functions can be identified by the 'arrow' symbol, => that gives them their name.
  // The parameters come before the arrow and the main body of the function comes after.
  // Arrow functions are always anonymous, so if you want to refer to them, you must assign them to a variable.
  // eg.
  const square = x => console.log(x*x);
  square(4.5); // 20.25

  // if the function doesn't require any parameters, a pair of empty parentheses must go before the arrow:
  // eg.
  const hey = () => console.log('Hey There');
  hey();

  // Longer functions will still require curly braces to deliminate the body of the function and the return keyword at the end, as can be seen in this (rather simplistic) tax-calculating function:

  const tax = (salary) => {
    let taxable = salary - 8000;
    const lowerRate = 0.25 * taxable;
    taxable = taxable - 20000;
    const higherRate = 0.4 * taxable;    
    console.log(lowerRate , higherRate) ;
  }
  tax(5000); // -750 -9200

  // Arrow functions make perfect candidates for short, anonymous functions, and you will often see them used later in the book.


  // Hoisting
  // Function Hoisting and Variable hoisting
  // Hoisting is the JavaScript interpreter’s action of moving all variable and function declarations to the top of the current scope, regardless of where they are defined.
  // Functions that are defined using a function declaration are automatically hoisted, meaning they can be invoked before they have been defined
  // eg.
  //fn invoked
  hoisting(); // Hoist Me!
  // the function declaration can be invoked before it is declared
  helloDeclaration(); // returns 'hello'

  //
  ///
  /* */
  // fn declaration
  function hoisting() {
    console.log('Hoist Me!');
  }

  //
  //
  // declare function declaration
  function helloDeclaration() {
    console.log('hello Declaration') 
  }


  // Variable hoisting
  // Variable declarations that use the var keyword are automatically moved to the top of the current scope
  // Variable assignment is not hoisted
  // After Var declaration var has a value of undefined until the assignment is complete.

  // console.log(varName); // will return undefined before assignment

  // variable is defined here
  var name = 'Alexa';
  console.log(name); // will return 'Alexa' after assignment

  // fn exprn hoisting like var hoisting
  // A function expression (where an anonymous function is assigned to a variable) is hoisted in a similar way to variables. 
  // So if it is declared using var then the declaration will be hoisted, but not the actual function. 
  // => the function cannot be invoked until after it appears in the code:
  // eg.

  // the variable helloExpression has a value of undefined, so the function cannot be invoked
  // helloExpression(); // throws an error - Uncaught TypeError: helloExpression is not a function

  // assign function expression to a variable
  var helloExpression = function() { 
    console.log('hello Expression') 
  }

  // The function expression can only be invoked after assignment
  helloExpression(); // returns 'hello'

})();

var a;
console.log(a); // undefined


