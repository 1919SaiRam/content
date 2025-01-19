JavaScript Errors Throw and Try to Catch




--------------================================-----------------------------------------==================================-----------------------


JavaScript Errors Throw and Try to Catch
JavaScript uses throw to create custom errors and try…catch to handle them, preventing the program from crashing. The finally block ensures that code runs after error handling, regardless of success or failure.

throw: Used to create custom errors and stop code execution.
try…catch: Allows you to catch and handle errors, preventing the program from crashing.
try block: Contains code that may throw an error.
catch block: Catches and handles the error.
finally: Executes code after the try and catch blocks, regardless of an error occurring.
Custom Errors: You can create your own error types by extending the Error class.

Syntax:
The try statement allows you to check whether a specific block of code contains an error or not. The catch statement allows you to display the error if any are found in the try block.

try {
     Try Block to check for errors.
}
catch(err) {
      Catch Block to display errors.
}


Javascript Throws Block The throw Statement
The throw statement allows you to create custom error messages and throw exceptions manually.

throw new Error("Error message");
Key Point:

throw creates a custom error.
It can be used to stop the execution of a program and pass control to error handling mechanisms.
You can throw any type of object (string, number, object, etc.), but it’s common to throw an instance of Error.

1
try {
2
    throw new Error('Yeah... Sorry');
3
}
4
catch (e) {
5
    console.log(e);
6
}




Introduction to ES6
Last Updated : 12 Dec, 2024
ES6 or ECMAScript 2015 is the 6th version of the ECMAScript programming language. ECMAScript is the standardization of Javascript which was released in 2015 and subsequently renamed as ECMAScript 2015.

// New Features in ES6
// 1. The let Keyword
2. The const Keyword
3. Arrow Functions
4. Destructuring Assignment
5. The Spread (…) Operator
6. The For/Of Loop
7. Maps and Sets
8. Classes
9. Promises
10. Default Parameters


Introduction to ES6
ES6 or ECMAScript 2015 is the 6th version of the ECMAScript programming language. ECMAScript is the standardization of Javascript which was released in 2015 and subsequently renamed as ECMAScript 2015.

New Features in ES6
1. The let Keyword
The let variables are mutable i.e. their values can be changed. It works similar to the var keyword with some key differences like scoping which makes it a better option when compared to var.



let n = 10;
{
    let n = 2; // Block-scoped variable
    console.log(n);
}
1
let n = 10;
2
{
3
    let n = 2; // Block-scoped variable
4
    console.log(n);
5
}
6
console.log(n);

Output
2
10
It prevents variable leakage outside of the intended scope.

2. The const Keyword
const is used to declare variables with a constant value, ensuring the value cannot be reassigned.



1
const PI = 3.14159;
2
PI = 3; // Error: Assignment to constant variable
Ideal for declaring configuration constants or fixed values.

3. Arrow Functions
Arrow functions provide a concise syntax for writing function expressions and automatically bind this to the surrounding context.


// Traditional function
function add(a, b) {
    return a + b;
}

// Arrow function
const add = (a, b) => a + b;
Implicit return for single-expression functions.
Do not have their own ‘this’ context.
4. Destructuring Assignment
Destructing in JavaScript basically means the breaking down of a complex structure(Objects or arrays) into simpler parts

Object Destructuring



1
const obj = { name: "Raj", age: 25 };
2
const { name, age } = obj;
3
console.log(name, age);

Output
Raj 25
Array Destructuring



1
const a = ["red", "blue", "green"];
2
const [first, second] = a;
3
console.log(first, second);

Output
red blue
5. The Spread (…) Operator
The spread operator expands an array or object into individual elements or properties.



1
const n1 = [1, 2, 3];
2
const n2 = [...n1, 4, 5];
3
console.log(n2);

Output
[ 1, 2, 3, 4, 5 ]
6. The For/Of Loop
The for/of loop allows you to iterate over iterable objects like arrays, strings, Maps, and Sets but in a short syntax as compared to other loops.

Iterating Over an Array



1
const a = ["apple", "banana", "cherry"];
2
for (const fruit of a) {
3
    console.log(fruit);
4
}

Output
apple
banana
cherry
Iterating Over a String



1
const s = "hello";
2
for (const char of s) {
3
    console.log(char);
4
}

Output
h
e
l
l
o
7. Maps and Sets
Map: Maps store key-value pairs where keys can be any data type.



1
const map = new Map();
2
map.set("a", 1);
3
map.set("b", 2);
4
console.log(map.get("a"));

Output
1
Set: Sets store unique values of any type.



1
const set = new Set([1, 2, 3, 3]);
2
console.log(set);

Output
Set(3) { 1, 2, 3 }
8. Classes
ES6 introduced classes in JavaScript. Classes in javascript can be used to create new Objects with the help of a constructor, each class can only have one constructor inside it.



1
class Animal {
2
    speak() {
3
        console.log("The animal makes a sound");
4
    }
5
}
6
​
7
const dog = new Animal();
8
dog.speak();

Output
The animal makes a sound
class Animal {}: Defines a simple class named Animal.
speak(): A method inside the class that logs a message to the console.
new Animal(): Creates an object dog from the Animal class.
dog.speak(): Calls the speak method on the dog object.
9. Promises
Promises simplify handling asynchronous operations by providing .then and .catch methods.


const fetch = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => 
            resolve("Data fetched"), 2000);
    });
};

fetch().then(data => 
    console.log(data));
10. Default Parameters
Allows functions to have default values for parameters.



1
function greet(name = "Guest") {
2
    return `Hello, ${name}!`;
3
  }
4
  console.log(greet());

Output
Hello, Guest!





Additional Enhancements
String Methods:
includes(): Check if a string contains a substring.
startsWith(): Check if a string starts with a substring.
endsWith(): Check if a string ends with a substring.
Array Methods:
find(): Locate the first element matching a condition.
findIndex(): Locate the index of the first element matching a condition.
from(): Convert an iterable or array-like object into an array.
Template Literals: Simplify string concatenation and allow embedded expressions.
Modules: Introduce import and export for better modularity.
Rest Parameters (…args): Allow functions to accept an indefinite number of arguments as an array.
Generators and Iterators: Enable custom iteration logic with function* and yield.
Binary and Octal Literals: Simplify working with binary (0b) and octal (0o) numbers.
Enhanced Object Literals: Provide shorthand for methods, properties, and dynamic keys.
WeakMap and WeakSet: Store weakly-referenced objects for specialized use cases.
Proxy and Reflect: Add interception capabilities and reflection utilities for objects.
Symbol: Introduces unique, immutable primitive data types useful for property keys.
Block-scoped Functions: Functions declared inside blocks respect block scope.



