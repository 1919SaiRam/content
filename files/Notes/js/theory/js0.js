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

Events
Lists

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

