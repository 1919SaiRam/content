Milestone 1: Understand the problem clearly
Ask questions & clarify the problem statement clearly.
Take an example or two to confirm your understanding of the input/output & extend it to test cases
Milestone 2: Finalize approach & execution plan
Understand what type of problem you are solving, reduce to known patterns or concepts
Brainstorm multiple approaches to solve the problem and pick one
Get to a point where you can explain your approach to a 10 year old
Take a stab at the high level logic & write it down - Pseudocode
Try to offload processing to functions & keeping your main code small.
Milestone 3: Code by expanding your pseudocode
Make sure you name the variables, functions clearly.
Avoid constants in your code, go for generic functions, you can use examples for your thinking.
Use libraries as much as possible
Milestone 4: Prove to the interviewer that your code works with unit tests
Make sure you check boundary conditions
Time & storage complexity
Suggest optimizations


Stack 
Queue
Hash
Linked List
Trees



-----------------------==============================-------------------------------------==================================----------------------===============---------------


Stack and Queue
Quick recap from DSA-1
Collections/STL for Stack and Queue
Implement two stacks in a single array
Implement stack using two queues
Problems
Next Larger Element


Stack - Recap :- 
A stack is a Last In, First Out (LIFO) data structure i.e. the elements inserted last will be the first ones to be retrieved. E.g. A stack of plates. The last one you put on top will be the first one you’ll remove.
Functionalities of Stack
push(x) - put element x on the top of the stack
pop() - remove an element from the top of the stack and return it
peek() - return the top element without removing it from the stack
isEmpty() - return true if stack is empty
size() - return the number of elements on the stack

Comparison and Advantages
Advantages of Stacks
Insertion and Deletion take O(1) time
Well suited for applications that involve recursion or backtracking

Disadvantages of Stacks
Stacks are not suitable for all applications. Searching for elements or storing elements in a sorted way are not effective with stacks.
  
                                            Operation                                      Array                                  Stack
Average Case                                 Insert                                         O(n)                                   O(1)
                                             Access                                         O(1)                                   O(n)
                                             Search/Update                                  O(n)                                   O(n)
                                             Delete                                         O(n)                                   O(1)


Worst Case                                  Insert                                          O(n)                                   O(1)
                                            Access                                          O(1)                                   O(n)
                                            Search/Update                                   O(n)                                   O(n)
                                            Delete                                          O(n                                    O(1)


                                                                                              
Space Complexity                                                                            O(n)                                    O(n)




Example problems  :-
  Reverse the string using stack
Start with an empty stack
Push one character at a time from the string to the stack
Start with an empty string
Pop the characters one at a time and append to the string

Sort a Stack - we can use an additional stack
Original stack is Stack1. Take a empty additional stack - Stack2
While Stack1 has elements	
Pop elementX from Stack1
While elementX is less than the top element on Stack2 (when Stack2 is not empty)
Pop the top element from Stack2 and insert it back to Stack1
Push elementX to Stack2
Stack2 will have numbers sorted with the largest on top

Stack1 - [ 5 9 3]        ElementX is NA           Stack2 -  [ ]
Stack1 - [ 5 9 ]         ElementX is 3            Stack2 -  [ 3 ]
Stack1 - [ 5 ]           ElementX is 9            Stack2 -  [ 3  9 ]
Stack1 - [   ]           ElementX is 5            Stack2 -  [ 3  9 ]
Stack1 - [ 9 ]           ElementX is 5            Stack2 -  [ 3  5 ]
Stack1 - [   ]           ElementX is 9            Stack2 -  [ 3  5 9 ]


Stack - Applications  :-
Applications
For expression evaluation.
To check parenthesis matching in an expression.
For conversion from one form of expression to another.
For Memory Management. Function Call Stack. Recursion.
In backtracking problems.
Stacks are useful in implementing recursive algorithms iteratively
Depth First Search - can be implemented using Stacks


Stack - Frequently asked problems
Frequently asked problems
Tree traversals without using recursion (Recursion uses function call stack, use stack explicitly as an alternative to that)
Postfix, Infix and Prefix conversions
Expression evaluation
Balanced Parentheses problem
Next Greater/Smaller Element
Implement stack using 2 queues
Implement the min() function using a Stack
Sort the values in a Stack
Find the next day with higher temperature
Decode an encoded string (repeating values encoded with a number)
How to identify Stack problems?
If you need to keep track of the previous elements in the order in which they occurred.


  Collections/STL for stack

C++
stack<int> stack;
stack.push(21);
stack.push(22);

stack.pop();
stack.pop();

while (!stack.empty()) {
  cout << ' ' << stack.top();
  stack.pop();
}


Java
Stack stack1 = new Stack()
Stack<String> stack2 = new Stack<String>();


// pushing the elements
stack1.push(21);
stack2.push("CRIO");

stack1.pop();

// Printing the Stack Elements
System.out.println(stack1);
System.out.println(stack2);


Python
stack = []
# append() function to push
# element in the stack
stack.append(21)
stack.append('CRIO')

print('Initial stack')
print(stack)

# LIFO order
print(stack.pop())
print(stack.pop())
print(stack.pop())

print(stack)

Javascript
function Stack(){
 this.stac=new Array();
 this.pop=function(){
 return this.stac.pop();
}
 this.push=function(item){
 this.stac.push(item);
 }
}
var stack=new Stack();
stack.push("21");
stack.push("CRIO");
alert(stack.pop());

console.log(stack.stac)



Activity 1 - Implement two stacks in a single array



Queue - Recap
A queue is a First In, First Out (FIFO) data structure i.e. the elements inserted first will be the first ones to be retrieved. E.g. A queue to buy tickets. The first person in the queue will get to buy tickets first.
Functionalities of Queue
add(e) - put element e at the tail of the queue
remove() - remove an element from the head of the queue and return it
peek() - return the head of the queue without removing it
size() - return size of the queue

add() and remove()  are also called enqueue() and dequeue()

Comparison and Advantages
Advantages of Queues
Insertion and Deletion take O(1) time
Well suited for applications that involve messaging since it maintains in order delivery

Disadvantages of Queues
Queues are not suitable for all applications. Searching for elements or sorting elements or insertion in the middle is not effective with queues


                                            Operation                                      Array                                  Stack                 Queue

Average Case                                 Insert                                         O(n)                                   O(1)                 O(1)
                                             Access                                         O(1)                                   O(n)                 O(n)
                                             Search/Update                                  O(n)                                   O(n)                 O(n)
                                             Delete                                         O(n)                                   O(1)                 O(1)


Worst Case                                  Insert                                          O(n)                                   O(1)                 O(1)
                                            Access                                          O(1)                                   O(n)                 O(n)
                                            Search/Update                                   O(n)                                   O(n)                 O(n)
                                            Delete                                          O(n)                                   O(1)                 O(1)


                                                                                              
Space Complexity                                                                            O(n)                                  O(n)                  O(n)




Types of Queues - Circular Queue
The regular queue, once full, has a disadvantage that a new element can be inserted only after all the elements from the queue are deleted.
Example: Queue of size 10 looks like this when fully filled  -  [ 1 2 3 4 5 6 7 8 9 10 ]
When we remove first 5 elements, it will look like this - [ Null Null Null Null Null 6 7 8 9 10 ]
However, we cannot insert any more elements into this queue even though it has 5 empty slots at the beginning of the queue, since insertion takes place only at the tail.
In order to support this, we would have to move all the elements to the left whenever any element is removed. This is not efficient.
This disadvantage is overcome by using a circular queue. In this, the last position is connected back to the first position. 
Whenever an element is removed, the head of the queue is moved to the next element. 
To add an element, the tail can move to the last element of the queue in a circular way, as long as there is some slot available.

  
Types of Queues - Deque and Priority Queue
Doubly ended Queue (DeQue)
This is a version of Queue which allows insertions and deletions at both ends. It can also be used as a stack.
Operations: insertFront(element), insertLast(element), deleteFront(), deleteLast()

Priority Queue
This is an enhancement of the Queue and takes into account the priority of the element being inserted.
During insertion, the priority of the element is checked before being inserted
During removal, the element of higher priority gets removed before elements of lower priority. If two elements have the same priority, the one that was inserted first will be removed first.
Operations: insert(element), getHighestPriority(), deleteHighestPriority()
We will revisit Priority Queues when we come to the Heap data structure.

  Applications
Queues - Kafka, RabbitMQ
The consumer who comes first to a shop will be served first. 
CPU task scheduling and disk scheduling.
Waiting list of tickets in case of bus and train tickets.
FIFO requests to shared resources like CPU, Disk access or Printers
Scheduling algorithms
Search algorithms - E.g. BFS

Library methods In different languages
add() - Inserts the specified element into the queue. 
peek() - Returns the head of the queue. 
remove() - Returns and removes the head of the queue. 
poll() - Returns and removes the head of the queue.


Frequently asked problems
Level Order Traversal without using recursion
BFS without using recursion
Queue Implementation using a Linked List
Implement a stack using the queue data structure
Implement a queue using the stack data structure / 2 stacks
Reverse first k elements of queue
Find the moving average of fixed size window
Design circular queue
How to identify Queue problems?
Queue problems usually call for use of Queue explicitly


Collections/STL for queue

C++
queue<int> gquiz;
gquiz.push(21);
gquiz.push(30);
gquiz.pop();
showq(gquiz);
cout << "\ngquiz.size() : " << gquiz.size();
cout << "\ngquiz.front() : " << gquiz.front();
cout << "\ngquiz.back() : " << gquiz.back();
cout << "\ngquiz.pop() : ";
showq(gquiz);

Java 
Queue<Integer> q= new LinkedList<>();
// Adds elements {0, 1, 2, 3, 4} to the queue
q.add(21);
q.add(30);
// Display contents of the queue.
System.out.println("Elements of queue "+ q);
// To remove the head of queue.
int removedele = q.remove();
System.out.println("removed element-"+ removedele);
System.out.println(q);
// To view the head of queue
int head = q.peek();
System.out.println("head of queue-"+ head);


Python
# Initializing a queue
queue = []
# Adding elements to the queue
queue.append('21')
queue.append('CRIO')
print("Initial queue")
print(queue)
# Removing elements from the queue
print("\nElements dequeued from queue")
print(queue.pop(0))
print("\nQueue after removing elements")
print(queue)


JavaScript 
# Make queue using constructor function
var queue = new Queue();
console.log(queue.dequeue());
console.log(queue.isEmpty());
queue.enqueue(21);
queue.enqueue(“CRIO”);
console.log(queue.front());
console.log(queue.dequeue());
console.log(queue.front());
console.log(queue.printQueue());


Activity 2 - Implement a queue using two stacks
Activity 3 - Next Larger Element
