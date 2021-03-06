(function () {
  //'use strict';
  // note retun keyword is being replaced with console.log to be able to printout the result in console for studying JS.
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

  mean([1, 3, 6]); // 3.3333333333333335 -* box brackets intro coz of improvement in mean cal at 331 *-
  mean([1,2]);  //NaN (because the function cannot do the required operation with undefined:)
  mean([1,2,3,4,5]); // 2 as will only find the mean of 1,2 and 3 

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
  mean([2,8,13,11,4,2]); // 6.666666666666667 -* box brackets intro coz of improvement in mean cal at 331 *-

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

  //array iterators
  //array methods use callback to make them more flexible

  // arrow functions are often used to declare callbacks as they are short and use only ine line.

  //forEach()

  //~ to for loop eg.
  const colors = ['Red', 'Green', 'Blue'];
  for(let i = 0, max = colors.length; i < max; i++) {
    console.log(`color at position ${i} is ${colors[i]}`);    // color at position 0 is Red color at position 1 is Green color at position 2 is Blue                     
  }
  // but using forEach() 
  // it will loop through the array and invoke a callback function using each value as an argument
  // The callback function takes three parameters, 
  // the first represents the value in the array, the second represents the current index 
  // and the third represent the array that the callback is being called on. The example above could be written as
  // executes a provided function once for each array element

  colors.forEach( (color, index) => console.log(`color at position ${index} is ${color}`) ); // color at position 0 is Red color at position 1 is Green color at position 2 is Blue

  //map() very ~ forEach()

  //it rtn a new array that replaces each value with the return value of the callback fn.
  // creates a new array with the results of calling a provided function on every element in the calling array.
  // eg. using an Anonymous fn
  [1,2,3].map( x => console.log(2 * x) ); // 2 4 6
  // named fn, written earlier
  [1,2,3].map( square ) // 1 4 9

  //map function used to modify arg in array and then displayed 
  const color = ['Red', 'Green', 'Blue'];
  ['red','green','blue'].map( color => console.log(`<p> ${color.toUpperCase()} </p>`) ); // <p> RED </p> <p> GREEN </p> <p> BLUE </p>  
  // common for callbacks to only use the first, index, parameter, but the next example shows all three parameters being used
  ['red','green','blue'].map( (color, index, array) => console.log(`Element ${index} is ${color}. There are ${array.length} items in total.`) ); //Element 0 is red. There are 3 items in total. Element 1 is green. There are 3 items in total. Element 2 is blue. There are 3 items in total.

  // Reduce()
  // The reduce() method is another method that iterates over each value in the array, 
  // but it cumulatively combines each result to return a single value.
  // is is often used to calculate statistics such as averages from data stored in an array. 
  // It usually takes two parameters. 
  // The first parameter represents the accumulated value of all the calculations so far, and the second parameter represents the current value in the array.
  // The reduce() method reduces the array to a single value. 
  // The reduce() method executes a provided function for each value of the array (from left-to-right). 
  // The return value of the function is stored in an accumulator (result/total). 
  // Note: reduce() does not execute the function for array elements without values.
  //const total = [1,2,3,4,5].reduce( (acc,val) => (acc + val, 0) );

  const array1 = [1, 2, 3, 4];
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  console.log(reducer); //(accumulator, currentValue) => accumulator + currentValue

  // 1 + 2 + 3 + 4
  console.log(array1.reduce(reducer));
  // expected output: 10

  // 5 + 1 + 2 + 3 + 4
  console.log(array1.reduce(reducer, 5));
  // expected output: 15

  var total = [ 0, 1, 2, 3 ].reduce(
    ( accumulator, currentValue ) => accumulator + currentValue,
    0
  );

  console.log(total); //6

  //second parameter after the callback -> The reduce() method also takes a second parameter after the callback, which is the initial value of the accumulator, acc.

  var cumulative = [1,2,3,4,5].reduce( (acc,val) => acc + val,10);

  console.log(cumulative); //25

  //cal avg word length
  const sentence = 'The quick brown fox jumped over the lazy dog';
  console.log(sentence);
  //split method
  var splits = sentence.split(' ', 9);
  console.log(splits); // (9) ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]
  // calculate the total number of letters in the sentence by using reduce method

  const accLength = splits.reduce( (acc, splits) => acc + splits.length, 0);
  console.log(accLength); // 36

  const avgAccLength = accLength/splits.length;
  console.log(avgAccLength); // 4

  // Filter()
  // The filter() method returns a new array 
  // it only contains items from the original array
  // which  returns true when passed to the callback
  // provides useful way to find all truthy value rom an array

  const numbers = [ 2, 7, 6, 5, 11, 23, 12 ]

  console.log(numbers.filter(x => x%2 === 0 ) ); // this returns true if the number is even ->(3) [2, 6, 12]

  const array = [ 0, 1, '0', false, true, 'hello' ];
  console.log(array.filter(Boolean) ); // (4) [1, "0", true, "hello"]
  // in the abv Boolean() rtns the boolean representation of a vale

  // falsy value and not operator -> '!' -> complement of a value's boolean representation
  console.log(array.filter(x => !x) ); // (2) [0, false]

  // chaining iterators
  // create some powerful transformations of data stored in arrays.
  // by chaining methods together

  //eg
  // map() method chained with reduce() method
  console.log([1,2,3].map( x => x*x ).reduce((acc,x) => acc + x ) ); //14

  // more complex example

  const sales = [ 100, 230, 55];
  totalAfterDiscountSales = sales.map( (amount) => amount * 1.15 ).reduce( (acc,val) => acc + val );
  console.log(totalAfterDiscountSales); // 442.75

  // improving the mean fn using the reduce fn
  function mean(array) {
    const total = array.reduce((a, b) => a + b);
    console.log(total/array.length);
  }

  // adding a callback fn as the last parameter that specifies a fn to be applied to all numbers before mean is cal.
  // helps to cal result of all numbers from the array given as the first argument.

  
  function mean(array, callback) {
    if (callback) {
      array.map( callback );
    } 
    const total = array.reduce((a, b) => a + b);
    console.log(total/array.length); 
    
      /* // mean(array, callback) {
        if (callback) {
          array.map( callback );
        } 
        const total = array.reduce((a, b) => a + b);
        console.log(total/array.length);
      }
      */
  }

  mean([2,5,7,11,4]); // this should just calculate the mean
  console.log(mean); //5.8

  console.log(mean([2,5,7,11,4],x => 2*x) ); // 11.6

  mean([2,5,7,11,4],square); // 43

})();

var a;
console.log(a); // undefined



