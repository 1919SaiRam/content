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


