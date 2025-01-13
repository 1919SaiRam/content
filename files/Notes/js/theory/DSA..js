Approach to problem solving
For any given problem, following these milestones of Crio Methodology will help you solve the problem systematically.
  
Milestone 1: Understand the problem clearly
1. Ask questions & clarify the problem statement clearly.
2. Take an example or two to confirm your understanding of the input/output

Milestone 2: Finalize approach & execution plan
1. Understand what type of problem you are solving and see if you can recollect solving similar problems in the past
     a. Obvious logic (this would only test ability to convert logic to code)
     b. Figuring out logic
     c. Knowledge of specific algorithm, data structure or pattern
     d. Knowledge of specific domain or concepts
     e. Mapping real world into abstract concepts/data structures
2. Brainstorm multiple ways to solve the problem and pick one based on the TC/SC requirements
3. Get to a point where you can explain your approach to a 10 year old

Milestone 3 : Come up with an “Instruction Manual” for a 10 year old
1. Take a stab at the high-level logic & write it down like a detailed Instruction Manual for a 10 Year old where each line of the manual can be expanded into a logical line(s) of code.
2. Try to offload logic out of the main section as much as possible by delegating to functions.

Milestone 4: Code by expanding your 10 Year Old’s "Instruction Manual”
1. Run your code snippets at every logical step to test correctness (Helps avoid debugging larger pieces of code later)
2. Make sure you name the variables, functions clearly.
3. Use libraries as much as possible

Milestone 5: Prove that your code works using custom test cases
1. Make sure you check boundary conditions and other test cases you noted in Milestone 1
If compiler is not available, dry run your code on a whiteboard or paper
2. Suggest optimizations if applicable during interviews
The target  was to find the Algorithm/Pattern/Data Structure to be used to solve the problem. The logic of “How” to arrive at the correct one for a given problem is the focus area.





------------------------------------=============================-----------------------=======================---------------------------------------
DSA (What? Why? How?)
How to master DSA?
Programming fundamentals

Recap - Variables, syntax, data types, loops, conditional statements
Introduction to Space and Time Complexity
What is Time Complexity?
What is Space Complexity?
Tradeoff between the two

Introduction to collections/modules/library
What? Why? How?
Introduction to Crio Problem Solving Methodology
Arrays
Static vs dynamic array
1D array vs 2D array
Real life examples
Basic operations in an array
Indexing, traversal
Rotation
Reversing
Sorting
Space and time complexity 

Strings
What?
Concept of indices, traversal
Common terminologies
Prefix vs suffix
Substring vs subsequence
Stack
LIFO principle
CRUD operations
Queue
FIFO principle
CRUD operations

Priority Queue
What? Where? Why? How?
CRUD operations
Binary search
What? Where? Why? How?

Map
What? Why? When?
CRUD operations
Set
What? Why? When?
CRUD operations
Hashmap/Hashset
What?

 Recursion
What? Why? When?
Real life examples
Is recursion better than iteration?
Base case
Recursive condition
Function signatures
Recursion template

  Introduction to linked list
What?
Advantages and disadvantages
Concept of node
Traversal
CRUD operations
Insertion at start/middle/end
Deletion at start/middle/end

  Introduction to Graph & Tree
What?
Binary Tree
Common terminologies
Concept of node
Traversals

  Math Concepts
Modulo operator
Prime numbers
GCD
Co-prime
Base conversion
Debugging 
What? How?


------------------------=================--------------------================-------------------------------------------------------
DSA :-
  
What?
Combination of Data Structures and Algorithms
Data structure: efficient data management to improve storage and retrieval
Algorithm: set of instructions to solve a particular problem

Why should you learn?
A building block of Software Development
Helps us keep our applications/softwares memory and time efficient
Helps shape our thought process - try to optimize our solution, suggest alternatives
Similar process is being followed in Software Development
Popular interview standard

How?
Consistency is the key, practice daily!!
Ensure that you solve problem on your own, do not copy-paste from internet
Ok to read/understand the solution, but please implement it on your own after that
Then will share/search a methodology (a step by step process) that can be used to solve any problem
Avoid procrastination and stacking up the problems for that will solve later 
Discuss your ideas with mentors/TAs/peers
  

----------->>>>>>>       Programming fundamentals
#Variables
Containers for storing data values

#Syntax
Each programming language has it own syntax (though there are a lot of similarity)
Get comfortable with the fundamentals

#Keywords: predefined, reserved words that have special meanings to the compiler

#Data types
Classification of data like: int, char, float, boolean

Further sub-division of data. 
Why do you think this sub classification is required? - Better memory management

Data types vs data structures?
  
#Constraints
Refers to restrictions, limitations.
Generally imposed on the input, helps us figure out the correct data type and algorithm
Example: the array given to you will have less than 10^6 elements

Debugging
Identification and removal of bugs/errors in the code
Important skill that comes when writing and executing code

------------->>>>>>>>>>> Programming Constructs

Conditionals: Helps in decision making 
If
switch
break
continue
Loops: Helps in iterating over a range
for
while
do while

If Else Block
Nested if else
Switch   -  Break & Continu

Loops
Selection of a loop is always a tough task for a programmer, to select a loop do the following steps:
Analyze the problem and check whether it requires a pre-test or a post-test loop.
If pre-test is required, use a while or a for loop.
If post-test is required, use a do-while loop.


Time Complexity Examples :- 
  
-->  You have ‘n’ books and you go through each of them to find the one you’re looking for
O(n)
Does this definition change if `n` changes?

-->.  
  int Sum(int a, int b) {
    return a+b;  
}
 2 units of time(constant). One for the arithmetic operation and one for the return - O(1)

--->   
  void main() {
    int n = 100;
    for (int i = 1; i <= n; i++) {
        printf("Hello World!\n");
    }
}
Loop executes n number of times, thus O(n)

--->  
Compare Algorithms/DSA Solutions. Which algorithm is faster?
How to measure its speed?
Time taken in seconds?
But that would change depending on the input data set size. Also on the machine on which its being run.
Number of statements executed?
This would depend on the language  and style of the code.
How to make it independent of these?
Time Complexity of an algorithm is the time taken for it to complete its operation as a function of its data input size, n. 
Standards - Big O notation (others - Big Theta, Big Omega)
Examples - O(1), O(n), O(n^2), O(n logn)


---->> Big O Notation
Way to measure how well our algorithm scales as the amount of data increases
Example: Input set of 10 elements compared to input set of million elements
Example: What has the biggest effect on the answer in this equation? → 2*n^3 + 5*n^2 + 19 
When n = 2, the answer is 2*8 + 5*4 + 19 = 55
When n = 3, the answer is 2*27 + 5*9 + 19 = 118
When n = 10, the answer is 2*1000 + 5*100 + 19 = 2519
19 is insignificant as n increases
In fact, n^2 is also dwarfed by n^3 as n increases
n^3 is the main contributor (even the constant, 2, doesn’t contribute much)
Hence, the complexity of this equation is O(n^3)



What is Space Complexity?
Algorithm also uses memory to store data for its operations
Which algorithm takes less space (desired)?
How would you measure their memory usage?
Compare memory used by different algorithms, for same input?
Not possible to test for all  inputs. Also, this depends on compiler, language, machine etc.
How to make it generic across all inputs?
Space Complexity of an algorithm is the amount of memory needed for its operation as a function of its data input size, n.
Standards - Big O notation
This space includes the inputs as well as additional space used by variables and DS

Space Complexity Examples  :--  
int Sum(int a, int b) {
    return a+b;  
}
Three integers used here - a, b and the result. But this is constant - O(1).

public int sumArray(int[] array) {
    int size = size of input array;
    int sum = 0;
    for (int iterator = 0; iterator < size; iterator++) {
        sum += array[iterator];
    }
    return sum;
}
array – the argument – space taken is equal to 4n bytes, n is length of array. Since this is input and is not space allocated by this function, it is not considered.
size – a 4-byte integer, sum – a 4-byte integer, iterator – a 4-byte integer
Total space needed is 4 + 4 + 4 (bytes). This is constant space. Thus, space complexity is O(1).


Visualisation of Common Big O Complexities
Applies to both Space and Time Complexities
Think very large n, to realize why O(1) is so much better than O(n) or why O(n) is so much better than O(n^2), etc.
Can you arrange these in increasing order?


Trade off between Time and Space
Algorithms use Memory and need Time to complete
In most cases, we can have trade off between Space and Time i.e. we can solve a problem
Either in less time by using more memory 
Or using less memory but spending more time
The choice depends on the constraints of a problems.
Example 1 - Merge Sort algorithm is exceedingly fast but requires a lot of space to do the operations. At the other end, Bubble Sort is exceedingly slow but requires the least space.
Example 2 - We can store already calculated results in some recursion problems, instead of calculating them multiple  times. (Example: Fibonacci problem)

What’s the Time/Space complexity here?
  int search (int arr[], int n, int target)
for(int i = 0; i < n; i++) {
	if (arr[i] == target) {
		return i;
	}
}
return -1;
}
Time Complexity - O(n) - Linear Search, grows directly in proportion to the input data size
Space Complexity - O(1) - No size specific data structure used 

Other examples of O(n)
Get the max/min value in an array.
Find a given element in a collection. (What happens if this is sorted?)
Print all the values in a list.
Every time a list or array gets iterated over, it is most likely in O(n) time.


Activity #2 What’s the Time complexity here?
public static ArrayList<Integer> findCommonElements(int[] arr1, int[] arr2) {
    ArrayList<Integer> commonElements = new ArrayList<>();

    for (int i = 0; i < arr1.length; i++) {
        for (int j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                commonElements.add(arr1[i]);
                break;
            }
        }
    }
    return commonElements;
}
Time Complexity - O(n*m) - Running 2 loops but each one iterates to a different length
Space Complexity - O(min(n, m))


Activity #3 What’s the Time complexity here?
for (i = 0; i < N; i++) {
    sequence of statements
}
for (j = 0; j < M; j++) {
    sequence of statements
}
Time Complexity - O(n + m) - Running 2 loops but they are not nested
Space Complexity - O(1) - constant number of variables


Activity #4 What’s the Time complexity here?
int sum = 0;
for(int i = 0; i < n; i++){
    for(int j = 0; j <= i; j++){
       sum = i+j;
  }
}
Time Complexity - O(n*n)
Space Complexity - O(1) - constant number of variables


Activity #5 What’s the Time complexity here?
for(int i = 0; i < a; i++) {
    for(int j = 0; j <= b; j++) {
        for(int k = 0; k <= c; k++) {
		print(i, j, k)
	   }
    }
}
Time Complexity - O(a*b*c) - Running 3 nested loops
Space Complexity - O(1) - constant number of variables

Always express complexity in terms of the variable given in the problem



What are Collections?
Collections are libraries with implementations of DS with commonly needed methods
Arrays, Map (Hash Map), Set (Hash Set), Priority Queue/Heap, Stack, Queue (we will visit each collection as we go further)
Import these libraries in your program and use the library methods
Available in most languages
C++ STL
Java Collections
Python libraries
JavaScript modules
Key Takeaway: no need to implement the Data Structures from scratch while solving problems. Use available Collections and focus on the logic.


------------->>>>>  1) Arrays :-
  
What?
Store items (generally, similar type) in contiguous memory location
Concept

Why?
Think: How would you calculate the sum of 100 integers? Use 100 different variables? What is the issue here?
  
Index
Index value represent the position of an element in an array
Indexing starts from 0 and goes uptill (size of array - 1)
To visit all elements of the array, we can through the index in the range [0, size - 1]

Static vs dynamic 
Static: Size is constant and defined during compile time (cannot be changed during runtime)
Dynamic: Array can grow/shrink during runtime (the library will take care of managing memory)

Rotation
Left rotate: Shift all the elements one place to the left
Right rotate: Shift all the elements one place to the right
Complexity?
Collection/library in your language?
  
Reversing
Changing the order of the elements in an array, first goes into last while the last comes to the first. Likewise swap(second, second last) and so on
Complexity?
Is there a collection in your language?
  
Sorting
Way to order elements, either in ascending or descending (Collection method)


------------->>>>>  2) Matrix :- 
  What?
2D arrays, grid like structure
Think of 1D array stacked on top of each other
Have the concept of rows and columns

Why?
Heavily used in real life, example board games
Used in graph, backtracking, dynamic programming problems that need a grid representation

Traversal  - visiting all elements
We maintain two separate coordinates 
Row index keeps track of the row while the column index keeps track of column

Dimension
Represent size of a matrix
row X col

Single Row, Single Column, Square vs rectangular matrix

Matrix traversal :- 
  
Simple matrix print
Approach 1: For each row, print all the columns
Approach 2: For each column, print all the rows

Print the content of a single row
Row index can iterate over the valid row range, column index is actually constant

Print the content of a particular column
Col index can iterate over the valid row range, row index is actually constant

Diagonal traversal
Approach 1 O(N^2): Traverse the entire matrix, O(N^2)
Approach 2 O(N): Hint: Can we do better since we know the cells that we want to visit



------------->>>>>  3)Strings :-
What?
Array of characters
Can contain alphanumeric characters, special characters
Lot of similarity with arrays:
Concept of indexing
Common methods like pushAtBack()
Arrays generally store data of some data type where as string stores characters only
Dynamic in size

Common terminologies :-
  Substring vs subsequence
Substring: Continuous part of string, take out characters from a string placed b/w two indices in a continuous order
Subsequence: Remove zero or more characters b/w two indices, without changing the order of the remaining elements.
Examples

Prefix vs suffix
Prefix: substring that occurs at the beginning of the string
Suffix: substring that occurs at the end of the string
Examples

Mutable vs immutable
In some languages, strings are immutable!
Mutable: object value can be changed after initialization
Immutable: object value cannot be changed after initialization


Common string operations :- 
Reversing a string
Check if strings are identical
Sorting 
Left/right rotation of string
Concatenation
Count occurrences of a character (character frequency)
Remove occurrences of a character
Printing all substrings/subsequences


------------->>>>>  4) Stack
What?
Linear data structure
Similar to array but with restrictions (LIFO)

LIFO
Last in First Out
Example:
Stack of Plates - only put new plate of top, remove from top

Properties
Values can repeat
Represented using array or linked list
Search is expensive, why? (will have to remove all and insert back)
Sort is also expensive, why? (we do not have any positional access)

Applications
Stacks can be used for expression evaluation
Stacks can be used to check parenthesis matching in an expression
Stacks can be used for Conversion from one form of expression to another
Stacks can be used for Memory Management, function call stack, recursion
Stack data structures are used in backtracking problems

CRUD
Refer to resources here
empty() - It returns true if nothing is on the top of the stack. Else, returns false.
peek() - Returns the element on the top of the stack, but does not remove it.
pop() - Removes and returns the top element of the stack. 
push(element) - Pushes an element on the top of the stack.

  
Stack - Frequently asked problems

How to identify Stack problems?
Behavior required is stack behavior
If you need to keep track of the previous elements in the order in which they occurred.
  
Frequently asked problems
Tree traversals without using recursion
Postfix, Infix and Prefix conversions
Expression evaluation
Balanced Parentheses problem
Next Greater/Smaller Element


------------->>>>>  5) Queue
What?
Linear data structure
Similar to array but with restrictions (FIFO)

FIFO
First in First Out
Example:
Queue of people waiting to be served
Can only join at the back and leave at the front

What?
Values can repeat
Represented using array or linked list
Search is expensive, why? (will have to remove all and insert back)
Sort is also expensive, why? (we do not have any positional access)

Applications
Queues - Kafka, RabbitMQ
The consumer who comes first to a shop will be served first. 
CPU task scheduling and disk scheduling.
Waiting list of tickets in case of bus and train tickets.
  
Library methods In different languages
Refer to resources here
add() - Inserts the specified element into the queue. 
peek() - Returns the head of the queue. 
remove() - Returns and removes the head of the queue. 
poll() - Returns and removes the head of the queue. 


Queue - Frequently asked problems

How to identify queue problems?
Behavior required is Queue behavior
Queue problems usually call for use of Queue explicitly

Frequently asked problems
Level Order Traversal without using recursion
BFS without using recursion
Queue Implementation using a Linked List
Implement a stack using the queue data structure
Implement a queue using the stack data structure

Other types of queue
Simple Queue, Circular Queue, Priority Queue (SORT), Doubly Ended Queue


------------->>>>>  6)Heap (Priority Queue)
What?
Data structure that gives the highest priority element
Priority here can be maximum or minimum element

Properties
Based on the binary tree structure (we will visit BT later)
Max Heap - largest item at top
Min Heap - smallest item at top
No sorting, yet a special order is maintained. 
Max-Heap: The value of each node is less than or equal to the value of the parent. The greatest value is at the root. The same property must be true for all subtrees.
Min-Heap: ?
Lookup of highest priority item is O(1) - this is the key advantage/use case for this DS
Insert/Delete operations are expensive, why? (maintain priority)
Search is expensive, why?
Priority queues are implemented using heap data structure

When?
Quickly find smallest/largest item

CRUD operations
insert() OR push()
top() OR front()
pop()
isEmpty()

Applications
To quickly find the smallest and largest element from a collection of items or array
In the implementation of the Priority queue in graph algorithms like Dijkstra's algorithm (shortest path), Prim's algorithm (minimum spanning tree) and Huffman encoding (data compression)
In order to overcome the Worst-Case Complexity of Quick Sort algorithm from O(n^2) to O(nlog(n)) in Heap Sort
For finding the order in statistics. Systems concerned with security and embedded system such as Linux Kernel uses Heap Sort because of the O(nlog(n)).

Heap - Frequently asked problems
Frequently asked problems
Quickly find smallest/largest item
Find the top K smallest/largest elements in a given array of integers
Find largest/smallest number
Find the Kth smallest/largest number




------------->>>>>  7)Binary Search
What?
Searching algorithm (the other common one is Linear Search)
Helps find a target element in an sorted array

Why?
Extremely fast searching
Time complexity: O(log N). (In comparison, TC for Linear Search is O(n))

Where?
Can be used to find an element among billions of sorted elements
[Advanced] Find answer to a monotonic function
  
Key Requirement for Data to apply BS
Data should be sorted (Ascending/Descending or Alphabetic order)

Is O(logN) a big deal? YES!
  
Binary Search Steps
Step 1
Set the search space equal to sorted array
Find a target element in a sorted array
Step 2
Compare the target with the middle element
Case 1: Target element = middle element
Return the index
Case 2: Target element < middle element
Discard the middle element and all the elements on the right of it
Case 3: Target element > middle element
Discard the middle element and all the elements on the left of it
Step 3
If the target was not found and there is no more elements left to search, return -1




------------->>>>>  8)Map
What?
Data structure that can perform fast lookups.
Based on the concept of key-value pair
Key = Unique Id
Value = Details for that key
Key and Value can be of different data types

Properties
Keys CANNOT repeat, has to be unique
INSERT not possible if the key already exists
UPDATE Value for a Key
DELETE based on Key
POSITION doesn’t matter
SEARCH based on Keys (generally, this is more optimal) or values
SORT - may be sorted based on Key

When?
When we need to keep track of the values associated with keys (e.g. Letter and its frequency)

CRUD operations
get(key) : Retrieve value for the given key
put(key, value), putAll(map) : Puts values for the key(s)
remove(key) : Removes mapping for key
values(), keySet() : Returns collection of values and keys respectively





------------->>>>>  9) Set
What?
Data structure that can perform fast lookups.
Similar to map
Based only the concept of key. No values here!
Key = Unique Id which can be of any data type

Properties
Keys CANNOT repeat, has to be unique
SIZE of the set is important. It tells us the count of unique keys
INSERT not possible if the key already exists
DELETE a Key
POSITION doesn’t matter
SEARCH based on Keys (generally, this is more optimal). Can take linear time

When?
When we need to keep track of presence/absence of unique elements

CRUD operations
equals() - two sets can be compared
size() - number of elements in the set
Common methods - add(), remove(), contains(), isEmpty(), clear()


------------->>>>>  10) Hashmap & hashset 
What is hashing? What is hashmap/set?
Technique of mapping a large chunk of data into small tables using a hashing function
Defines how to come up with a bucket for the given Key
Hash based implementation of map/set is called hashmap/hashset

Properties
Lookup/Insert/Delete by Key are constant time operations
Hashing algorithm has to be optimal to avoid collisions!
Worst case will behave like a list ORDER is not guaranteed

int generateHash(int x) {
return x % 16; // 16 buckets
}



------------->>>>>  11)Recursion
What?
Recursion is a method where the solution to a problem depends on solutions to smaller instances of the same problem. A method (function) can call itself in order to solve the problem.
Real world example
Counting number of rows in a movie theater 

Why?
Loops requires us to know how many times we will repeat the code execution.
A recursive function (while loop as well) can be used to execute a piece of code without knowing how many times you need to repeat it.
We just care about the stopping condition 

When?
 Use when the problem can be broken down into smaller, repetitive problems.
It is especially good for working on things that have many possible branches and are too complex for an iterative approach.
  
Is recursion better than iteration?
Problems that we solve using recursion can also be solved iteratively!
Some problems requires multiple nested loops where it is easier to implement a recursive solution
However, for most of the cases, recursive solutions consume more space as compared to iterative solutions. Why?

Recursion - key aspects
Base/Terminating condition
The case for which the solution can be stated non‐recursively/directly/trivially.
Recursive condition
The case for which the  solution is expressed in terms of a smaller version of itself. 
Function signature
Return type
Input parameter


Let’s try out this recursion problem
Sum of numbers up to n (E.g. n = 5, Ans: 15)
Recursion
Base/Terminating condition
Recursive condition
Function signature
Write the Space and Time complexity


Fibonacci

What?
It’s a series where sum of nth term is equal to sum of previous 2 terms
F(n) = F(n-1) + F(n-2) for each n >= 2
F(0) = F(1) = 1
Series: 0, 1, 1, 2, 3, 5, 8, 13, 21  . . .
Visualize this here - https://visualgo.net/en/recursion
Choose the  fibonacci problem



------------->>>>>  12)Linked list
What?
Linear data structure
Chain like structure where each “node” in the chain is connected via a link
If one link is broken, we cannot get to any of the others

Why? - Because of these Properties (compare to array)
Non-sequential memory
Size is flexible, can expand/shrink easily
Uses more memory than array (store pointers)
Insertion and Deletion are easy (don’t have to move elements)
No positional access, hence search is sequential
Cannot lookup previous element in Singly Linked List

When?
When you don’t know the number of items
Need fast Insert and Delete

Linked List doesn’t have a library since its a primitive data structure like array. It is used to implement other complex data structures like stack, queues, etc.

Other types of Linked Lists
Doubly Linked List
Circular Linked List

Applications
Implemented DS like stack, queues, trees
Implement Graph
    Adjacency list representation of graph
Implement hash tables
   Hash table is another great example of implementation using linked lists
   Each Bucket of the hash table can be a linked list (Open chain hashing)
   This is what we will do in session.

Linked List - Frequently asked problems
Reverse a Linked List
Detect a cycle in a Linked List
Find the middle node in a Linked List
Insert an element into a sorted Circular List
Remove Duplicates from a Linked List
Merge two sorted Lists
Delete Kth to last element in a Linked List
Partition a list into multiple lists
Rotate a Linked List
Implement a Doubly Linked Circular List

Node Structure
What is a node?
Building block
Node itself is not a linked list

 CRUD operations
Insertion
Inserting the first node
Insertion at the start, middle and at the end of linked list
Read/Update
Traverse the linked list and read/update the values
Deletion
Deleting the first node
Deleting at the start, middle and at the end of linked list



------------->>>>>  13)Introduction to Graph & Tree
What is a Graph?
Non-linear data structure
Consist of vertices and edges, vertices are also referred to as nodes
Edges connect two vertices

What is a Tree?
Similar to graph, they are also non-linear data structure with vertices and edges
Trees cannot have cycle
Mathematically, for ‘n’ vertices, there will exactly be ‘n-1’ edges
Every tree is a graph, but not every graph is a tree

Why?
Store hierarchical information
Real life examples: file system, organisation structure, roads and cities

Common terminologies
Root node
   Generally, the topmost node
   Does not have any parent
Parent<>Child relationship
     Left child
     Right child
Leaf node
     Does not have any children

--------------->>13.1)Binary tree
What?
Special kind of tree where we have utmost 2 child nodes
Why?
Binary trees are used more often than n-ary trees since n-ary trees are more complex, but usually provide no real speed advantage.
Properties
Similar to linked lists, we maintain links between nodes
How can we search for an element inside the binary tree?
How to perform insertion and deletion?
Can we sort it?
When?
Usually, explicitly specified in DSA problems

The tree can easily degenerate into its worst-case form, which is a linked list, since simple binary trees are not balanced.

  Concept of node
What will the node look like?
Node should encapsulate:
Data member to store value
Reference to a left child node
Reference to a right child node

Binary tree traversals
DFS based traversals (using stack)
Preorder (Root Left Right)
Inorder (Left Root Right)
Postoder (Left Right Root)

BFS based traversals (using queue)
Level order traversal

Binary Tree - Applications
Used to implement BST where lookup is much faster
Binary heaps where higher keys are above or equal to lower ones rather than to the left of (or below or equal to and right)
Hash trees, similar to hash tables
Abstract syntax trees for compilation of computer languages
Huffman trees for compression of data
Routing trees for network traffic

 Type of Trees  :-
Full Binary Tree
A full binary tree can be defined as a binary tree in which all the nodes have 0 or two children. In other words, the full binary tree can be defined as a binary tree in which all the nodes have two children except the leaf nodes.
Complete Binary Tree
A complete binary tree is another specific type of binary tree where all the tree levels are filled entirely with nodes, except the lowest level of the tree. Also, in the last or the lowest level of this binary tree, every node should possibly reside on the left side.
Perfect Binary Tree
A binary tree is said to be ‘perfect’ if all the internal nodes have strictly two children, and every external or leaf node is at the same level or same depth within a tree. A perfect binary tree having height ‘h’ has 2h – 1 node.
Balanced Binary Tree
A binary tree is said to be ‘balanced’ if the tree height is O(logN), where ‘N’ is the number of nodes. In a balanced binary tree, the height of the left and the right subtrees of each node should vary by at most one.

Binary Trees - Frequently asked problems
Find the Common Ancestor of a Node
Validate if the given Binary Tree is a Binary Search Tree
Find the Maximum Depth of a Binary Tree
Find the Mirror Element
Find the Right View  of a Binary Tree




------------->>>>>  14)Math Concepts
Modulo operator
Prime numbers
GCD
Co-prime
Base conversion

------------->>>>>  14.1)Modulo operator
What?
Arithmetic operator denoted by ‘%’
Gives remainder of integer division
Example:
remainder = x % y
Can also be used to rotate array & strings.

------------->>>>>  14.2)  Prime numbers
What?
A positive integer that is divisible only by 1 and itself
Examples: 2, 3, 5, 7, 11, 13, 17, 23 … 
Is 1 a prime number?
How to check for prime?
Can we do better than O(N) ?
 
------------->>>>>  14.3)GCD (Greatest common divisor)
What?
Also known as HCF (Highest Common factor)
Always computed for a pair
Largest number that can divide the pair without leaving remainder
Example:
GCD(24, 36) = 12
How?
Euclidean algorithm
GCD(num1, num2) = GCD(num2, num1 % num2)
GCD(num1, 0)          = num1

------------->>>>>  14.4)Co prime pairs
What?
Pair whose only common factor is 1
isCoprime(8, 9) = true
How?
Since 1 is the only common factor, we can also say the highest common factor is 1
For a pair to be co prime, their GCD should be 1

------------->>>>>  14.5)Base system 
What?
Ways of expressing numbers, using digits or other symbols, in a consistent manner.
Decimal base system
Most common and human friendly base system, also called base-10 numbering system
All the digits in the range [0, 9] is available to use
Binary base system
Base system mostly used by computers 
Every number is represented by 2 numbers 0 and 1. Hence the name binary
Each digit is referred to as a “bit”
How to interconvert between binary and decimal base system?




------------->>>>>  15)Debugging
What?
Process where we find and fix errors/bugs in code
Why?
Debugging and coding goes hand-in-hand with Software Development
Treat issues/errors as learning opportunity
Build confidence yourselves trying to debug and figuring out things by yourselves, incrementally
In the later Sprints, the errors you come across will need more skill to be debugged
