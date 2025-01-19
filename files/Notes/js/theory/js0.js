#Understand programming concepts through practical activities
Sequence ; Algorithm ; Program
Debugging
Binary Language
Compiler
Keywords
Data types
Variables
Arithmetic Operators
Relational operators
Conditional operators
Loop
Condition based Loop
While Loop
Finite & Infinite Loop
Increment and Decrement Operators
Loops
Repeat Loop
Count based loop
For Loop
Iteration
Nested Loop

Selection
If statement
if-else statement
If-else if statement
switch
Jump statements
break
continue

Sub-programs
Functions
Need for Functions
Function call/Function invocation
Function parameters
Parameterized functions vs Non Parameterized functions
Passed value vs. parameters
Return from function
Functions with return value and no return value
Function Scope
Inbuilt functions vs User Defined Functions

6-step strategy to solve any given problem

Data Structures vs Data Types
What are Algorithms?
Data Structures vs Algorithms
Types of Data Structures
Lists/Arrays
Linked Lists
Stacks
Queues
Graphs
Trees

Events
Lists
---------------------------------------------------------------------------------------------------------------------------------------------------------------------
Primitives Data Types
Expressions
Mathematical Operators (+, -, *, /, %) and Precedence
Relational / Logical Operators (>, <, ===, !==, &&, ||)
If-Else statements - Part I
Introduction to Functions - Part I
Parametric & Non-Parametric
Calling a function
Returning values

If..else if...
Functions

If else chain, Nested if else - Part II
Strings:
Accessing string characters & length
Immutability
Template Strings
String Methods
Reading Documentation

Introduction to loops in JavaScript
For Loop
Introduction to Arrays
Array Methods
push() and pop()
shift() and unshift()
sort()
reverse()

Searching in Array
Array.includes(value)
String to Array - split()
Array to String - join()
Nested loops
Multidimensional Arrays
Introduction to JS Objects
Creating, accessing & updating objects

Nested Objects
Objects vs Arrays
Destructuring
Array of Objects
Floating Point Numbers
Special Numbers in JS

Math Functions & Constants
Arrow Functions
Pass by value 
Pass by reference 

Global Scope
Local Scope
Lexical Scope
Hoisting
Callback
Closure

Advanced array callback functions
Sorting
Map, Filter and Reduce
Advanced array functions
Splice
Slice

-------------------------------------------------------------------------------------------------------------------------------------------------------------
Use combination of these concepts to solve  problems.
Basic introduction to Javascript.
# -->  Programming is not difficult, if you have a strategy and practice :)


# What is the relation between Sequence and Algorithm?
Sequence is part of an algorithm.
Sequence is the order in which the instructions are executed.
While Algorithm is the sequence of instructions to achieve a task. 
When an Algorithm is written in a programming language we call it as Program.
There are many Programming languages like JavaScript, Java, Python, C++, Blockly etc.
Computer programs are algorithms written in programming languages that the computer can understand.

Debugging :- 
Errors are the problems or faults that occur in a program. These make the behavior of the program abnormal.
Programming errors are also known as the bugs. The process of finding & fixing these bugs is called debugging.
  
  programming languages that are known as high-level languages
  The language of 0s and 1s, which is called Binary Language 

Compiler
The language processor that reads the program written in high-level language and translates it into an equivalent program in machine language is called a Compiler. 

  Interpreter: An interpreter translates code written in a high-level programming language into machine code line-by-line as the code runs.
            An interpreter is a program that directly executes the instructions in a high-level language, without converting it into machine code. 
            In programming, we can execute a program in two ways. Firstly, through compilation and secondly, through an interpreter. The common way is to use a compiler.
  
  Keywords are reserved words used by the compiler. It tells the compiler that the keyword has a specific meaning AND it cannot be used for another purpose.

  
# Data Types in Javascript

String : A string is a series of characters like "Michael Jackson".
Strings are written with quotes. You can use single or double quotes. Example : “Crio”, ‘crio’.

Number : All JavaScript numbers are stored as decimal numbers (floating point).
Numbers can be written with, or without decimals. Example : 34.00, 34

Boolean : Booleans can only have two values: true or false. 
For example: When you select Dark Mode or Light Mode on browser, the browser remembers it as Dark mode = True.

  
# Data types in Java

string: A string is a series of characters like "Michael Jackson".
Strings are written with quotes. You can use single or double quotes. Example : “Crio”, ‘crio’.

int: The integer data type represents a positive whole number or its negative value
Examples : -9834, 0,1, 87

float: It represents floating-point or decimal number.
Example : 0.1234, 12.245, -2324.0

boolean : booleans can only have two values: true or false. 
For example, when you select Dark Mode or Light Mode on browser, the browser remembers it as Dark mode = True.


Variables to store and access data when a program is executing. 

The variable needs to be declared.
The variable declaration tells the operating system to reserve a piece of memory with that variable name.
After you declare a variable, you would want to store a value in the memory reserved by it. Assigning a value after the variable is declared, at some point in your program, is called an assignment.

  Declaring a JavaScript Variable
Creating a variable in JavaScript is called "declaring" a variable.

You declare a JavaScript variable with the var or the let keyword:

var carName;
or:
let carName;
After the declaration, the variable has no value (technically it is undefined).

To assign a value to the variable, use the equal sign:

carName = "Volvo";
You can also assign a value to the variable when you declare it:

let carName = "Volvo";

Initializing a variable means specifying an initial value to assign to it right away, instead of doing it later in the program.
In simple terms, you can declare a variable & assign it a value at the same time, this is known as variable Initialization.
  
The syntax for variable declaration is as follows −
var variable_name;
Examples
var age;
var marks;
var name;

The syntax for variable initialization is as follows −
var variable_name=value;
Examples
var age = 10;
var marks = 33.5;
var name =”crio”

Basic Arithmetic Operators 
+    Addition
-     Subtraction
*     Multiplication
/     Division
**    Exponent
%     Modulus

  >,<,>=,<=,==,!= are called Relational Operators or Comparison Operators.
  
  Conditional Operator - &&  , ||
  Repeating a sequence of steps more than once  is called repetition or a loop.

  Condition based loop is the one that continues repeating till the condition is true.
  
  A While Loop is used to implement Conditional Loop in Programming
  The While Loop is used to repeat a block of code as many times as the condition remains true.

  Condition based loop are the ones that stop when the condition becomes false
  If this runs a finite number of times, it is a Finite Loop
  Else it is an Infinite Loop

  Condition based loops can use the comparison operators as well as conditional operators 

Increment & Decrement Operators
++ ; -- 

  Count based Loops - Repeat Loop and For Loop.

 REPEAT LOOP
When we have to repeat a sequence of instructions, a known number of times.
 FOR LOOP
When we have to repeat a sequence of instructions, a known number of times AND we have to increment/decrement values after each iteration.
  WHILE LOOP
When we need to plainly execute a loop till a condition turns false and you do not know beforehand how many times to execute the loop.

  Nested loops


Selection is a programming construct that we use to decide which path (set of steps) to take

 if…else if..else conditional statements.

   What are the difference & similarities between While loop & If…else? 
SIMILARITIES
Both of them check for a condition to be true.
Both of them execute a block of code.
DIFFERENCES
“while” loop executes multiple times whereas “if..else” executes the statements only one time.
“If” is having “else” block additionally whereas “while” loop has no additional block attached to it.

  Switch Statement

switch(expression) {                                 
case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}

Use the switch statement to select one of many code blocks to be executed. 
Difference with if condition is that Switch can only compare the expression to different values (== operator) (values here would be x, y) and cannot evaluate other conditions (>, < etc.)
Break is a Jump Statement that moves control to the end of the Switch or end of a Loop also. 

  
  Switch vs. If…else
 A switch statement can replace multiple if checks. It gives a more descriptive way to compare a value with multiple variants.
In the case of 'if-else' statement, either the 'if' block or the 'else' block will be executed based on the condition.
While in the case of the 'switch' statement, one case after another will be executed until the break keyword is found, or the default statement is executed.
A continue statement ends the current iteration of a loop. Program control is passed from the continue statement to the end of the loop body.

Break vs. Continue   
The break statement “jumps out” of a loop (can be used for switch also)
The continue statement “jumps over” one iteration of the loop .

A Function is a sub-program (block of code to perform a specific task) that can be executed as required and any number of times within a larger program.
The set of instructions that a function executes is called the Function Definition.
Once you write a function, we can call that function into action by using its name - Function Call or Function Invocation.
Inputs passed to the Function are called Function Parameters.

A function is defined using the function keyword
This is followed by the name of the function followed by the round brackets to pass parameters
The body of function is written within {}

Parameters vs. Arguments
A parameter is a variable you create in  a function when you define it.
An argument is the value equivalent to the variable (or direct value as you see here) that you pass to the function when you call it.

  Naming conventions for function name
Function names are generally written like this: getName, show_message.
Spaces are not allowed in function names.
Try to use only letters, digits and underscore, avoid special characters
Keywords cannot be used to name functions.
Choose a meaningful name for the function which clearly tells us what the function will do and avoid generic names (like x, y, tmp)
Don’t make your names too long

Types of functions

Inbuilt functions
A function that already exists in the language without you having to define it.
Collection of such functions is called a library. Each library serves a particular purpose.
Every programming language provides a number of inbuilt libraries.

User defined functions
A function that you define in your code to implement a specific task.

   Combine concepts learnt so far to solve problems
6-step strategy to solve any given problem

Understand the problem
Design test data/test cases (input and expected output)

Derive the solution - solve the problem (write pseudo code)
Test the solution (against the test data/test cases)

Write the program/code (using Java or JS)
Test the code (resolve errors and debug if required)

We can perform operations on data: Insert new data, Remove data, Update existing data - these are CRUD operations - Create, Read, Update, Delete.
We can also do operations on data, such as Search, Sort etc.

  Programming Languages provides a way of creating LISTS/ARRAYS which can store multiple instances of a particular type of data.

Note: All instances of data should be of the same type.

  What type of data can an Array store?
  Any type of data
Integers
Booleans
Strings
..
Even complex data (array of such data). Examples:
Details of each Amazon item
Available - Yes/No
Price
Name
Description
Rating
…
Blog data
Images
…

Arrays are classified as Homogeneous Data Structures because they store elements of the same type.
They can store numbers, strings, boolean values (true and false), characters, and so on, but once you define the type of values that your array will store, all its elements must be of that same type. You can’t “mix” different types of data.

   limitations of arrays?
If you need to remove any element from the middle of the array, we cannot have gaps in between. We have to delete the element and shift the rest of the elements to left by one position.
If you need to add any element in the middle of an array, then shift the elements to the right by one position and then add the element.

  We are organizing data in a specific way.
These (Arrays and Linked Lists) are called Data Structures - way of organizing data.

  
  Data Structure:
A data structure is a way to organize, process, retrieve & store data.
A data structure can store multiple instances of data in an organized way.
Different data structures are optimized for different operations - some for quick lookup, some of easier insertion/deletion, some for easier traversal of all data, some to save memory, etc.
There are various kinds of data structures available and we choose them as per our need.
Arrays and Linked Lists are examples of Data Structures. 
We will look at a few more..

  Data Structure vs. Data type
         Data Type                                                                                                Data Structure
It tells us about the type of data a variable can accept                                     It is a way of organizing data (or multiple instances of data)
Data Types can only hold one particular value                                                Data Structure can hold multiple values
Examples: Integer, Boolean, String                                                             Examples: Arrays, Linked Lists


Algorithms

We already saw that Sort and Search are operations that we can perform on data structures.
These are called Algorithms.
An algorithm is a series of steps to solve a problem and in most cases, it involves working with data structures.
Examples of algorithms:
Search for a particular element
Filter a subset of data
Find a path from one item to another
Organize the data
…

Q1: If you had an array of 1000 names and you had to search for a particular name, how would you do it?
Linear Search

Binary Search Algorithm

Data Structure vs. Algorithm

        Data Structure                                                                                  Algorithm
Data structure is a way for storing and organising our data                         Algorithm is a sequence of finite instructions through which our problem can be solved ; Quite often, Algorithms work on the data stored using Data Structures
Examples: Array, Linked Lists                                                       Examples: Sort, Search


Another way of organizing data
Stack
Queue
Another Non-linear Data Structure
Graphs are used to represent, find, analyze, and optimize connections between elements (houses, airports, locations, users, articles, etc.).


  -------------------------------------------------------------------------------------------------------------------------------------------------------
  ---->>  JavaScript is used for creating web pages. 

  
  Primitive Values are numbers and strings, among other things.
Primitives Data Types
Numbers (-100, 3.14, and others), used for math calculations.
Strings ("hello", "abracadabra", and others), used for text.
Booleans (true and false), used for logical operations.
Undefined (undefined), used for unintentionally missing values.
Null (null), used for intentionally missing values.

Checking the Data Type
  typeof operator returns a string indicating the type of the operand's value
    
Variables
Variables are named container used to store, change, and access information. We first declare the variable and then we assign the value

Declaration: 
We use the keyword var along with the name of the variable.
Assignment:
We simply assign some value to the variable.
Re-assignment
Re-declaration:

Declare a variable `greeter` using var

   	var greeter = "hey hi";
Print the variable greeter in your program. What do you get?

Next, try re-assigning it.
var greeter = "say Hello instead";
Print the variable greeter again.

  Const
Declaring a variable using const creates a variable whose value can’t be changed.

  Let
Declaring variables using let will stop this confusion as it’s more strict than var.

  
  Demo - var, let, and const

   Keyword                  Allows re-declaration                           Allows re-assignment?
     var                                 ✅                                             ✅
     let                                 ❌                                             ✅
     const                               ❌                                             ❌


Now re- declare a new variable using let 

let greeting = "say Hi";
console.log(greeting) 
let greeting = "say Hello";
console.log(greeting)                      // syntax error 

Now re-declare a new variable using const
const greeting = "say Hi";
greeting = "say Hello";                                  // Type error

Variables are not values. Variables point to values.

  Valid variable names should:
             Start with a letter, underscore, or dollar sign.
             After the first letter, you can use numbers, letters, underscores, dollar signs.

  Can we name a variable as const i.e var const; No, we can’t.

  Valid variable names can’t be:
                      Reserved keywords of JavaScript.

  
console.log(2 + 2);
We ask JavaScript 2 + 2, and it answers with 4. 
Expressions always result in a single value and are questions that JavaScript can answer.
		To perform more arithmetic operations on values .

  
Mathematical Operators & Precedence  :-
  
Brackets ( … )			B
Addition (+) 			A
Subtraction (-)			S
Multiplication (*)			M
Division ( / )			D
Modulus (Remainder) (%)	R
Precedence (Order of evaluation)
B
DMR
AS

Note: In case they belong to same category, follow order from left to right.


Let’s evaluate some expressions
console.log(2 + 2)
console.log(5 * 15)
console.log(10 % 2)
console.log(19 - 29)
console.log('Java' + 'Script')
console.log('JS' / 4)
console.log(3 + 10 * 2);
console.log((3 + 10) * 2);

 Variables & Expressions :-

var x = 3;                        console.log( x );
var y = 4;                        console.log( y );
var z = x + y;                    console.log( z );


The expression here (x + y) contains variables x and y
This expression itself is assigned to another variable z, so we can use that value later when needed

3 & 4 here are called literals - that is values visible in code
7 (that is x + y) is a value which z holds internally, so 7 is not a literal


Expressions:- 
  is a combination of literals, variables, operators &/ other simple expressions
that evaluates to a value

Ex:		var greeting = “Hello”;
console.log( greeting + “ World” );

Relational Operators :-
        To check a relationship between two primitives or variables we use relational operators.
Greater than ( > )
Less Than ( < )
Greater than or equal to ( >= )
Less than or equal to ( <= )
Equal to ( === )
Not Equal to ( !== )

Logical Operators :-
       AND (&&) - Returns true only if both conditions are true and if the first condition is false, it will not check second condition.
       OR ( || ) - Returns true if any of the conditions are true and if the first condition is true, it will not check second condition.

If Statement :-
To impose and check a condition we use if construct
Syntax -
if( condition ) {
    //if condition is true, then do this
}

If - Else Statements :-
if( condition ) {
    //if condition is true, then do this
} else {
    //if condition is false, then do this
}

Functions :-
  
Define a function - Ex. :

function functionName() {
  console.log("Inside the function");		// function body within {}
}

Call a function - Ex. :
		functionName();						// which will then print the msg


Types of Functions :-
  
  In the previous function, we didn’t send in / give it any input  :   Non-Parametric Functions
	Ex:	function greet()  { console.log( “HI” ); }		-> always prints HI when called

Imagine a banking system, where they need to show different personalized messages for users!

If we want to give specific inputs for the function to work with  :  Parametric Functions

These are dynamic - it will give different outputs for different inputs


 Parametric Functions :-
   
   Define a function - Ex :

function functionName( parameter1 ) {
  console.log( “HI ” + parameter1 );                
}

Call a function - Ex :
		functionName( “Tina” );						->	prints HI Tina
functionName( “Arun” );						->	prints HI Arun		

Parameters or Arguments ?
  
function parametricFunction(param) {
  console.log(param);
}

var argument = “Adieu!”;
parametricFunction(argument);


A function can have multiple parameters, separated by comma
function parametricFunction(param1, param2) {
  console.log(param1, param2);
}
When calling the function, pass each of the arguments separated by commas
parametricFunction("Bon", “Voyage”);

Returning Values from functions :-
  We can pass values into a function with arguments.
We can use a return statement to send a value back out of a function.

function multiply(x, y) {
  return x * y;
}

let answer = multiply(5, 2);
console.log(answer);			// prints 10

 If no return value is specified, JS will return undefined.

   If else Chain :- 
   if( condition_1 ) {
    //if condition_1 is true, then do this

} else if ( condition_2 ) {
    //if condition_1 is false, but condition_2 is true then do this

} else {
    //if both conditions are false then do this
}


Nested If Else
 Syntax:

if( condition_1 ) {
    if( condition_1_1 ) {
    } else if( condition_1_2 ) {
    } else {
    }

} else if ( condition_2 ) {
//Inner If or If Else can be here also    

} else {
    //Inner If or If Else can be here also
}


Strings :- 
  A string is a series of zero or more characters
Enclosed in single (‘) or double quotes (“)
Starts and ends with same type of quotes

let favFood = "";

.length property after the string variable or string literal - gives the length of the string
	console.log(favFood.length)        //prints 0
String Length
console.log(“Crio.do”.length)        //prints 7

We can use one type of quote inside another -
let favPhrase = 'My favorite phrase is "Good day"! Yours?';

We can concatenate strings
let message = “Welcome, ” + “John!";

Accessing string characters :-
  Bracket notation is a way to get a character at a specific index within a string.
  Indexing starts at Zero (0) instead of 1
  const str = "Crio.do";
  console.log(str[0]);			//C

  We can also use charAt(index) 
  console.log(str.charAt(4));  

Individual characters of a String literal cannot be changed.
String values are immutable - they cannot be altered once created.
let myStr = "Bob";
myStr[0] = "J";
console.log(myStr)


Strict Mode:-
  “use strict”

Defines that JavaScript code should be executed in "strict mode".
Strict mode changes previously accepted "bad syntax" into real errors.
For example, with strict mode, you cannot use undeclared variables.


Immutability of strings
When we run JS in strict mode, we will get the actual error.
The only way to change the variable content, would be to assign it to a new string:
let myStr = "Bob";
myStr = "Job";
console.log(myStr)


Template Strings / Template Literals :- 
  
  A special type of string that makes creating complex strings easier
Enclosed in backticks
Allows multiline string formatting.
var str = `This is :
a template literal !` ;
Variable or JS expression can also be within it, like below:
`${ variable or js expression }`

const firstName = "Tara";
const lastName = "Smith";
const greeting = `My name is ${firstName} ${lastName}.
What’s yours? “Long time”! `
console.log(greeting);

const str = `Hey, this exp is ${2 > 1}`
console.log(str);



String Methods :-
  String methods help us work with strings
If updates are required on a string, since strings are immutable, these methods return a new string with the modified value

var str2 = "She sells seashells by the sea-shore";
console.log( str2.indexOf("sea") );
console.log( str2.lastIndexOf("sea") );
console.log( str2.indexOf("time") );

Substring :- 

substring(startPos, endPos) extracts a part of a string and returns it in a new string.
Starting position is from startPos (inclusive)
Stopping position is just 1 before endPos (not inclusive)
If endPos is not given, then from startPos till the end of the string is returned


Concat :-
  str1.concat(str2) joins two or more strings
can be used instead of the + operator (although + is preferred)
can send multiple values :  str1.concat(str2, str3, str4)


var str = "Hello ";
var name = "Steve";
var res = str.concat(name, "! ", "How are you?");
console.log(res);

console.log( "".concat("My name is ", name) );


Loops :- 
  Loops run the same code multiple times.
A for loop - only runs for a specific number of times.
For Loop 
Syntax:
	for (begin ; condition ; step) {
  		// ... loop body …
}
Declared with 3 optional expressions separated by  ;
begin		-	Initialization statements
condition	-	Conditional statements
step		-	Expressions for updates


for (let i=1; i<=3; i++) {
  console.log(`Favorite Song Repeat # ${i}`);
}
The initialization statement is executed one time only before loop starts, to define and setup loop variable.
The condition statement is evaluated at the beginning of every loop iteration and will continue as long as it evaluates to true.
The final expression is executed at the end of each loop iteration, prior to the next condition check to increment or decrement your loop counter.

Arrays in JavaScript :- 
With JavaScript array variables, we can store several types of data in one place.
Arrays can store anything as their value - primitives, another array, objects, or even functions*
Array elements can be accessed and modified using bracket notation.
Unlike strings, array entries are mutable & can be changed freely


let simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray[0]);            //"one"
simpleArray[1] = "two";            	//mutation in place

Array length :-
  .length() returns the next available index in the array, that is the length of the array.
const simpleArray = [1,2,3,4];
for (let i=0; i < simpleArray.length; i++) {
  console.log( simpleArray[i] );
}

We want to compare whether two variable are equal or not.
What will be the output?
const a = 1;
const b = "1";
if(a===b)
   console.log("a & b have same values");
else
  console.log("a & b don't have same values");                                                    a & b don't have same values


Equality Operators :-

console.log("1" == 1)
console.log("1" === 1)
console.log(true == "true")
console.log("0" == false)
  
== 		:	compares values only
===  		:	compares both values and types


Array Methods :-
.push() appends data to the end of an array & returns the new array length.
.pop() removes the last element from an array and returns the removed element.

.shift() works like .pop(), but it removes the first element of the array.
.unshift() works like .push(), but adds the element at the beginning of the array.


  const arr = [1, "Kevin", null, 0, true];
for(var itr = 0; itr < arr.length; itr++ ){
      if(arr[itr] !== null && arr [itr] !== 0)
          console.log(arr[itr]);
  }


Falsy or Truthy Values :-
false, null, 0, "", undefined, and NaN are Falsy values in JavaScript.
All of these will evaluate to false, if it is used as a condition.
All values other than these are Truthy, it will evaluate to true.

Sort & Reverse :-
sort() 	- Sorts the array elements in-place, in alphabetical, ascending order.
reverse() - Reverses the order of the elements in the given array, in-place.
In-place: Changes will be done in the same array, you can’t assign the sorted array to another variable.

  
let arr = ['a','b','c','a','d','e','c','f','c'];
console.log(arr.sort());
console.log(arr);

console.log(arr.reverse());
console.log(arr);


The initialization statement is executed one time only before loop starts, to define and setup loop variable.
The condition statement is evaluated at the beginning of every loop iteration and will continue as long as it evaluates to true.
The final expression is executed at the end of each loop iteration, prior to the next condition check to increment or decrement your loop counter.
With JavaScript array variables, we can store several pieces of data in one place.
Array elements can be accessed and modified using bracket notation.
Unlike strings, array entries are mutable & can be changed freely.
.length returns the next available index in the array, that is the length of the array.


  Searching in Arrays :-
Array.includes(element, fromIndex) -
Checks if array contains given element     (starting from an index - optional). 
Returns boolean value.

  let arr = ['a','b','c','a','d','e','c','f','c'];
console.log( arr.includes('a') );
console.log( arr.includes('b', 3) );

Strings or Arrays ?
  var str = "And so the adventure begins";

var arr = [ 'And', 'so', 'the', 'adventure', 'begins' ];

includes() checks if array contains given element
split() splits a string into an array of substrings
string.split(separator)

join() joins an array to form a string
array.join(separator)



const parts = "Hi how are you doing today".split(" ");
console.log(parts);
const parts2 = "Hi how are you doing today".split();
console.log(parts2);

var arr = ["Hi", "how", "are", "you", "doing", "today"];
const stringFromParts = arr.join("-");
console.log(stringFromParts);
const stringFromParts2 = arr.join();
console.log(stringFromParts2);

Write a function reverseString(str) which takes in a string parameter,
And returns a string which is the reverse of the original string, 

Multi-Dimensional Arrays :-
These are arrays that are nested within arrays - 2D, 3D, and so on.
  
1D Array:
let x = [a,b,c,d];
x[0] = a
x[1] = b
x[2] = c
x[3] = d


2D Array:
let y = [[a,b],[c,d]];
y[0] = [a,b]
y[1] = [c,d]

y[0][0] = a
y[0][1] = b
y[1][0] = c
y[1][1] = d


To access these nested array elements,
First set of brackets refers to the entries in the outermost (the first level) array,
Each additional pair of brackets refers to the next level of entries inside.
let arr = [
    [1,2,3],
    [[10,11,12], 13, 14]
  ];

console.log( arr[1] );                                     // [ [ 10, 11, 12 ], 13, 14 ]
console.log( arr[1][0] );                                  // [ 10, 11, 12 ]
console.log( arr[1][0][1] );                               // 11
console.log( arr[0][1] );                                   // 2 
console.log( arr[1][2] );                                   //  14 


let arr = [ [1,2],3,4 ];
Push an empty array at the end:
arr.push([]);
console.log(arr);
Add an element to that new subarray:
arr[3].push(5);
console.log(arr);
Remove the new subarray:
console.log( arr.pop() );
console.log(arr);

We will be use nested loops, i.e loop within a loop. - iteration by 
for( ;  ; ){   // for iterating through rows
  for( ; ; ){  // for iterating through columns
     // do something
  }
}

var key = ["name", "age", "designation"];   
var value = ["Kevin", 24, "Developer"];

let keyName = "age";                     // This is the key
let indexNeeded = key.indexOf(keyName);  // This is the index of the key
let valueNeeded = value[indexNeeded];    // Value associated with the required index.

console.log(keyName + " : " + valueNeeded);

Introduction to JavaScript Objects :-
  Objects are another way to store a collection of values.
  Objects are made up of key-value pairs know as properties.
{
   email: “beaver@gmail.com”,
   name: “Beaver”
}

Creating Objects :-
  There are 3 ways to create an object:
1 .    Using object literal	
2.     Empty object and then add properties
3.     Using new keyword


Object Literal :-
  Object is created with curly brackets {} and made up of key-value pairs, also referred to as properties.
const person = {
      name: 'Dr Jack'
};
We’ve created an object with one property inside it, one key-value pair. 
Every property is separated by comma, and 
Property values can be of any datatype

let shinobi = {
  name: "Naruto Uzumaki",
  "family": "green",
   age: 17,
  'village': "Leaf Village",
   isNinja: true
}
console.log(typeof(shinobi.name));    // 1
console.log(typeof(shinobi.family));  // 2 
console.log(typeof(shinobi.age));     // 3
console.log(typeof(shinobi.village)); // 4
console.log(typeof(shinobi.isNinja)); // 5


Creating an empty object and then adding properties.
Now that we have an object we need to add one more property.

When the property name is known ahead of time you can access the values of these properties using:
Dot Notation (object.property)

Accessing Objects :-
let ob = {name: "Crio", location: "Bengaluru"};
console.log(ob.name);   // Crio

Keys :-
  Object keys can only be strings.
JavaScript object keys cannot be number, boolean, null, or undefined type values. 
You can access the values of these properties using:
Bracket Notation (test["name"])
let ob = {1: "One"};
//console.log(ob.1 );    error
console.log(ob[1]);

let name = "Crio"
let ob = {name: "Criodo"}
console.log(ob.name) // 1
console.log(ob[name]) // 2

Adding new property :-
const details = {
   firstName: "John ",
   lastName: "Doe"
}
details.fullName = details.firstName + details.lastName;
console.log(details.fullName);

Checking Properties 
Removing properties
delete operator is used to remove properties.

 CRUD our objects
Create a new object called person and give it properties like name, jobTitle, email, isVerified (boolean, value = false) (Create operation)
Print only the name and the verified status of the person. (Read operation)
Change the isVerified status to true. (Update operation)
Remove the property name and add two new properties firstName and lastName (Delete operation)
Print the final object person.

Objects are another way to store a collection of values. 
Objects are made up of key-value pairs know as properties.

Nested Objects :-
Object properties can have objects as their values also.
The sub-properties of objects can be accessed by chaining together the dot or bracket notation.

  Accessing Nested Objects :-  
const personalDetails = {
   name: "John Doe",
   designation: "Data Analyst",
   age: 24,
   address: {
      locality: "1600 roselane colony",
      city: "Mumbai",
      state: "Maharashtra",
      country: "India"
   }
}


console.log (personalDetails.address); //1
console.log (personalDetails.address.city); //2
or
console.log(personalDetails['address']['city']);//2

  
const userDetails = {
    name: {
      first: "Kapil",
      last: "Raghuwanshi",
    },
    jobTitle: "JS Instructor @ Crio.do",
    email: {
      work: "kapil@epsilon.com",
      personal: "",
    },
    status: {
      isOnline: true,
      isVerified: false,
    }
  }
Use the object given here .
Update the first and last properties with your details. 
Add new property isProMember to the status and set it to false.

  
Object Destructuring :-
  The destructuring assignment syntax in JavaScript expression makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
  Object destructuring can extract multiple properties in one statement

const obj = { name : "Ravi" , age :20 } ;
var name = obj.name;    
   // unpacking object without destructuring
var age = obj.age;
const { name, age } = obj; //unpacking object properties using destructuring


Arrays are like objects in JS
Arrays in JS do not have a data type but are instead treated as objects with their indices as properties of the object, and elements of the array as values.
Note: typeof arr; // “object”

Object vs Array :-
  const obj = {"name":"crio.do"};
  const arr = [ 4, 8, 0, 6, 7 ] ;

If typeof for both arr and obj returns object how can we differentiate between the two?
 Array.isArray(obj);   //false
 Array.isArray(arr);   //true

Array Destructuring :- 
  Destructuring works for Arrays as well.
const [a, b] = [10, 20]; //a = 10, b = 20
You give an array of string.
Use the destructuring syntax to store first three array values in variables.
Return the merged string formed by three variables. 
Please note: Length of the array will always be greater than or equal to three.

  Let’s say we have 30  objects of same type and if we want to perform operations like insertion or deletion it will be cumbersome task.
  
Array of Objects :-

  
var student = [

      {
       name: "Kevin",
       rollNumber: 10,
       stream: "PCM"
      },

      {
        name: "Martin",
        rollNumber: 20,
        stream: "PCM"
      },

      {
         name: "Robert",
         rollNumber: 30,
         stream: "PCB"
      }
]

o - Access array of objects

console.log(student[1].name)       //Martin
//How to id of 3rd student
console.log(student[2]['std_id'])   //30

Given an array of objects as an argument, we have to return the name of student with maximum marks?   ( Length of the array always greater than 0)

Floating Point Numbers :- 
  JavaScript treats decimals as floating point numbers.
Operations like addition, multiplication, etc are subject to rounding error.

   Special Numbers :-
Infinity
let scale = 0;
let a = 1 / scale;
console.log(a);

NaN
let scale = 0;
let a = -1 / scale;
console.log(a);

- 0
let scale = 1;
let a = -0 / scale;
console.log(a);


Object properties can have objects as their values also.
The sub-properties of objects can be accessed by chaining together the dot or bracket notation.
The destructuring assignment syntax in JavaScript expression makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
JavaScript treats decimals as floating point numbers.

  
Math Functions
The JavaScript Math object allows you to perform mathematical tasks on numbers.
Solving the earlier problem, we use truncate method. 

Math.trunc(x) returns the integer part of x.
console.log(Math.trunc(303.3*3));    //909


 Math.round  :-
Without Math Function
var a =  4;
var b = 9;
console.log(a/b);  // 0.4444444444444444

var a =  4;
var b = 8;
console.log(a/b); // 0.5


With Math Function
var a =  4;
var b = 9;
console.log(Math.round(a/b));   // 0 

var a =  4;
var b = 8;
console.log(Math.round(a/b));   // 1

Math.floor
Without Math Function
var a =  25;
var b = 17;
console.log(a/b);  // 1.4705882352941178

With Math Function
var a =  4;
var b = 9;
console.log(Math.floor(a/b));   // 1

Constants :- 
Similarly, we have some constant values as well for example:  Math. PI
Math.PI represents the ratio of the circumference of a circle to its diameter, approximately 3.14159
𝙼𝚊𝚝𝚑.𝙿𝙸 = π ≈ 3.14159

Give a function, which take in radius as an argument, return the circumference of a circle.  
Circumference of Circle =  2*Pi *r

Math.abs
console.log(Math.abs(-89.09));                  // 89.09 
console.log(Math.abs(-0));                      // 0

Math.sqrt
console.log(Math.sqrt(25));                     // 5
console.log(Math.abs(-100));                    // NaN


Function Expressions :-
  
  Function Declaration
function display() {
    console.log('Hello');
}
display();  // Hello


  Function Expression
function (){
    console.log('Hello)
}

We assign it to a variable
var call = function (){
    console.log('Hello')   // Hello
}
call();

  
Removed ‘function’ :-
  
Function Expression
var call = function (){
    console.log('Hello')
}
call();

		
var call = () {
     console.log('Hello');
}
call();    Added ‘arrow’


var call = () => {
     console.log('Hello');
}
call();  

Arrow Functions  :-
  There’s another very simple and concise syntax for creating functions, that’s often better than Function Expressions.
  It is written with a () => {} format, where => is called the fat-arrow or just arrow.

  If no argument then simply parenthesis.
        var call = () => console.log('Hello');
        call();   // Hello
  If we have only one argument, then parentheses around parameters can be omitted. 
        var call = (a) => console.log(a);
        call(8);   // Hello
       var call = a => console.log(a);
        call(8);   // Hello

onvert Function Express to Arrow function
//Old Way
const area = function (l, b) {
  return l * b;
};
//Arrow Way 😎
const area = (l, b) => l * b;.

Pass by Value :- 
  All the primitive data types are passed by value.
  Boolean, number, string, null and undefined all are passed by value.
  Any changes that we make in the passed item with not reflect in the original item.

var a = 10;
var b = a;
b = b + 10;

console.log(a);   //10
console.log(b);   //20


function add(num){
        num = num + 10;
        console.log(num);  // What will be the output?
}
var num = 5;
add(num);
console.log(num);   // What will be the output?

Pass by Reference :-
  All the non primitive data types are passed by reference.
  Arrays, objects and functions all are passed by reference.
  Any changes that we make in the passed item will reflect in the original item.


  onst obj = {
     name:  "Jhon"
}
function changeName(obj){
    obj.name = "Doe";
}
console.log("Object before function call");
console.log(obj.name);                     //Jhon
changeName(obj);
console.log("Object after function call");
console.log(obj.name);                     //Doe


Storing Reference :-
  If we initialize one object with  another object, and we are making some changes, those changes will also reflect in the original object as well.
const obj = {
     name:  "Jhon"
}

var copy_obj =  obj;
console.log(obj.name);    // What will be the output? // Jhon


copy_obj.name = "Khaby"
console.log(copy_obj.name);  // What will be the output? //Khaby

console.log(obj.name);  // What will be the output?    //Khaby


Spread Syntax(...) :-
Spread syntax can be used when all elements from an object or array need to be included in a new array or object.
If any changes are made in the new object or array  those will not reflect in the original object or array.

  const obj = {
     name:  "Lame"
}

var copy_obj =  {...obj};

console.log(obj.name);    // What will be the output?   //Lame

copy_obj.name = "Khaby"

console.log(copy_obj.name);  // What will be the output?    //Khaby

console.log(obj.name);    // What will be the output?         //Lame 


------>> #Scope  :- 
  The scope is the extent to which a variable is accessible while executing the code.
  Scope basically partitions the visibility of variables throughout the program.

  
Global Scope :- 
If we want a variable to be accessible anywhere in the program we define it globally.
Global scope is the outermost scope in the JavaScript.
  
var a = 10; // variable 'a' global scope
function func(){
   console.log("a is accessible within the function:", a);
}
func();
console.log("a is accessible outside the function:", a);



Local Scope :- 
  If we want a variable to be accessible locally in the program we define it:
1  .  Within a function (Function scope  - var ) 
2  .  Within a block (Block scope - let & const)


 Function Scope :- 
function func(){
   var b = 20;   // scope within the function
   console.log("b is accessible within the function:", b);  // 10
}
func();
console.log("b is not accessible outside the function:", b );  // error



What will be the output & why?
var firstName = "Kevin";
function display(){
     var lastName = "Obrain";
     console.log("FullName: " + firstName + " " + lastName );
}
display();
console.log("FullName: " + firstName + " " + lastName );



Block Scope :-
  Block scope is a local scope bounded between two curly brackets {}. 
The block scope lets you limit the accessibility of all variables declared inside it. 
Variables declared using  let or const, can’t be accessed outside the curly brackets {}
var a = 10; // variable 'a' global scope
if(a===10){
   let b = 20;   // scope within the block ( will be same for const)
   console.log("b is accessible within the block:", b);  // 20
}
console.log("b is not accessible outside the block:", b );  // error


Variables  declared using var, can be accessed outside the curly brackets {}. 
var a = 10; // variable 'a' global scope
if(a=== 10) {
   var b = 20;   // scope is outside the block
   console.log("b is accessible within the block:", b);  // 20
}
console.log("b is accessible outside the block:", b);  // 20



 ---> Scope of var :- 
   
      var a =10;  // global variable
func ();
function func() {
  if(a==10)
    {
        var x =10;
       console.log(x);  //‘x’ can be accessed within the block scope
    }
  console.log(x);     //‘x’ can be accessed outside the block scope
}
console.log(x)        //‘x’ can’t be accessed outside the function scope


1) Re-declaring variable using ‘var’ 
2) Re-declaring variable using ‘const’ 
3) Re-declaring variable using ‘let’ 


var a = 10;
var a = 20;

console.log(a);        // 1) Output: 20      ;  2) Error:  Identifier 'a' has already been declared       ;  3) Error:  Identifier 'a' has already been declared


if(1){
  var a = 10;
  var a = 20;
}
console.log(a);        // 1) Output: 20      ; 2) Error:  Identifier 'a' has already been declared        ;  3) Error:  Identifier 'a' has already been declared


var a = 10;
func();
function func() {
   var a = 20;
}
console.log(a);        //  1)  Output: 10      ; 2) Output: 10                   ; 3) Output: 10  
 

Lexical Scope  :-  
Lexical scope is ability for a inner scope to access variables from the outer scope. 
That means inner scope is lexically bound to the outer scope. 


  
function parent() {
  const message = "I am from parent";
  function child() {
    console.log(message + " Called from child function ");
  }
  child();
}
parent();




var x = 10; // global scope
var outerFunc = function (){ // outermost function
    var y = 20;
    console.log(x + " " + y);

      var innerFunc= function (){ // innermost function
        var z = 30;
        console.log(x + " " + y + " " + z);
    }
    innerFunc();
}
outerFunc();


Hoisting :- Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

**Variables declared with const and let are not hoisted.
var a;
console.log(a);
a = 10;   //undefined

func ();


** Remember “Function Declarations” are hoisted entirely.
function func() {
  console.log("hello");
}              // hello

**  Remember “Function Expressions” are hoisted partially.
func ();
var func = function() {
  console.log("hello");
}                   //Error: func is not a function


** Remember “let and const” are not hoisted.
func(); 
let func = function() {
  console.log("hello");
}     //Error: Cannot access 'func' before initialization


Callback  :-  
  In JavaScript, a callback is a function passed into another function as an argument to be executed later.
  Callbacks make sure that a function is not going to run before a task is completed but will run right after the task has been completed.
  
function bikeRepair(funcToExecuteLater){
   console.log("Working on bike");
   //once the work is done
   funcToExecuteLater();
}
function callOwner(){
   console.log("Take back bike");
}
bikeRepair(callOwner);


function sum(n1, n2) {
console.log(n1 + n2);
}
function multiply(n1, n2) {
console.log(n1 * n2)
}
function calculator(num1, num2, operation) {
console.log(`Calculating on ${num1} and ${num2}`)
operation(num1, num2);
}
calculator(5, 5, sum);
calculator(5, 5, multiply); // different callback, different answer



Closures :- 
  Closure = Function + Lexical Environment
  If a function is created inside another function, it retains access to the scope of that outer function even after that outer function returns, because the outer function is in the lexical scope of the function.

    function parentFunction() {
  //Lexical Scope of childFunction() START
  const message = "Hi! I'm a message from parent";
  function childFunction() {
    console.log(message);
  }
  return childFunction;
  //Lexical Scope of childFunction() END
}
const ans = parentFunction();
ans();



function multiply(storedNum) {
    return function(num) {
        return storedNum * num;
    }
}
const multiplyTwo = multiply(2);
const multiplyThree = multiply(3);
const multiplyFour = multiply(4);
console.log(multiplyTwo(5));
console.log(multiplyThree(6));
console.log(multiplyFour(7));


The scope is the extent to which a variable is accessible while executing the code.
Global scope is the outermost scope in the JavaScript.
Block scope is a local scope bounded between two curly brackets {}. 
Lexical scope is ability for a inner scope to access variables from the outer scope. 
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
A callback is a function passed into another function as an argument to be executed later.
A closure refers to the lexical scope a function was declared in and the variables it has  access to.

  

  Advanced array callback functions  :- 
  For...Each
    forEach is invoked on an array, it iterates or loops through the array.
    Runs a Callback function on each value in the array.
    When the loop ends forEach returns undefined.
Eg:- Without arrow syntax
      const nums = [1, 2, 3, 4];
nums.forEach( function iterate(value) {
    console.log(value);
});

Eg :- With arrow syntax
const nums = [1, 2, 3, 4];
nums.forEach((value) => console.log(value));

-->>  foreach(value)    -  value is the element in the array 
-->>  foreach(value, index)    -  index is the index of the element in the array 

const nums = [1, 2, 3, 4];
nums.forEach((value, index) => {
  console.log("Element " + value + " is at index " + index);
});



const data = [
  { _id: "1", name: "Vivek" },
  { _id: "2", name: "Neha" },
  { _id: "3", name: "Satya" },
  { _id: "4", name: "Amit" },
];
for (var itr = 0; itr < data.length; itr++){
    if(data[itr]._id === "4"){
       console.log(data[itr]);
	 break;
    }
}



Find :-  find() method returns the value of the first element in the provided array that satisfies the provided testing function.
  const data = [
  { _id: "1", name: "Vivek" },
  { _id: "2", name: "Neha" },
  { _id: "3", name: "Satya" },
  { _id: "4", name: "Amit" },
];
const res = data.find((item) => item._id === "1");
console.log(res); //{ _id: '1', name: 'Vivek' }


Introduction to Sorting :- 
  sort() sorts elements of an array in-place and returns the sorted array.
The default sort order is ascending.

var arr = ["Xavi", "Zaltan", "Messi", "Aguero"];
arr.sort();
console.log(arr);   //[ 'Aguero', 'Messi', 'Xavi', 'Zaltan' ]

sort() tries to convert the array elements to strings first and sorts lexicographically (dictionary order).

  
nums.sort(function (a, b) {
if (a < b) return -1; // or any negative value
else if (a > b) return 1; // or any positive value
else return 0;
})
The comparator functions takes in two arguments to compare (say a and b) 
If the function returns -ve number then that means to sort a before b
If the function returns a +ve number that means to sort b before a
If the function returns 0 then it means to keep the original ordering of a and b



const nums = [4, 20, 12, 11, 100, 0, 4];
nums.sort (function (a, b) {
   if (a < b)
      return -1;
 });
console.log(nums)

=== as same as ===
const nums = [4, 20, 12, 11, 100, 0, 4];
nums.sort (function (a, b) {
    return a - b
 });
console.log(nums);

=== as same as ===
  
const nums = [4, 20, 12, 11, 100, 0, 4];
nums.sort ((a, b) => a - b);
console.log(nums);

Sort an array in descending order using arrow syntax.
Given an array of objects with different keys sort it using sort() method.
Print the names of the people in ascending order of their age.
const array = [
  {
    name: "Kevi",
    age: 25,
  },
  {
    name: "Arnold",
    age: 6,
  },
  {
    name: "Sheila",
    age: 56,
  },
];

 we are  doubling every number in the array and storing in a new array.
let newArr = []; // storing doubles
for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr[i]* 2;
}
console.log(newArr);   // [ 20, 60, 100 ]



let arr = [ 10, 30, 50 ];
let newArr = []; // storing doubles
for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr[i]* 2;
}
console.log(newArr);   // [ 20, 60, 100 ]



const arr = [10, 30, 50];
function multiplyByTwo(arr) {
    const newArr = [];
    for(let i = 0; i < arr.length; i++) {
        newArr[i] = arr[i] * 2;
    }
    return newArr;
const arrDoubled = multiplyByTwo(arr);
console.log(arrDoubled);               // [ 20, 60, 100 ]



map() method that allows you to transforms the array elements in a cleaner way.
map() method is used for creating a new array from an existing one, applying a function to each one of the elements of the original array.
function multiplyElements(arr,mutiplyFn) {
    const newArr = [];
    for(let i = 0; i < arr.length; i++) {
        newArr[i] = mutiplyFn(arr[i]);
    }
    return newArr;
}
const arr = [10, 30, 50];

function mutiplyFn(item){
    return item * 2;
}
const arrDoubled = multiplyElements(arr,mutiplyFn);
console.log(arrDoubled);       // [ 20, 60, 100 ]


=== as same as ===
  
const arr = [10, 30, 50];
function mutiplyFn(item){
    return item * 2;
}
const arrDoubled = arr.map(mutiplyFn);
console.log(arrDoubled);       // [ 20, 60, 100 ]
console.log(arr);    // original array is unchanged



---> 
  
const arr = [10, 30, 50];
function mutiplyFn(item){
    return item * 2;
}
const arrDoubled = arr.map(mutiplyFn);
console.log(arrDoubled);       // [ 20, 60, 100 ]

 ==  Anonymous function == 

const arr = [10, 30, 50];
const arrDoubled = arr.map(function (item){
    return item * 2;
});
console.log(arrDoubled);

== Arrow Syntax ==
 
const arr = [10, 30, 50];
const arrDoubled = arr.map((item) => item * 2);
console.log(arrDoubled);


Filter :- filter() method takes each element in an array and it applies a conditional statement against it. 
 If this conditional returns true, the element gets pushed to the output array otherwise it will not be pushed.
  
const fruits = ['apple', 'banana', 'grapes', 'kiwi', 'orange'];
function longerThanFive(str) {
    return str.length > 5;
}
const newArr = fruits.filter(longerThanFive);
console.log(newArr);    //[ 'banana', 'grapes', 'orange' ]

==== as same as ====
  const fruits = ['apple', 'banana', 'grapes', 'kiwi', 'orange'];
const newArr = fruits.filter((str) => str.length > 5);
console.log(newArr);     // [ 'banana', 'grapes', 'orange' ]


Reduce :- The reduce() method reduces an array of values down to just one value!
The reduce() method does not change the original array.

const newArray = array.reduce(accumulatorFn,initialValue);
(accumulator, currentValue, index, currentArray) => {
      //Reducer logic
  }

accumulator: The accumulator accumulates callback's return values. It means it stores all the values returned by callback. It can be a number, an array or an object(Required Parameter)
currentValue: Current value is similar to array[i] when we iterate over array using for loops (Required)
index: Current index of the item (Optional Parameter)
currentArray: 	We are iterating over, in this case its "array"(Optional)
initialValue: A value to use as the first argument to the first call of the callback (Optional)
If initialValue is specified 
currentValue to be initialized to the first value in the array.
If initialValue is not specified
accumulator is initialized to the first value in the array, and currentValue is initialized to the second value in the array.


--> Given a array of strings, we need to accumulate these strings as one string 
const arr = ['Hello', 'there!', 'How', 'are', 'you', 'doing?'];
function accumulatingString(accumulator, currentValue) {
    return accumulator + currentValue + ' ';
}
const str = arr.reduce(accumulatingString, ‘');  //Initial Value
console.log(str);   //Hello there! How are you doing?

===Same thing can be written as.===
  const arr = ['Hello', 'there!', 'How', 'are', 'you', 'doing?'];
const str = arr.reduce((accumulator, currentValue) => accumulator + currentValue + ' ', '');//Initial Value
console.log(str);   // Hello there! How are you doing?



  Splice :- 
splice() allows us to add and/or remove array elements inplace
splice() not only modifies the array it's being called on, but it also returns a new array containing the value of the removed elements.
  
We are given an index from which we want to delete all the elements in the array
function deleteElements(months,start){
     months.splice(start);
}
const months = ['Jan', 'March', 'April', 'June'];
deleteElements(months, 1);
console.log(months);    // [‘Jan’]

  Splice Variations
splice(start) - Takes in the start index of the array. Eg. can be used to duplicate an array.
splice(start, deleteCount) - Deletes the deleteCount number of elements from the start index.
splice(start, deleteCount, newItem1) -  Adds new element newItem1 right after the delete operation.

  We are given an index from which we want to delete all the elements and also how many elements to delete in the array ?
function deleteElements(months,start,deleteCount, newItem){
     months.splice(start, deleteCount, newItem);
}
const months = ['Jan', 'March', 'April', 'June'];
deleteElements(months, 1, 2, 'May');
console.log(months);    // ['Jan', 'May', 'June']


Slice :- 
  slice(start, end) copies or extracts a given number of elements to a new array, leaving the array it is called upon untouched.
  The slice() method selects from a given start, up to a (not inclusive) given end.
  
const fruit = ["Banana", "Orange", "Lemon", "Mango", "WaterMelon", 'Melon'];
var arr = fruit.slice(1, 3);
console.log(arr);

const fruit = ["Banana", "Orange", "Lemon", "Mango", "WaterMelon", 'Melon'];
var arr = fruit.slice(2,3);
console.log(arr);


forEach() method calls a function for each element in an array.
find() method returns the value of the first element in the provided array that satisfies the provided testing function.
sort() method sorts elements of an array in-place lexicographically and returns the sorted array.
map() method is used for creating a new array from an existing one, applying a function to each one of the elements of the original array.
filter() method takes each element in an array and it applies a conditional statement against it. 
reduce() method reduces an array of values down to just one value.



  
  








  
