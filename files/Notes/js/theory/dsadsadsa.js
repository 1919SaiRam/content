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


Stack and Queue Problems 
Longest Valid Parentheses
Binary Tree Zigzag Level Order Traversal
Hashing
Quick Recap (DSA-1)
HashMaps/Hashsets
Hashing Problems
Count Distinct Elements

Activity 1 -  Find the length of longest valid parentheses
Activity 2 - Binary Tree ZigZag Level order traversal

Hash - Recap
A Hash Table is a data structure that maps keys to values such that the lookup of value based on keys is very quick
An input key is converted to an integer and fed to a hashing function to generate a Hash value. This Hash value puts the key in a particular Hash Bucket in the Hash Table.
We can visualize the Hash Table as an array of linked lists. Each Index in the array is a bucket and if there are multiple Keys that map to the same bucket, the Key and Value pairs are stored in a linked list at that Array index.
Example of a hashing function is the modulo operator.
Modulo 8 is the hashing function
For input key 5, the hash value is 5 (5 % 8)
For input key 8, the hash value is 0 (8 % 8)
For input key 13, the hash value is 5 (13 % 8)

Comparison and Advantages
Advantages of Hash Tables
Insertion, Search and Deletion take O(1) time
One of the better data structures to store large amounts of data which supports operations in quick time
Disadvantages of Hash Tables
Hashing can be inefficient when there are too many collisions (the data might not be equally spread across all buckets leading to slower search time). Collision resolution is needed.
Sorting and range queries are not natural with Hash tables.


                                            Operation                                      Array                                  Stack                 Queue             Hash


Average Case                                 Insert                                         O(n)                                   O(1)                 O(1)              O(1)
                                             Access                                         O(1)                                   O(n)                 O(n)               NA
                                             Search/Update                                  O(n)                                   O(n)                 O(n)              O(1)
                                             Delete                                         O(n)                                   O(1)                 O(1)              O(1)


Worst Case                                  Insert                                          O(n)                                   O(1)                 O(1)              O(n)
                                            Access                                          O(1)                                   O(n)                 O(n)               NA
                                            Search/Update                                   O(n)                                   O(n)                 O(n)              O(n)
                                            Delete                                          O(n)                                   O(1)                 O(1)              O(n)


                                                                                              
Space Complexity                                                                            O(n)                                  O(n)                  O(n)              O(n)




Details
HashSet vs HashMap
HashSet is used to maintain a set of unique keys. 
Application - to check if a character/number has been seen before, by adding them to the set
HashMap is used to store the mapping of keys to their values
Application - store frequency(value) of occurrence of a particular character or number (key)

Collision resolution
In some case, two items will give the same hash value. In such cases, we should have a way to put these two items in the hash table.  This is known as Collision Resolution. 
If the hashing function (the function that generates the hash value for an input item) is perfect, we won’t see collisions. But this may not be the case.

  
Collections/STL for Map

C++ (unordered_map)
unordered_map<string, int> umap;
map<int, int> gquiz1;
umap["CRIO"] = 10;
umap["Students"] = 20;
umap["Mentors"] = 30;
gquiz1.insert(pair<int, int>(1, 40));
gquiz1.insert(pair<int, int>(2, 30));
for (itr = gquiz1.begin(); itr != gquiz1.end(); ++itr) {
  cout << '\t' << itr->first<< '\t' << itr->second << '\n';
}
for (auto x : umap)
    cout << x.first << " " << x.second << endl;

Java (HashMap)
Map<Integer, String> mapHttpErrors = new HashMap<>();
mapHttpErrors.put(200, "OK");
mapHttpErrors.put(303, "See Other");
mapHttpErrors.put(404, "Not Found");
mapHttpErrors.put(500, "Internal Server Error");
System.out.println(mapHttpErrors);
Map<String, String> mapContacts = new LinkedHashMap<>();
mapContacts.put("0169238175", "Tom");
mapContacts.put("0904891321", "Peter");
mapContacts.put("0945678912", "Mary");
mapContacts.put("0981127421", "John");
System.out.println(mapContacts);

C++ (unordered_set)
unordered_set <string> stringSet ;
stringSet.insert("code") ;
stringSet.insert("with") ;
stringSet.insert("crio") ;
string key = "crio" ;
if (stringSet.find(key) == stringSet.end())
    cout << key << " not found" << endl << endl ;
else
    cout << "Found " << key << endl << endl ;

unordered_set<string> :: iterator itr;
for (itr = stringSet.begin(); itr != stringSet.end(); itr++)
    cout << (*itr) << endl;

Java (HashSet)
HashSet<String> set=new HashSet();
set.add("code");
set.add("with");
set.add("crio");
set.add("teachers");
set.add("mentors");
Iterator<String> i=set.iterator();
while(i.hasNext())
{
    System.out.println(i.next());
}


Python
# Creating an empty Dictionary
Dict = {}
print("Empty Dictionary: ")
print(Dict)
# Creating a Dictionary
# with dict() method
Dict = dict({1: 'Crio', 2: 'Teachers', 3:'Mentors'})
print("\nDictionary with the use of dict(): ")
print(Dict)
# Creating a Dictionary
# with each item as a Pair
Dict = dict([(1, 'CRIO'), (2, 'Teachers')])
print("\nDictionary with each item as a pair: ")
print(Dict)


Javascript
const CRIO = {};
CRIO.teachers=50;
CRIO.mentors=30;
CRIO.HR=10;
if(CRIO.teachers)
console.log(CRIO.teachers);
if(CRIO.mentors)
console.log(CRIO.mentors);
if(CRIO.HR)
console.log(CRIO.HR);

Activity 3 - Count Distinct Elements
Design a stack that finds the minimum value in O(1) time (Min Stack)
First Unique Integer 


Hashing
Hashing Problems
Find all Anagrams in a string 
Longest Palindrome 
K Most Frequent Words

Hash
Applications
Hash Functions are used in various algorithms to make their computing faster
Associative arrays: Hash tables are commonly used to implement many types of in-memory tables. They are used to implement associative arrays (arrays whose indices are arbitrary strings or other complicated objects).
Database indexing: Hash tables may also be used as disk-based data structures and database indices (such as in dbm). Databases may use hash to support quick lookups
Caches: Hash tables can be used to implement caches i.e. auxiliary data tables that are used to speed up the access to data, which is primarily stored in slower media.
Object representation: Several dynamic languages, such as Perl, Python, JavaScript, and Ruby use hash tables to implement objects.
Tiny URL creation - A shortened URL which can be resolved uniquely to a larger URL.
Cryptography and checksums
Speeding up data lookup e.g. Dictionaries


Hash - Frequently asked problems
How to identify Hash problems?
If you need to keep track of count of a particular element (Hash Map) or track occurrence of elements (Hash Set), you should consider Hash.
Many problems involving two for loops O(n*n) can be done in O(n) , if we find a way to maintain a map/array and make use of it. 
Frequently asked problems
Count the frequency of occurrence of letters or numbers or words
Find most/least frequently occurring word/letter/number/temperature etc.
Find a pair of numbers that add up to zero or a particular sum
Find two Numbers that add up to given sum
Find a subarray with a sum of 0 (or k)
Encode and Decode Tiny URL
Find first unique integer in an array
Find the largest continuous sequence with zero sum
Find the longest substring without repeating characters
Find the single non repeating number in an array
Find if 2 arrays are disjoint
Find if an array contains a duplicate
Find the first unique character in  string
Given an array of strings, group anagrams together
Check if one string is an anagram of the other


Activity 1 - Find All Anagrams in a given string
Activity 2 - Find the Longest Palindrome
Activity 3 - K most frequent words

Example problems
iven an input array of numbers, find two numbers that add up to X
Initialize an empty hash set (H)
For each number in the array → Arr[i]
If H contains X - Arr[i], then the result is Arr[i] and X - Arr[i]
Else insert Arr[i] into H

Given an input string where all characters appear twice except one character, find that character
Initialize an empty hash set (H)
For each character in the input string → Str[i]
If H contains Str[i], remove it from H
Else insert Str[i] into H
The character that remains in H is the character that occurs only once 
Similarly, we could use a hash map to store the frequency of occurrence of each character as value with Str[i] is key

In general, using a Hash Table is a good way to reduce a brute force approach.
If you want to quickly lookup data that is unsorted, Hash Table should be considered.


LinkedList 
Introduction to Linked Lists 
Patterns Overview
Pattern - Implementation problems 
Remove duplicates from a given Linked List
Pattern - Reverse a Linked List
Reverse a given linked list
Pattern - Fast and Slow pointer
Move the middle element of a linked list


Introduction
A linked list is a data structure to store values (Integers, strings, objects etc.) sequentially. The data is stored in Node(s).
Each Node has a link to the next Node. The first Node is the Head of the Linked List and the last Node is the Tail.
  Types of linked lists
In a  Singly Linked List, the Nodes only have a pointer to the Next Node. The Tail points to Null.
In a Doubly Linked List, the Nodes have pointers to both the Next Node and the Previous Node. The Next pointer of the Tail and the Previous pointer of Head point to Null.
In a Circular Linked List, the Tail Node points to the Head Node. In fact, there is no clear Head or Tail in this case. This could be either a Single Linked List or a Doubly Linked List.

Comparison and Advantages
CRUD stands for Create, Read, Update and Delete operations, which are the basic operations for data

Advantages of Linked List
Fast insertion and deletion at the ends
Flexible size, doesn’t have unused 
memory or need resizing like arrays 

Disadvantages of Linked List
Search and Update are slow due to the 
required sequential iteration
Takes more memory than array per node
since the pointer also needs to be stored


Singly Linked List
Doubly Linked List

                                            Operation                                      Array          Singly Linked List     Doubly Linked List                          Stack                 Queue             Hash


Average Case                                 Insert                                         O(n)            O(1)                       O(1)                                   O(1)                 O(1)              O(1)
                                             Access                                         O(1)            O(n)                       O(n)                                   O(n)                 O(n)               NA
                                             Search/Update                                  O(n)            O(n)                       O(n)                                   O(n)                 O(n)              O(1)
                                             Delete                                         O(n)            O(1)                       O(1)                                   O(1)                 O(1)              O(1)


Worst Case                                  Insert                                          O(n)            O(1)                       O(1)                                   O(1)                 O(1)              O(n)
                                            Access                                          O(1)            O(n)                       O(n)                                   O(n)                 O(n)               NA
                                            Search/Update                                   O(n)            O(n)                       O(n)                                   O(n)                 O(n)              O(n)
                                            Delete                                          O(n)            O(1)                       O(1)                                   O(1)                 O(1)              O(n)


                                                                                              
Space Complexity                                                                            O(n)            O(n)                        O(n)                                   O(n)                  O(n)              O(n)



Node Structure :- What is Node in a Linked List?
Building Block
Node itself is not a linked list
JAVA
public class Node {
  public int val;
  public Node next;

  public Node(int _val) {
    val = _val;
    next = null;
  }
}

C++
class Node {
public:
  int val;
  Node* next;

  Node(int _val) {
    val = _val;
    next = NULL;
  }
};

Python
class Node:
    def __init__(self, _val):
        self.val = _val
        self.next = None

JavaScript
class Node{
  constructor(val){
    this.val = val;
    this.next= null;
  }
}


Build methods that you can re-use (Library)
Linked List doesn’t have a library since its a primitive data structure like array and is used to implement other complex data structures (Stack, Queue etc.).
Write a class which will represent a linked list. This is the logical way to represent a linked list.
It will maintain the head, tail, length, type of linked list (single/double/circular), etc.
It will make use of the given node structure/class for the nodes (The value stored in the nodes can be simple data type or class objects)
It will provide methods like copy (from another linked list), insert at head, insert at tail, delete node, search for a value, find the nth value, update node, reverse the list, split the list, get length, print list etc.
These library methods can be used to quickly solve problems by invoking the methods and avoid writing these methods from scratch every time. 

Note that in the DSA Problems, you’ll be given the Node Structure and a pointer to the first node, in most problems. 
Even if you don’t create a class, at a minimum, writing methods that can reverse(), split() etc. will be re-usable across multiple problems. 


Example class with method signatures
public class LinkedList {
    Node head = null;   // Head of list.
    Node tail = null;      // Tail of list.
    int length = 0;          // Length of list.

    public insertElement(int position, Node node);
    public Node removeElement(int position);
    public Node updateElement(int position, Data newData);  // Update element at a specific position.
    public Node searchData(Data data);                                           // Search for specific data.
    public LinkedList reverse();

    public static void main(String[] args) {                                       // To show how this class can be used.
        LinkedList linkedList = new LinkedList();
        linkedList.insertElement(new Node(new Data(5)));
        Node removedElement = linkedList.removeElement(5);
        LinkedList reversedList = linkedList.reverse();
    }
}


Other information
The nodes are not contiguously stored in memory; unlike an array
Linked lists are suitable for Stacks and Queues since they need addition and deletion at the ends
Data structures like Binary Tree are related to linked lists; they have a Left and Right pointer instead of Next
Linked Lists are used to implement 
DS like Stacks, Queues and Trees
Implement Graphs - Adjacency list representation of Graph
Hash Tables - Each Bucket of the hash table can be a linked list (Open chain hashing)

Linked List - Important patterns
Implementation problems
Slow and fast pointer
Reversing a Linked List
Partition a LL
Two LL  problems 
Mark and verify / Modify Node
Loop pattern
Sorting pattern


Note: Most of the linked list problems are expected to be solved in linear time and without using any extra space, i.e.,  expected time complexity is O(n) and space complexity is O(1).

  Implementation pattern 
Concept
Simply use the basic loop (next pointer) modification to achieve the expected result. Do the expected stuff inside of the while/for loop when iterating over a linked list.
Example Problems
Add 1 to a number represented by a linked list 
Insert an element into a sorted Circular List
Delete Kth to last element in a Linked List
Rotate a Linked List


Activity 1 -  Remove Duplicates from a given Linked List

Reverse pattern 
Concept 
Reversing a linked list with the prev and the next pointer 
This can also be done recursively
Reversing a linked list can be used as an auxiliary step in many problems
Example Problems
Check if linked list is a palindrome or not
Reverse the second half of a given linked list

Activity 2 - Reverse a given linked list

Reverse Pattern - Notes
Reverse a singly linked list in place
We reverse one node at a time. Start with a Current (at head) and a Previous pointer (at null). For each Current node, reverse it by pointing it to the Previous node. Keep track of the the Next node before doing this. Repeat this for each node by incrementing Current and Previous, one node at a time.
Reverse a sublist between 2 given positions, starting at Mth node and ending at Nth node
Split the list into 3 sublists --> 1 to M-1, M to N, N+1 to the end.
Reverse the M to N sublist.
Append the 3 sublists in order.
OR
We get to the Mth node sequentially and then reverse each node in place using Current and Previous pointers. We stop at the Nth node. This reverses the sublist between M and N.
Additionally, we need to keep track of the (M-1)th node and the (N+1)th node, so we can connect the Nth node to the (M-1)th node and the Mth node to the (N+1)th node. This completes the reversal.
Reverse every K sized sublist
Split the list into K sized sublists, reverse each sublist and append the sublists.
Reverse alternating K-element Sub-list
Split the list into K sized sublists, reverse alternate sublist and append the sublists.


  Fast and slow pointer pattern 
Concept 
We use two pointers simultaneously to iterate over a linked list 
One pointer (slow) takes 1 step at a time 
Second pointer (fast) takes 2 steps at time 
By the time the fast pointer reaches the end of the of the node, slow pointer is expected to be in the middle 
This can also be used as an intermediate step in many linked list problems
Example Problems 
Delete the middle element of a linked list
Detect cycle in a given linked list

Activity 3 - Move the middle element of a linked list
Insert into sorted circular linked list
Delete Kth element from the end of a linked list
Delete middle node in a linked list

Memory - what’s that?
Think RAM, which the programs need for their execution
What is a memory address?
The location of a particular Byte in memory
The computer may use a 32 Bit address or 64 Bit address (diagram shows 32 Bit address)
To read the contents at a particular memory address, the computer has to do some work


Basic data structures - building blocks
Array
Sequential memory
One time memory allocation
Linked List
Non sequential memory
Dynamically memory allocation
Most other data structures can be built using the same concepts as Array or Linked List

Q: Why do we need to have these 2 different types? Can’t we use just one type?
We’ll see the properties of each type - there are differences in how they work and what they prioritize
We have the option of picking one of them depending on our requirements - so that operations are optimal (memory and time taken)


Array - Activity #1 
How would you allocate Memory for an Array?
Allocate a fixed number of Bytes in a sequential memory block (malloc or new)
Maintain a variable which points to the start address of this memory block
Know size of each Data Item
Example: We can allocate a 20 Byte block and store 5 integers of 4 bytes each. Array of size 5.
Optionally, maintain the number of elements currently stored in array

Array - Activity #2
How would you do Insert/Update/Lookup at a position/index, based on the memory you allocated?
We know the starting address of the memory block
Address for lookup = Starting Address + (Size of data item * index)
Example: arr[3] = 1024 + (4 * 3) = 1024 + 12 = 1036  (item at 1036)

    Q: How would you do this for a 2D Array?
Address for lookup = Starting Address + (Size of data item * number of columns * row index) + (Size of data * column index)

Array - Activity #3
How would you delete the item at a given index?
Delete at the end is easy
Can just reduce number of items current stored by 1
Delete in the middle
Need to move up all the remaining elements and then reduce number of items stored by 1
   Q: Why do we need to compact after deletion?
Otherwise, how would traversal work?
   Q: Can you insert an element in the middle (such that remaining item order is maintained)?
Same challenge as with Delete in the middle

Array - Activity #4
How would you add an extra element beyond the capacity of the array?
Cannot accommodate the new item within allocated fixed memory block since the very next address may or may not be available
Need to allocate a new fixed memory block with updated size
Then move all the items from the old memory block to new memory block

Array - Summary
Properties
Sequential Memory
Can store fixed number of data items
Index/Position based operation
INSERT, UPDATE, LOOKUP by index easy
DELETE is expensive 
LOOKUP by value needs a search by traversal
Advantages
If the maximum number of data items is known, easy to pre-allocate memory and use for storage and access
Disadvantages
Irrespective of number of items (even if there are few), we’ll still use the same amount of memory, there may be wastage
If we want to add one item more than allocated size, that will be expensive
DELETE is expensive


Linked List - Activity #5 
Linked list is a DS that dynamically allocates memory for each data Item when the data item is added
What would the Memory layout for this data structure look like?


Linked List - Activity #6a
How does the data item get stored in a linked list? 
We should be able to traverse all the data items.
Gest stored in Nodes which are linked to each other
What is this “node”? Node stores data item + something else. What is this something else?
Think about how memory is allocated for the data items
For non sequential data, how would you get to the next item if you don’t track its address in the previous item?
Why didn’t array need a node?
JAVA
public class Node {
  public int val;
  public Node next;

  public Node(int _val) {
    val = _val;
    next = null;
  }
}

C++
class Node {
public:
  int val;
  Node* next;

  Node(int _val) {
    val = _val;
    next = NULL;
  }
};

Python
class Node:
    def __init__(self, _val):
        self.val = _val
        self.next = None

JavaScript
class Node{
  constructor(val){
    this.val = val;
    this.next= null;
  }
}


Linked List - Activity #6b
Does accessing data items take more time with Linked List compared to Array?
Refer to the memory layouts
Reading data from consecutive address is easier than reading data from 5 different addresses - this would take more time
For example, if reading bytes at a given location takes x seconds and moving to another location takes y seconds. 
Reading 5 elements of array may take only y + 5x seconds
Reading 5 elements of LL would take 5 (y + x) seconds

Note: These would be somewhere in the microseconds or so. The above example is just to drive home the difference.

  Linked List - Activity #7
How would you Insert a new data item into a linked list?
Is it the first item?
If not, should you insert at beginning or end of the list?
How do you know you have reached the end of the list?
What are the pointers you should take care of?

  Linked List - Activity #8
Delete a data item into linked list
Should you delete from the beginning or at the end or by value of the data item?
Is it the first item in the list?
Is it the last item in the list?
Is it the only item in the list?
What are the pointers you should take care of?

  Linked List - Summary
Properties
Non Sequential Memory
Flexible size, can grow or reduce easily
INSERT and DELETE easy
Cannot directly LOOKUP a value, Search will be sequential
Advantages
Works well irrespective of number of items since memory is dynamically allocated
Can add/delete items efficiently
Disadvantages
Takes more memory than array, per data item, since pointers also need to be stored
Cannot access by position - lookup slower
Not suited for sorted data



LinkedList 
Partition (pattern introduction)
Partition a given linked list
Copy a linked list with random pointers
Two Linked Lists (pattern introduction)
Merge two sorted linked list
Mark and Verify / Modify Node (pattern Introduction

Linked List - Important patterns
Implementation problems
Slow and fast pointer
Reversing a Linked List
Partition a LL
Two LL problems 
Mark and verify / Modify Node
Loop pattern
Sorting pattern


Partition pattern 
Concept
Create new empty linked lists (two or more if required, one serving each partition)
Maintain the heads and/or tails of these new lists
While iterating over the original linked list, check which new linked list the current node should be added to, simply append that node to the end of that linked list and keep iterating.
Merge the separate linked lists into one, if required.
Example Problems
Segregate odd and even nodes in a linked list 
Segregate odd and even values in a linked list
Clone a linked list with random pointer
Sort a linked list of 0s 1s and 2s

Activity 1 -  Partition a given linked list
Activity 2 - Clone a linked list with random pointer

Two Linked List Pattern  
Concept 
Two linked lists will be given as an input. 
Generally we use two pointers, one at the start of the first linked list and other at the start of the second linked list.
Move the pointers together OR One at a time depending on the question and do the needful (modify value, remove, add to a new list, etc.)
Example Problems
Merge two sorted linked lists
Add two numbers represented by linked lists
Multiply two numbers represented by linked lists

Activity 3 - Merge two sorted linked lists

Mark and Verify / Modify node pattern 
Concept
There will be cases where we have to mark and node and visit it later, to check whether we have visited it or not 
Either we modify a structure to maintain a boolean variable namely isVisited
Or if the given values of a nodes are positive integers then we mark it negative while iterating. 
When we revisit the nodes, either by checking the boolean or by looking at the value of the integer, we can tell whether its been visited or not.
Example Problems
Intersection of two linked lists (Take-home problem)

Sum Lists
Intersection point of two linked lists


LinkedList 
Loop pattern (pattern introduction)
Detect a loop/cycle in a linked list
Remove a cycle in a given linked list
Sort a linked list (pattern introduction)
Merge sort for linked list

Loop pattern 
Concept
We detect a loop with the help of slow and fast pointer, if we move them simultaneously and there is a loop present, they are bound to meet at some node.
Once the loop is detected, we then try to remove the loop. To remove the loop we need to find the node pointing to the head of the loop. 
To find the head of the loop, we point any 1 pointer to the head of the linked list and other pointer at the meeting point. 
Move both the pointers at the same pace now, until they both point to a same node. That same node is the starting point of loop.
Example Problems
Detect if loop/cycle exists in a given linked list
Find length of a linked list cycle
Detect the head of the cycle in a given linked list
Remove the loop in a given linked list

Activity 1 -  Detect a loop in a given linked list
Activity 2 - Remove the loop in a given linked list

Cycle Pattern - Notes
Does the linked list have a cycle
A Slow Pointer and Fast Pointer start at the beginning. Slow Pointer moves one node and Fast Pointer moves two nodes with every iteration.
If there is no cycle, Fast Pointer reaches the end (Null). Else, it will intersect with the Slow Pointer at some point, indicating a cycle.
This intersection is guaranteed since the Fast Pointer will catch up with Slow Pointer. If the Fast Pointer is one step behind the Slow Pointer, it will catch up in the next step. If the Fast Pointer is two steps behind the Slow Pointer, it will be one step behind in the next step and will catch up in the step after.
Find the length of a linked list cycle
This builds on top of the cycle detection above. 
When the Fast and Slow Pointers have met, we can use a third pointer to iterate one step at a time and get the cycle length as the number of steps it takes to come back to the Slow or Fast pointer
Find the starting node of a linked list cycle
This uses the linked list cycle length found. 
Start 2 Pointers (Pointer1 and Pointer2) at the beginning of the List. Move Pointer2 ahead by the Length of the cycle.
Increment both Pointer1 and Pointer2 one step at a time. The point where they meet will be the starting node of the cycle. E.g. If a Linked List had 10 nodes and a Cycle starting from Node 4 to Node 10, of length 7. Pointer2 starts at Node 8 and in three steps goes to 9,10 and 4. The Pointer1 goes 2,3,4 in three steps. They both intersect at 4.


Sorting Pattern
Concept 
We are asked to sort a given linked list . 
The idea is to use the concept same as merge sort. 
First find the middle of the LL (using slow and fast pointer)
Then partition them and recursively sort both the linked lists. 
Now simply merge the two sorted linked lists (using the two linked list pattern)
Example Problems 
Sort a given linked list 
Note : Sort a linked list with only 0s 1s and 2s is a partition problem and can be done in O(n) where as the above merge sort takes O(n*log(n)) time.

Activity 3 - Sort a given linked list

Problem - Approach
 For Linked Lists, Merge Sort is a good sorting algorithm with a worst case Time Complexity of O(nlogn)

Note: Recursive Merge Sort takes up O(log n) space because of the stack. If a real space complexity of O(1) was required, we should write a non-recursive version of Merge Sort.
Note: Merge Sort for arrays has a Space Complexity of O(n)

Merge Sort approach
Divide the input list into 2 halves
Sort the left half and right half independently
Do a Sorted Merge of the left half and right half to get the sorted list
This is a recursive solution where we sort the 2 halves by dividing them again and again, till each half has a single node. These single nodes then get merged in a sorted way, leading to larger sorted sublists as we move back up, along the recursion path. At the end we have the fully sorted list.

  Visualisation
Additional Information
Non recursive version of Merge Sort which would ensure Space Complexity of O(1)
Bottom up approach - Take the input list and treat it as a collection of small sorted lists. It makes log N passes along the list, and in each pass it combines each adjacent pair of small sorted lists into one larger sorted list. When a pass only needs to do this once, the whole output list must be sorted.


