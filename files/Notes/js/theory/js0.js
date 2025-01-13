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


  ------------------------------------------------------------------------------------------------------------------------------------------------------
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


  -------------------------------------------------------------------------------------------------------------------------------
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


