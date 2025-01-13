DSA (What? Why? How?)
How to master DSA?
Programming fundamentals
Crio DSA platform
Recap - Variables, syntax, data types, loops, conditional statements
Introduction to Space and Time Complexity
What is Time Complexity?
What is Space Complexity?
Tradeoff between the two


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
We will share a methodology (a step by step process) that can be used to solve any problem
Avoid procrastination and stacking up the problems for the last week
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








  


