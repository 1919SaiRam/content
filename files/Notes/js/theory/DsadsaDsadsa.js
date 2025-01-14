Heaps
Concept Introduction
Insertion and Deletion
Heapify
Build Heap


Introduction to Greedy Algorithms
Introduction to Recursion
Introduction to Backtracking

Introduction to Graphs
Detect Cycle in a graph 
Route Between Two Nodes 
Single source shortest path (SSP)

Problem Patterns
Bipartite partitioning of a graph
Connected Components 
Multisource BFS
Topological sorting

Minimum Spanning Tree
Prim’s
Kruskal’s
Shortest Path
Dijkstra's

-----------------------------------===============================--------------------------==================================------------------------------------

  Introduction to Heaps
Heaps are the data structure that can access the maximum or minimum element very quickly
They are implemented using arrays (can also use linked lists). The Array Map of a Heap would like like this
You will notice that the heap can be visualized as a nearly complete binary tree.
Array Map                                                                                             //Note: We are using a Binary Heap here. There are other types as well.
//Source: brilliant.org
Root of the tree is the first element in the array corresponding to i = 1
The parent of node i = i / 2 → Index of parent node
Left child of node i = 2 * i → Index of left child
Right child of node i = 2 * i + 1 → Index of right child 

Max Heap and Min Heap
In a Max Heap, the value of the Parent is always greater than or equal to the value of its child nodes
To build a Max Heap, we call the max_heapify function which starts bottom up. It will compare and swap parent with its child nodes to satisfy the above property. Doing this repeatedly till the root creates a Max Heap.
Removal of node is removal of the root node. Upon doing this, we move the last heap node to root. Compare this node to its children and swap with the larger child till Max Heap property is satisfied.
Insertion of node is inserting a node at the end of the heap and swapping with the parent till it is satisfies Max Heap property.

In a Min Heap, the value of the Parent is always lesser than or equal to the value of its child nodes
Similar to Max Heap, but has a min_heapify which will work bottom up and swap parent and child nodes to satisfy the above property.


  Heapify
      Heapify a given node
  Build Heap
      Convert an array to heap
  Heaps and Priority Queues
      Heaps are naturally suited to implement Priority Queues since Heap is a data structure where the nodes of the tree are in a priority based order. 
Example - Max Heap has largest element at root and Min Heap has smallest element at root.
It stores data in a way that the first element with highest priority is returned quickly.
Heaps are preferred over other data structure to implement Priority Queue since they provide better performance.
A binary heap can provide
O(1) time getHighestPriority()
O(log n) time insert()
O(log n) time deleteHighestPriority()


Heaps in different languages
Java
PriorityQueue <Integer> small_heap = new PriorityQueue<Integer> ();
PriorityQueue<Integer> large_heap = new PriorityQueue<Integer> (Collections.reverseOrder());

C++
priority_queue<int> large_heap;
priority_queue<int, vector<int>, greater<int>> small_heap;
We can write a custom comparator instead of greater<int> if we have a data structure other than int and want to prioritize based on other conditions

Python
heapq.heapify(array), heapq.heappush(element) and heapq.heappop() for Min Heap
For Max Heap, invert the value of the keys and use heapq. Example: use -5 if you want to insert 5

Javascript
Javascript does not have a standard heap / priority queue data structure that you can use out of the box.


  Applications and References
            Applications
Heaps can be used to solve problems where the goal is to find the top K smallest or largest elements, K way merge problems
Implementing Priority Queues
Important algorithms such as Dijkstra’s algorithm to find the shortest path and the Heap Sort algorithm

Frequently asked problems
Find first K smallest/largest elements in the array
Find the Kth largest/smallest element in an array
Find the K closest points to the origin
Find the top K frequent elements/words
Frequency sort (sort a string based on frequency of characters)
Remove K numbers from array to have maximum distinct numbers left
Merge K sorted lists
Find the continuous median of an array
Reorganize a string so that no two adjacent characters are the same
Find if a given array represents a Binary Max Heap
Connect N ropes with minimum cost
Convert BST to Min Heap
Find the Kth smallest element in Sorted matrix


When to use Min Heap and when to use Max Heap?
                 Heaps are structures meant to allow quick access to the min or the max.
                       But why would you want that? You could just check every entry on add to see if it's the smallest or the biggest. This way you always have the smallest or the biggest in constant time O(1).
                       The answer is because heaps allow you to pull the smallest or the biggest and quickly know the NEXT smallest or biggest. That's why it's called a Priority Queue.

Use Min-Heap when you want the minimum element of K elements to be accessed in O(1). That is why when we want to access Kth largest element, we simply push the K largest elements in the minHeap and then automatically the minimum of them will be the Kth largest, and that can be accessed in O(1) time. When asked for Kth largest, use Min-Heap. 

Use Max-Heap when you want the maximum element of K elements to be accessed in O(1). That is why when we want to access Kth smallest element, we simply push K smallest elements in the maxHeap and then automatically the maximum of them will be the Kth smallest, and that can be accessed in O(1) time. When asked for Kth smallest, use Max-Heap.


  Activity 1 - Find the Kth largest element in an array
                  Maximize the profit
  Activity 1 - Find K closest points to the origin
  Activity 2 - Merge K sorted arrays



Introduction to Greedy Algorithms
Problem solving paradigms
In an algorithm design there is no one 'silver bullet' that is a cure for all computational problems. Different problems require the use of different kinds of techniques. A good programmer uses all these techniques based on the type of problem. 
Some commonly-used techniques are:
Divide and conquer
Randomized algorithms
Greedy algorithms (This is not an algorithm, it is a technique.)
Dynamic programming

What is it?
The greedy algorithm is a method of solving problems by choosing the best available option at every step.
A greedy algorithm, as the name suggests, always makes the choice that seems to be the best at that moment. This means that it makes a locally-optimal choice in the hope that this choice will lead to a globally-optimal solution.
How do you decide which choice is optimal?
Assume that you have an objective function that needs to be optimized (either maximized or minimized) at a given point. A Greedy algorithm makes greedy choices at each step to ensure that the objective function is optimized. The Greedy algorithm has only one shot to compute the optimal solution so that it never goes back and reverses the decision.

Example
Example: To give money worth 68 rupees, you would first pick a 50 rupee note followed by 10 rupee, 5 rupee, 2 rupee and 1 rupee.
You are picking the next note based on the highest denomination (greedy way) that can fit the current requirement.

There are some situations where picking an option greedily doesn’t lead to the overall optimal solution. 
Example: Pick the current largest child node to find the largest path sum from root to leaf in a tree.


When and how?
When to apply?
Problems where the locally optimal solution also leads to the overall optimal solution are good candidates for greedy algorithm.

How to apply?
Greedy algorithm can be recursively applied by constructing the overall solution starting from the smallest possible sub-solutions 
Keep track of the best solution so far (e.g. maximum product so far)
We may have to keep track of additional parameters which are required to make the locally optimal choice (the numbers seen so far and number of -ve numbers seen so far)
Example: Given an array a, we have to find maximum product possible with the subset of elements
If there are even number of negative numbers and no zeros, result is simply product of all
If there are odd number of negative numbers and no zeros, result is product of all except one negative number. If there are zeros, result is product of all except these zeros with one exceptional case. The exceptional case is when there is one negative number and all other elements are 0. In this case, result is 0.

How to validate if it works?
Validating if a greedy algorithm works for a particular problem is not straight-forward. 
We will have to provide proof that the solution generated by the greedy algo is the optimal solution. 
We can also run the greedy implementation through all the test cases to see if it works. The implementation for greedy solution is easy and usually has lower time complexity.

  Other Examples
Minimum meeting room problem - we try to fit the meetings into as few meeting rooms as possible. The greedy choice here is to choose a meeting based on the earliest end time. 
Prim’s algorithm - at each step greedily choose the cheapest possible connection from the tree to another vertex.
Dijkstra’s algorithm - At every step of the algorithm, we greedily find a vertex which is in the other set (set of not yet included) and has a minimum distance from the source.

  Frequently asked problems
Best time to buy and sell stock
Jump game - reach the end from start of an array
Job scheduling based on deadlines and profits
Meeting rooms - choose the minimum number required (greedy on end time)
Find the time when all employees are free
Gas station - find if we can go around the track
Candy - get the minimum number of candy needed for N kids
Maximum sum/product contiguous subarray
Find the majority element in an array
Highest product/sum of 3 integers in an array
Wildcard or regular expression matching
Convert Integer to Roman number
Partition string into palindromes
Given a string, check if letters can be rearranged so that two characters that are adjacent to each other are not the same
Given two strings, find if one is a Subsequence of the other
Adjust people in seats within minimum moves
Assign mice to holes in minimum time
m Coloring of graph nodes
Connect n ropes with minimum cost

Activity 1 - Activity Selection
You are given n activities with their start and finish times. Select the maximum number of activities that can be performed by a single person, assuming that a person can only work on a single activity at a time. 
Example 1 : Consider the following 3 activities sorted by finish time.
     start[]  =  {10, 12, 20};
     finish[] =  {20, 25, 30};
A person can perform at most two activities. The maximum set of activities that can be executed  is {0, 2} [These are indexes in start[] and finish[] ]

Example 2 : Consider the following 6 activities sorted by finish time.
     start[]  =  {1, 3, 0, 5, 8, 5};
     finish[] =  {2, 4, 6, 7, 9, 9};
A person can perform at most four activities. The maximum set of activities that can be executed  is {0, 1, 3, 4} [These are indexes in start[] and finish[] ]


Greedy Approach
The greedy choice is to always pick the next activity whose finish time is least among the remaining activities and the start time is more than or equal to the finish time of the previously selected activity.
We can sort the activities according to their finishing time so that we always consider the next activity as minimum finishing time activity.

Sort the activities according to their finishing time 
Select the first activity from the sorted array and print it. 
Do the following for the remaining activities in the sorted array. 
If the start time of this activity is greater than or equal to the finish time of the previously selected activity then select this activity and print it.

Activity 2 - Fractional Knapsack 
Given weights and values of n items, we need to put these items in a knapsack of capacity W to get the maximum total value in the knapsack.
In the 0-1 Knapsack problem, we are not allowed to break items. We either take the whole item or don’t take it. 
In Fractional Knapsack, we can break items for maximizing the total value of knapsack. This problem in which we can break an item is also called the fractional knapsack problem. 
Input: 
Items as (value, weight) pairs 
arr[] = {{60, 10}, {100, 20}, {120, 30}} 
Knapsack Capacity, W = 50; 
Output: 
Maximum possible value = 240 
by taking items of weight 10 and 20 kg and 2/3 fraction 
of 30 kg. Hence total price will be 60+100+(2/3)(120) = 240


Approach
A brute-force solution would be to try all possible subset with all different fraction but that will take too much time. 
An efficient solution is to use Greedy approach. The basic idea of the greedy approach is to calculate the ratio value/weight for each item and sort the item on basis of this ratio. Then take the item with the highest ratio and add it until we can’t add the next item as a whole and at the end, add the next item as much as we can. Which will always be the optimal solution to this problem.

Activity 3 - Beehive Problem
There are N Bees and N Hives. Each bee has to get inside one hive. Two bees cannot be inside one hive. The Bees and Hives are present at different positions on a straight line and their positions are represented by an input array. The time taken by the bee to move one step left or one step right on the straight line is 1 minute.
Given the initial position of the bees and hives, find the minimum number of minutes needed for all the bees to get into the hives.

Example 1
Input:   3
                  5 -3 9   → Bee positions
                  5 8 0    → Hive positions

Output:  3

Explanation:  The first bee at position 5 can enter the hive at position 5 in 0 minutes. The second bee at position -3 can enter the hive at position 0 by moving three steps to the right in 3 minutes. The third bee at position 9 can enter the hive at position 8 by moving one step left in 1 minute. 
   So, with a minimum of 3 minutes, all the bees will be inside hives.


Greedy Approach
Intuitively, we need to find the nearest hive for every given bee. This is a greedy decision - nearest.
Now, how do we go about this?
Sorting the positions of bees and hives will give us an ordered set to start making the greedy decisions.
We can assign the ith bee to the ith hive, where i goes from 0 to N-1 (since we have N bees and N hives)
Across all i, we keep track of the largest difference in position for bee and hive
This will give us minimum time needed for bees to get to their nearest hive.  
This allows us to put the ith bee to the corresponding hive in the list. We can find the maximum difference between the bee and corresponding hive position for the answer.

  Questions?
Sequencing the jobs
Minimum Platforms
Gas Stations

  
Introduction to Recursion
Recursion is applicable to problems which can be split into similar subproblems and we can solve each subproblem to solve the large problem. 
This would see the function being invoked from within itself, making it a recursive function.
In some cases, recursion is an easy and more comprehensible way to solve a problem.
Popular uses: Merge Sort, Quick Sort, Binary Search, Depth First Search/Breadth First Search
How does recursion work?
The first function call creates an instance of the function/method on the Call Stack. Every time there is a recursive call, this instance gets paused (its state is maintained) and a new instance gets added to the top of the Call Stack.
When the terminating condition is met and an instance of the method returns, that instance is popped off the Call Stack and the next instance gets the returned value. This instance in turn returns and gets popped and so on. Finally, the first instance on the Call Stack gets the returned value and finishes up the solution, clearing the Call Stack.

Some important points
Recursion is a method of defining a function in terms of itself
 Example: the Fibonacci numbers   f (n) = f(n-1) + f(n-2) • f(0) = f(1) = 1 
In programming, recursion is a method call to the same method. In other words, a recursive method is one that calls itself.
Recursion is a good problem solving approach:
Where we solve a problem by reducing the problem to smaller subproblems; this results in recursive calls.
Recursive algorithms are elegant, simple to understand and prove to be correct, also easy to implement 
But! Recursive calls can result in a an infinite loop of calls if terminating conditions are not set correctly. Recursion needs a proper base-case in order to stop.

  Key Aspects
Terminating Condition
This is the condition that will result in a recursive instance of the method doing a return. Without this, the recursion might go on till there is no space on the Call Stack. It is important that this condition is met for the solution to be complete.
Recursive Invocation Condition
Based on the goal of the problem, the function gets recursively invoked with reducing input parameters, till the terminating condition is met.
Recursion Depth
This is something to keep an eye out for. If the number of instances on the Call Stack exceeds the maximum number supported for that language, you will see a “Maximum call stack size exceeded” exception.

  Approach 
 To solve a problem recursively 
Break into smaller 
problems 
Solve sub-problems 
recursively 
Assemble sub-solutions

Example: Write a function that computes the sum of numbers from 1 to n
Using a loop 
Using Recursion

Visualize

Example - Fibonacci
Find the nth Fibonacci number
Fibonacci series - 0,1,1,2,3,5,8,13...
Terminating condition: When n is 0 or 1, return it 
Recursive invocation condition: When n is > 1

What does the iterative solution look like?
int fibonacciIterative(int n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    int prev1 = 0, prev2 = 1, nth = 1;
    for (int i = 2; i <= n; i++) {
        nth = prev1 + prev2;
        prev1 = prev2;
        prev2 = nth;
    }
    return nth;
}

int fibonacciRecursive(int n) {    
    if (n <= 1) {      // Termination
        return n;
    } else {              // Recursion
        return (fibonacciRecursive(n-1) + fibonacciRecursive(n-2))
    }
}


Additional Information
Recursive solutions are not space efficient compared to iterative solutions, since the problems need stack space. All recursive solutions can be implemented iteratively, but the logic may be complex. Take a call between these trade-offs.
The Recursive solution may also not be time efficient compared to the iterative solution
For example, in the fibonacci series, while calculating Fib (5), we’ll calculate Fib (2) three times. This repeated calculation gets far worse as the input number increases.
Time complexity of Recursive solutions can be improved with Memoization or Dynamic Programming. We’ll visit this later.
Visualise recursion as a stack when you’re trying to solve problems
More applicable to these data structures -  trees, graphs, heaps, linked lists
Applicable to these algorithms - memoization, backtracking

Optional Activity - Find the nth Tribonacci number
Given a number N, find the Nth Tribonacci number
A Tribonacci Series is a series where each number in a sum of the previous 3 numbers in the sequence.
0, 1, 1, 2, 4, 7, 13, 24, 44, 81 …
Note that 0 is the 0th number, not the 1st number here.

Example 1
Input: N = 6
Output: 13
Explanation: 7 is the 6th element in the Tribonacci series

Example 2
Input: N = 25
Output: 1389537
Explanation: The 25th number in the Tribonacci sequence is 1389537

Problem - Iterative Approach
Iterative approach involves using 3 variables to keep track of the last 3 numbers and repeating the sum calculation n times.

public int tribonacciIterative(int n) {
    if (n < 3) 
        return n == 0 ? 0 : 1;

    int first = 0, second = 1, third = 1, temp = 0;    
    for (int i = 3; i <= n; ++i) {
        temp = first + second + third;
        first = second;
        second = third;, 
        third = temp;
    }
    return third;
}
Time Complexity: O(N), we traverse through all numbers till N.
Space Complexity: O(1), constant space used for the variables.


  Problem - Recursive Approach
Can we use Recursion to solve this problem?
Yes, since it can be broken down into subproblems of calculating the 3 previous numbers, which in-turn need their 3 previous numbers and so on.
Terminating condition - if n < 3
Recursive invocation condition - if n >= 3
This recursive solution is very slow due to the huge number of repeated calculations needed for larger numbers.
  
int tribonacciRecursive(int n) {    
    if (n < 3) {     // Termination
        return n == 0 ? 0 : 1;
    }
    else {             // Recursion
        return (tribonacciRecursive(n-1) + 
                       tribonacciRecursive(n-2) +
                       tribonacciRecursive(n-3));
    }
}

Time Complexity: O(3^N), which is exponential!
Space Complexity: O(N), for the recursive stack which could go to a maximum depth of N.

Alternate approaches
This can be optimized with Memoization or Dynamic Programming, which we’ll cover under a later concept.


  Takeaways
When to use?#
When the problem can be broken down into similar smaller subproblems and solving subproblems can lead to overall solution
When the problem becomes very complex when done iteratively (due to nested loops)

How to use?
Start with the smallest input, how do we solve it? 
Increase the input size by 1 and then by 2 and see if a pattern emerges.
Design the logic to break the problem down into recursive call(s) with reducing input parameters
Write the terminating condition where the function will start returning - usually when the reducing input parameter is sufficiently small



Frequently asked problems
Find Factorial of a number using recursion
Find the Kth permutation
Integer division without using * or /
All possible combinations for a given sum
Calculate power of a given number using recursion
Towers of Hanoi
Calculate the nth fibonacci number using recursion
Recursive method to generate all permutations of a string
Sum of integers from 1 to n using recursion
Calculate modulo using recursion
GCD of two numbers using recursion
Check if a number is prime using recursion
Convert decimal number to binary using recursion
Reverse a string using recursion
Remove duplicate letters from string
Find if a string a palindrome using recursion
Invert the position of elements in an Array
Find length of a linked list using recursion
Print the reversed linked list using recursion
Search a linked list for a number


Activity 1 - Tower of Hanoi
Tower of Hanoi is a puzzle where we have three rods(A,B,C) and N disks. All the disks are of distinct size and initially they are placed on rod A in sorted order of their size with the largest at the bottom and the smallest at the top. Rods B and C are initially empty. The objective is to move the entire stack from A to rod C with the help of rod B, following these rules:
Only one disk can be moved at a time.
Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack i.e. a disk can only be moved if it is the uppermost disk on a stack.
Larger disk cannot be placed on top of a smaller disk.
Disk are numbered from 1 to N where 1 is the smallest disk and N is the largest.
Print all the moves made to get the disks from A to C.

  Recursive Approach
Iterative approach can get very complex. Refer https://en.wikipedia.org/wiki/Tower_of_Hanoi#Iterative_solution
Intuitively, this problem can be broken down into similar smaller subproblems. Below is the approach we can use to solve this. Consider the case where N = 2 and visualize this:
Shift N-1 disks from A to B
Shift last disk from A to C   
Shift N-1 disks from B to C  (Here B and A have switched places. A can act as the auxiliary rod)
Let’s also visualize this with N = 3.
Terminating condition: 1 disk to be moved from Source to Destination
Recursive invocation condition: Any number of disks > 1

How do we get to the Recursive Approach?
Start with the smallest case i.e. N = 1
Move Disk1 from A to C

When N = 2
Move Disk1 from A to B (B is the auxiliary rod that holds Disk1 while Disk2 is moved from A to C)
Move Disk2 from A to C
Move Disk1 from B to C

When N = 3
Move Disk1 and Disk2 from A to B. From N = 2 case, we know that we can move 2 Disks between 2 rods using a third auxiliary rod. 
Move Disk3 from A to C
Move Disk1 and Disk2 from B to C. We know how to do this from N = 2 case. Use A as the auxiliary rod here.

When N = 4
Move Disk1, Disk2 and Disk3 from A to B. From N = 3 case, we know how to do this.
Move Disk4 from A to C
Move Disk1, Disk2 and Disk3 from B to C. From N = 3 case, we know how to do this.

And so on...


  Recursive Solution
// Start with towersOfHanoi(int n, 'A', 'C', 'B')
static void towersOfHanoi(int n, char From, char To, char Aux) {
    if (n == 1)  {     // Terminating condition
        System.out.println("1 " + From + " " + To);
        return;
    }
    towersOfHanoi(n-1, From, Aux, To);
    System.out.println(n + " " + From + " " + To);
    towersOfHanoi(n-1, Aux, To, From);
}

Time Complexity: O(2^N), which is exponential. 
Space Complexity: O(N), for the recursive stack which could go to a maximum depth of N.


  Activity 2 - Letter combinations of Phone Number
Given a string str, containing digits from 2 - 9 inclusive, write a program to return all the possible letter combinations that the number could represent.
Input: digits = "23"
Output: [ad","ae","af","bd","be","bf","cd","ce","cf"]


Analysis
In this question, we need to find all the combinations of letters which can be obtained if a number is pressed. For e.g., from the above image 3 represents def and 5 represents jkl so if someone were to press 35, they will get one of the following combinations —
dj, dk, dl, ej, ek, el, fj, fk, fl
We need to find these combinations. If we look at it more closely, there are a few things to notice —
We need to take care of only numbers 2,3,4,5,6,7,8,9.
There can be a maximum of 4 characters in a given string.
The result needs to be the Cartesian product of the given letters’ combination.

How do we get to the Recursive Approach?
If you are thinking about recursion, then you are on the right track. At each stage of recursion there will be a digit that will represent some characters, and then we will recursively send the next digit to look for those set of characters that could be appended in our result string.

Create a recursive function recurse(combination, next_digits)
Add a base case: If there are no more digits to check that means that the current combination is done.
If there are still digits to check :
Iterate over the letters mapping the next available digit.
Append the current letter to the current combination combination = combination + letter.
Proceed to check the next digits : recurse(combination + letter, next_digits[1:]).


  Visualise

Questions?
Generate parentheses
Find combinations that sum to a target





Introduction to Backtracking
Backtracking is a general algorithm for finding all solutions to some computational problems, notably constraint satisfaction problems, that incrementally builds candidates to the solutions, and abandons a candidate as soon as it determines that the candidate cannot possibly be completed to a valid solution. (from Wikipedia.org)
Backtracking uses recursion. It selects one path and if that path has the potential for a solution, it continues and takes the next decision along that path. Else, it backtracks and tries out the next path. This continues till it finds a solution(s) or it finishes exploring all possibilities without a solution.
Examples would be trying to find a safe way across landmines or way out of a maze. You explore paths, one a time, and abandon that path (i.e backtrack) if it leads to a landmine or a dead end. Finding a word combination or solving a sudoku puzzle works on the same principle.


  General approach for backtracking
backtracking_solution (path) {
    If path is the final solution, return success                        // Solution found
    Else for every sub-path that satisfies constraints {
        Invoke backtracking_solution(path.sub_path)               // Recursion
        If this sub-path leads to the solution, return success    // Solution found
    }
    return failure                                                                      // All sub-paths explored, no Solution exists
}

Let’s go through some examples to understand and apply backtracking.

  Example
Find a path from the top left corner of a matrix to the right bottom corner
For path to exist, the values of the elements along the path should be 1
Return false if path doesn’t exist
You are allowed to move only rightwards or downwards

Activity 1 - N Queens Problem
Print all ways of arranging n queens on an nxn chess board so that none of them share the same row, column or diagonal (1<=n<=8).

Input:      n = 4
Output: 0 0 1 0
                 1 0 0 0
                 0 0 0 1
                 0 1 0 0

                 0 1 0 0
                 0 0 0 1
                 1 0 0 0
                 0 0 1 0

Explanation: There are two possible combination such that the Queens cannot attack each other. 

  Approach
Brute force - Find all possible position combinations for the n queens on the n X n board and check if each combination is valid or not. This is not optimal. 
We can use the constraints specified (cannot place a queen if it is in the same row or column or diagonally across from another queen) to optimize and use backtracking to eliminate dead ends.
Start with one queen at the first row and first column.
Each row should have one queen and each column should have one queen. Place each of the subsequent n-1 queens on the next n-1 rows each, such that they are not in the same column or diagonally across from the previous queens. 
If there is no such position for a queen on its row, backtrack to the previous queen and see if there are alternate positions for the previous queen on its row.
If we are able to place all n queens on their rows without conflict, we have found a solution. Note this down.
Continue to explore all other possible combinations by backtracking, since there could be multiple solutions.
Time Complexity: O(N^N), which is exponential, we’ll check all columns for all queens. 
Space Complexity: O(N!), to store the results, in the worst case i.e. most combinations are possible.


  Solution
String nQueens(int n) {
    answer = new String();    // answer is a global variable
    int queen_columns[] = new int[n];
    getQueenPositions(0, queen_columns, n);  // Main method
    boolean is_answer = false;
    for (int i = 0; i < answer.length(); i++) {
        if (answer.charAt(i) == '1') is_answer = true; break;
    }
    if (is_answer == false) return "No Solution Exists";
    return answer;
}

void getQueenPositions(int current_row, int[] queen_columns, int n) {
    if (current_row == n) {   // A solution has been found
        appendToAnswerString(queen_columns, n);
        return;
    }
    // Try out each column as a possible position for the current_row
    for (int column = 0; column < n; column++) {
        if (isValidPosition(column, current_row, queen_columns, n)) {
            queen_columns[current_row] = column;
            // Good so far, check if next queen can find a position
            getQueenPositions(current_row + 1, queen_columns, n);
        }
    }
}

boolean isValidPosition(int current_column, int current_row, 
                                               int[] queen_columns, int n) {
    boolean is_valid = true;
    for (int j = 0; j < current_row; j++) {
        // Check for column being taken in previous rows
        if (queen_columns[j] == current_column) {   
            is_valid = false;
            break;
        }
        // Check for diagonal conflict with previous rows
        if (Math.abs(queen_columns[j] - current_column) == 
                                                             Math.abs(current_row - j)) {
            is_valid = false;
            break;
        }
    }
    return is_valid;
}

void appendToAnswerString(int[] queen_columns, int n) {
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            if (queen_columns[j] == i) answer += '1';
            else answer += '0';
        }
        answer += '\n';
    }
    answer += '\n';
}


Takeaways
When to use?#
When the problem necessitates that you explore all possible options to come up with the solution
There are some constraints based on which the solution has to be found
There are multiple paths/subproblems, one or more of which could lead to the solution

How to use?
Think about approaching this recursively
Start by making the first path choice (E.g. fix the first letter and explore all other sub-strings)
Confirm that this path satisfies the constraints of the problem (meaning it could potentially lead to the solution or we have already reached the solution). If yes and the path has further sub-paths, choose one sub-path at a time and repeat this step
Else backtrack, choose the next path and repeat the above step
If all paths are exhausted and no solution is found, return failure

References
https://www.geeksforgeeks.org/backtracking-introduction/


Backtracking Template
With the N-queen example as we presented in the previous article, one might have noticed some patterns about the backtracking algorithm. In the following, we present you a pseudocode template, which could help you to clarify the idea and structure the code when implementing the backtracking algorithms.
def backtrack(candidate):					  
    if find_solution(candidate):
        output(candidate)
        return
    # iterate all possible candidates.
    for next_candidate in list_of_candidates:
        if is_valid(next_candidate):
            # try this partial candidate solution
            place(next_candidate)
            # given the candidate, explore further.
            backtrack(next_candidate)
            # backtrack
            remove(next_candidate)


    
    
Backtracking Template
Here are a few notes about the above pseudocode.
Overall, the enumeration of candidates is done in two levels: 
At the first level, the function is implemented as recursion. At each occurrence of recursion, the function is one step further to the final solution.  
At the second level, within the recursion, we have an iteration that allows us to explore all the candidates that are of the same progress to the final solution.
The backtracking should happen at the level of the iteration within the recursion. 
Unlike brute-force search, in backtracking algorithms we are often able to determine if a partial solution candidate is worth exploring further (i.e. is_valid(next_candidate)), which allows us to prune the search zones. This is also known as the constraint, e.g. the attacking zone of queen in N-queen game. 
There are two symmetric functions that allow us to mark the decision (place(candidate)) and revert the decision (remove(candidate)).  


  Frequently asked problems
Print all balanced braces combinations for a given value 'n'.
Given an array of positive integers, find all the subsets of the given array that sum up to a number K
Given a set of distinct integers, S, return all possible subsets
Generate all combinations of size K
Find all unique combinations that sum to K
Letter combinations of phone number
Return all possible palindrome partitioning of S
Print all permutations of integers given
Word Search
Boggle (Given an NxN grid of characters and a dictionary, find all words which can be made from the characters in the grid, which are present in the given dictionary)


Activity 2 - Check if a word exists in a grid
Given a 2D board and a word, find if the word exists in the grid.
The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

Input:    Word is ABCCED and 2D board is 
                A  B  C  E 
                S   F  C  S
                A  D  E  E
Output: True
Explanation: The word ABCCED can be formed by starting at the top most A and traversing through the grid where we only move  horizontally or vertically.


  Approach
We can apply the backtracking pattern to solve this problem. 
The problems needs us to go through all solutions according to a constraint (the next letter chosen in sequence must be part of the word we’re trying to match) and if the constraint is not met, we backtrack and and try a different path. 
Start the below backtracking approach with every possible starting letter on the Board
Backtracking is based on recursion. The terminating condition for the recursion is that the current letter chosen matches with the last letter of the given word. We have got to this point because all the other previous letters have matched. Solution found.
If the current letter chosen doesn’t match with the letter at the current index of the word we are trying to match, it is a failure, we backtrack
If the current letter matches, we mark the position as visited. We choose the next letter by going either up, right, down or left, in that order, only if we haven’t already visited that position
If one of these directions return failure, we try the next direction
If all directions fails to get a match, no Solution exists

Activity 3 - Palindromic partitions of a string

Questions?

Find all possible subsets
Determine if a sudoku is valid
Recursion Mock (2 problems)


Introduction to Graphs
Detect Cycle in a graph 
Route Between Two Nodes 
Single source shortest path (SSP)

Introduction
A graph is a collection of nodes or vertices with edges between some of the vertices.
All trees are graphs. In a tree:
All nodes must be connected whereas a graph can have unconnected nodes as well
There is only 1 path between any two nodes
There are no cycles
The edges are not directed
Graphs are used to represent things that can connect to each other 
Houses and roads
People and their family members
Computers and their connections in a network


Types of Graphs
Cyclic and Acyclic
A graph may be cyclic or acyclic
Connected and Not Connected
A graph may have all its vertices connected or have subgraphs that don’t have an edge between them
Directed and Undirected
A graph can have directed edges or undirected edges
Weighted and Unweighted
A graph’s edges may be weighted or unweighted


Graph Representation
Edge List
Shows list of edges in the graph as follows - int[][] graph = {{1,2}, {2,3},{2,4},{3,4}}
Disadvantage is that this may not show all the nodes in the graph
Adjacency List
Each node has entries with the entries representing the nodes it is connected to
 int[][] graph = {{2},{1, 3, 4},{2, 4},{2, 3}}
Adjacency Matrix
Each row and column combination represents Vertices between 2 nodes. 1 indicates connection, 0 indicates no connection
 int[][] graph = {{0, 1, 0, 0},
                               {1, 0, 1, 1},
                               {0, 1, 0, 1},
                               {0, 1, 1, 0}}


Time and Space Complexity: O(N + V), for Adjacency List traversal
Time and Space Complexity: O(N ^ 2), for Adjacency Matrix traversal

Graph Traversal
BFS - BFS strategy prioritizes the breadth over depth, it goes wider before going deeper
DFS - DFS prioritizes the depth over breadth
Comparison
BFS will find the shortest path between the two points. DFS doesn’t necessarily find the shortest path
DFS on a (balanced) binary tree would take less memory than BFS
DFS is easier to implement - recursively
The choice between BFS and DFS depends on the nature of the problem. Sometimes, both can be used


BFS VS DFS
  
                                                BFS                                                                          DFS
Full form                                BFS stands for Breadth First Search.                                    DFS stands for Depth First Search.
Technique                            It a vertex-based technique to find the shortest path in a graph.           It is an edge-based technique because the vertices along the edge are explored first from the starting to the end node.
Definition      BFS is a traversal technique in which all the nodes of the same level are explored first,        DFS is also a traversal technique in which traversal is started from the root node and explore the nodes as far as possible until we reach the node that has no unvisited adjacent nodes.
                            and then we move to the next level.
 Data Structure            Queue data structure is used for the BFS traversal.                                    Stack data structure is used for the BFS traversal.
Backtracking              BFS does not use the backtracking concept.                                              DFS uses backtracking to traverse all the unvisited nodes.
Number of edges           BFS finds the shortest path having a minimum number of                                  In DFS, a greater number of edges are required to traverse from the source vertex to the destination vertex.
                                   edges to traverse from the source to the destination vertex.
Optimality       BFS traversal is optimal for those vertices                                                      DFS traversal is optimal for those graphs in which solutions are away from the source vertex.
                                      which are to be searched closer to the source vertex.
  Speed                           BFS is slower than DFS.                                                         DFS is faster than BFS.
Suitability           It is not suitable for the decision tree because                                            It is suitable for the decision tree. Based on the decision, it explores all the paths. When the goal is found, it stops its traversal.
for decision tree                           it requires exploring all the neighboring nodes first.
Memory efficient          It is not memory efficient as it requires more memory than DFS.                          It is memory efficient as it requires less memory than BFS.



Frequently asked problems
Find if there a path between two nodes in this directed/undirected graph
Find the route between two nodes in a directed/undirected graph
Find the shortest path between two nodes in an undirected, unweighted graph
Find if a given Directed/Undirected Graph has a cycle in it or not.
Can a given undirected graph be colored with two colors
Given an undirected graph with maximum degree D, find a graph coloring using at most D+1 colors
Find the largest distance between nodes in a tree
Check if a graph is a valid tree
Clone a directed graph
Find out if Knight can move from position A to position B on a Chess Board
Given two words A and B, and a dictionary, C, find the length of shortest transformation sequence from A to B
Find if there is a valid path between 2 points in a rectangle with circles, without touching the circles
Given a 2D board containing 'X' and 'O', capture all regions surrounded by 'X' - by flipping all 'O's to 'X's in that surrounded region
Given a 2D graph with points on it, find a line which passes through the most number of points
Find the number of islands in a grid of 1s and 0s
Find the maximum area of island in a grid of 1s and 0s
Given the friendship relation in a group, find friend circles defined as a group of students who are direct or indirect friends
Given a ball's start position, the destination and a maze, determine whether the ball can stop at the destination


Activity 1 - Detect Cycle in an Undirected graph
Given an undirected graph, design an algorithm to find out whether there is a cycle present in it or not .
Example 1
Input: n = 4, e = 4 
Output: Yes 
Explanation: 
0 1, 1 2, 2 3, 0 2 
The diagram clearly shows a cycle 0 to 2 to 1 to 0


Approach
Run a DFS from every unvisited node.
Depth First Traversal can be used to detect a cycle in a Graph. 
DFS for a connected graph produces a tree.
There is a cycle in a graph only if there is a back edge present in the graph. A back edge is an edge that is joining a node to itself (self-loop) or one of its ancestor in the tree produced by DFS. 
To find the back edge to any of its ancestor keep a visited array and if there is a back edge to any visited node then there is a loop and return true.


Algorithm
Create the graph using the given number of edges and vertices.
Create a recursive function that have current index or vertex, visited array and parent node.
Mark the current node as visited .
Find all the vertices which are not visited and are adjacent to the current node. Recursively call the function for those vertices, If the recursive function returns true return true.
If the adjacent node is not parent and already visited then return true.
Create a wrapper class, that calls the recursive function for all the vertices and if any function returns true, return true.
Else if for all vertices the function returns false return false.


  Similar Problems
Find cycle in a directed graph 
Find if Path Exists in Graph
All Paths From Source to Target
Number of Ways to Arrive at Destination
Compute the least cost path in a weighted digraph using BFS
Chess Knight Problem | Find the shortest path from source to destination
Snake and Ladder Problem
Shortest path in a maze — Lee Algorithm
Find the shortest safe route in a field with sensors present
Flood Fill Algorithm
Count number of islands
Find the shortest path from source to destination in a matrix that satisfies given constraints
Find the shortest distance of every cell from a landmine inside a maze
Least cost path in a digraph from a given source to a destination having exactly `m` edges
Take home exercises
Check if the Graph is a tree or not
Detect cycle in a directed graph




Activity 2 - Find if a route exists between 2 nodes
Given a directed graph, design an algorithm to find out whether there is a route between two nodes.
Note: There could be self loops. This is a directed graph.

Example 1
Input:              5 4   (5 Nodes and 4 Edges)
                          1 2
                          2 3
                          3 4
                          4 5
                          1 3   (Find if route exists from 1 to 3)
Output:          yes
Explanation:  We have to find if a route exists from node 1 to node 3. 
                        We can go from node 1 to node 2 and then from node 2 to node 3.


Approach
We have to search the graph by traversing through the nodes, to go from the given source to the destination. 
We can only go from one node to another if they have an edge between them.
The 2 search methods for graph that we can use are BFS and DFS.
Let’s choose DFS and try. But the same can be done using BFS as well.
Create an array to keep track of visited nodes. If we hit the same node again while traversing, we know that we shouldn’t continue, since we’ve already visited this node. We need to avoid cycles if any. DFS could get into an infinite loop in this case.
Start from the source node and go to each node to which source has an edge, recursively.
Mark the source node as visited. 
If the source has an edge directly to the destination, that is the base case for recursion, return success.
If we go through all the edges, without reaching the destination, return false.


  
 Activity 3 (Optional) - Single Source Shortest Path Concept - Find Shortest Path  
Given a connected undirected unweighted graph, a source and a destination, we need to find the shortest path from source to destination in the graph in the most optimal way.

Note: It is guaranteed that a path exists from source to destination since it is a connected graph.
Note: There could be multiple shortest paths from source to destination. You can output any one of these paths.
Note: The path from a node to itself is just the node number.


Example 1
Input:      8 10
                        1 2
                        1 4
                        2 3 
                        4 5 
                        4 8 
                        5 6 
                        5 7 
                        5 8 
                        6 7
                        7 8
                        1 8

Output:  1
                     4 
                     8

Explanation: 
We have to find the shortest path from 1 to 8. We can go from 1 to 4 and then from 4 to 8, this being the shortest path between the two nodes.


  Approach
Let’s choose BFS here since that is better at finding the shortest path more effectively
We have to search for the shortest path i.e. number of edges in the graph between the 2 nodes, src and dest.
We start at src. Consider all nodes (nodes_level1) to which src has an edge. These will distance 1 away from src.
Consider all nodes to which nodes_level1 have an edge. They will all be distance 2 away from src and there are no nodes other than these which are distance 2 away. 
Continuing with BFS like this would give us the shortest distance from src to every node in the graph.
Note down the level (how far away from src it is) for each node in a separate array - levels
Now we can start with the dest node and pick its level
Search the nodes to which dest node has an edge,  which also have a level one less than the dest node (there could be multiple such nodes if there are multiple shortest paths, we can pick the first one we see).
Pick that node and continue to find the next node which has one level less than it and so on till we get to the src. Store these nodes along the way. We have now traversed in reverse order from dest to src.
Now, reverse these values to get the shortest path from the src node to the dest node.


  Visualize
Let’s find the shortest path from 1 to 7.
Using BFS, we see that 
Level [Node 1] = 0
Level [Node 2] = 1
Level [Node 3] = 1
Level [Node 4] = 1
Level [Node 5] = 2
Level [Node 6] = 2
Level [Node 8] = 2
Level [Node 7] = 3
Level [Node 9] = 3

Starting from Node 7, which has a level of 3 and try to find a node which is connected to 7 and has a level of 2. We find that Node 5 satisfies this. 
We pick Node 5, which has a level of 2 and try to find a node which is connected to 5 and has a level of 1. We find that Node 3 satisfies this.
We pick Node 3, which has a level of 1 and try to find a node which is connected to 3 and has a level of 9. We find that Node 1 satisfies this.

So we have the sequence 7, 5, 3, 1
We reverse this to get the shortest path as 1,3,5,7 to get from 1 to 7

Takeaways
When to use?#
When the problem can be broken down into a graph problem and it is expected to find the single source shortest path . 
You will mostly be expected to return the minimum number of steps required to  do that task . This is a big hint that problem can be solved using BFS by following the single source shortest path rule . 
Eg: Snake and Ladder Problem . In this problem you are expected to imagine the given board as a directed graph , Then the question asks to find the minimum of dice hits required from “1” to win the game . 
Winning the game means reaching “100” . 
Once you visualize the board as a graph  with 100 nodes , you just have to find the minimum number of steps required to go from a node “1” to node “100” . This can be easily done using BFS using the single source shortest path algorithm . 




Problem Patterns
Bipartite partitioning of a graph
Connected Components 

Activity 1 - (Bipartite Concept) - Check if a Graph is Bipartite 
Given a set of N Countries which are numbered between 0 <= 10^5, split the Countries into two groups, of any size, such that the following condition is met:
If a Country dislikes another Country, they should not be in the same group. If dislikes[i] = [a, b], we should not put Country numbered a and Country numbered b into the same group.
Print out if this kind of partitioning is possible or not.

Example 1
Input:              5 4 (5 counties and 4 relationships)
                           2 1
                           1 3
                           4 2
                           2 5
Output:          Possible
Explanation:  The partitioning that works is this {1,4,5} and {2,3}

Bipartite Graph
A bipartite graph is a graph whose vertices can be divided into two disjoint sets U and V such that no two vertices within the same set have an edge between them.
This problem fits into the pattern.

  Approach
We can start by assigning the countries to two groups. 
Let’s pick two colors, Color0 and Color1 for the two groups.
To be able to divide the countries into two groups:
If a country is Color0, all countries disliked by this country should be Color1. 
All countries disliked by these Color1 countries should be Color0 and this should go on till all countries are assigned a color.
If at any point, we see this is not possible, i.e. a country disliked by a Color1 country is also disliked by a Color0 country, this partitioning is not possible.
For every dislike edge, we try to color the 2 nodes with different colors. Steps to achieve this partitioning:
Assign Color0 to the first node.  Assign Color1 to all of its dislike edge neighbors.
For each of these Color1 neighbors, assign all of their neighbors to Color0 and so on, till all dislike edges are completed.
If at any point, we see that we are trying to assign a different color a node compared to what was previously assigned, we stop and return false.


  Activity 2 - (Connected Components) - Find number of Connected Components 
Given an undirected graph, you have to find the number of connected components in that graph.



Example 1
Input:      5 3  -> Number of nodes and edges
                1 2
                3 4
                4 5

Output:  2

Explanation: There are 2 components in this graph {1,2} and {3,4,5}


Approach
We can start from every node that has not yet been visited and get all of its connected nodes to have one connected component.
For each such node that we start with, visit all nodes connected to it by edges, directly or through other nodes, as we traverse. This will give us one connected component, increment this count by 1. Mark all visited nodes.
Choose between BFS or DFS. We will go with DFS here.
The steps would be these:
Initialize all nodes as unvisited and the count of components to 0.
For every unvisited node
Increment count of components by 1
Initiate DFS from that node
DFS(node) steps:
Mark node as visited
For every neighbor_node to which the current node has an edge and which is not visited
Recursively call DFS(neighbor_node)


DSU - Disjoint Set Union
Explain basics of DSU and its applications for connected components


Similar Problems  pQuestions?
Number of Islands
Surrounded Regions
Connected Cells 
Island Perimeter
Word Search -1 
Word Search -2
Count the number of islands
Maximum Area of an Island


Problem Statement (Grid+Graph Concept) (Optional)

Imagine a robot sitting in the upper left corner of a grid with R rows and C columns. The robot can only move in two directions, right and down. Certain cells are "off limits" such that the robot cannot step on them (represented by 1 in the grid). Find a path for the robot from the top left to the bottom right.


Example 1
Input:      0 0 1
                0 1 0
                0 0 0

Output:  1 1
                2 1
                3 1
                3 2
                3 3

Explanation: The robot starts from (1,1) and can go through this path - (2,1) (3,1) (3,2) - to reach (3,3) which is the bottom right corner. This is a path which doesn’t contain any cells with 1 (off limit cells).


Approach
We need to find a path all the way to the other end, so we will pick DFS
If we find that a particular node along the path is off limits, we backtrack and try another path
We keep track of the nodes along the path since we need to print out the path, not just print if a path exists
If we get to a node which was already visited, we shouldn’t try it out again, keep track of visited nodes
Steps
Start from the first row first column and explore the right and below nodes one after the other
For every node visited, further explore it’s right and below node options, till
Failure: Either the node right or below has already been visited
Failure: Or the node right or below is out of bounds
Failure: Or the node is off limits (has a value 1)
Success: The last row and last column node has been reached. Return the full path
If the node options returned failure, try the other option. If both options fail, return failure 
Keep track of the path visited along the way and mark each visited node




Problem Patterns
Multisource BFS
Topological sorting


Activity 1  - (Multisource BFS) - Rotting Oranges 

In a given grid, each cell can have one of three values:
Value 0 representing an empty cell
Value 1 representing a fresh orange
Value 2 representing a rotten orange
Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.
Print the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, print -1 instead.

Example 1
Input:      2 1 1 
    1 1 0
    0 1 1
       
Output:  4

Explanation: Start with one rotten orange at (0,0). After 1 minute, the oranges at (0,1) and (1,0) will become rotten. 
After 2 minutes, the oranges at (0,2) and (1,1) will become rotten. 
After 3 minutes, the orange at (2,1) will become rotten. 
After 4 minutes, the last remaining fresh orange at (2,2) will become rotten. 
Overall, it takes 4 minutes for all fresh oranges to become rotten.


Approach
For this traversal problem, we can go with either BFS or DFS.
Visualizing this problem, we see that BFS is a better approach (neighboring oranges go rotten first and then the oranges at the next level)
General BFS principle
Add first node to a queue. Pop the node from queue and add all its neighbors to queue. Process the popped node. Continue till all nodes from queue are popped, one at a time.
We use a visited data structure to keep track of nodes already visited so they don’t get visited again. The other way to do this is to modify the value of node is some way that indicates it has been visited. (Here we mark oranges as rotten)

We start by adding all rotten oranges to the queue (Multi source BFS). These are at 0 minute.
Keep count of all fresh oranges
For all rotten oranges in queue 
Get all their neighboring fresh oranges, mark them as rotten and add them to queue for the next minute
 Decrement fresh orange count
Increment minute and go back to previous step
If not all fresh oranges have been changed to rotten (fresh orange count not zero), no solution exists. Else we know the total minutes taken.


  Topological Sort
Topological sorting of a Directed Acyclic Graph (DAG) is to create a linear order of the vertices in the graph such that, for every directed edge A->B, the vertex A is seen before B. 
For undirected or cyclic graphs, Topological Sorting isn’t possible. 
In real life, whenever tasks have dependencies on other tasks, these dependencies are modeled as directed edges between the two task vertices.

  Algorithm
Create an Adjacency List to represent the Graph. Use a HashMap with vertex number as key and List of neighbor vertices as value.
Create an Indegree HashMap to keep track of in-degree of each Vertex
Get all vertices with 0 in-degrees (these will be our source vertices) and put them in a Queue
Topological Sort - For each vertex in the Queue, while Queue is not empty:
Fetch from the Queue and add it to the output list
Gets all of its neighbor nodes from the Adjacency List
Reduce the in-degree of each neighbor by 1 in the Indegree Hashmap
If the neighbor’s in-degree becomes 0, add it to the Queue
The output list will have the Vertices in the correct Topological Order



Applications
Used in Job scheduling which have dependencies
Compilation order in makefiles
Factory line sequence so that parts are manufactured in the correct sequence needed for assembly


Frequently asked problems
Arrange the nodes in a directed, acyclic graph in a special order based on incoming edges
Given a directed graph, find the topological ordering of its vertices
Find the correct scheduling order of tasks which have dependencies
Find the possibility of finishing all courses given the prerequisites for each course
Find the build order for a set of projects with list of dependencies
Find all possible task scheduling orders


Activity 2 - (Topological Sort) - Find Topological Ordering 

Topological Sort of a directed graph is a linear ordering of its vertices such that for every directed edge (U,V) from vertex U to vertex V, U comes before V in the ordering.
Given a directed graph, find the Topological ordering of its vertices.

Example 1
Input:              5 3  → 5 vertices, 3 directed edges
                          1 2
                          1 3
                          4 5
Output:          1 4 2 3 5 
Explanation:  There are multiple solutions possible for this example. 
                        In each solution 1 should come before 2 & 3, and 4 should come before 5.
                          One such other solution is {1 2 4 3 5}


Approach
This is straight forward topological ordering, so we apply the standard algorithm

Initialize an Adjacency List from the input edges
Initialize an In_Degree hashmap for the nodes with the number of edges coming into each node.
Any node with 0 In_Degree is a source, add it to a Queue
For each node in the Queue:
Pop the node from queue and add it to the answer
For each of its neighboring nodes
Decrement In_Degree of neighbor by 1
If In_Degree goes to 0, add it to Queue
If the number of nodes in answer is not equal to total number of nodes, then there is no answer. There may be a cycle in this directed graph.


  Frequently asked problems
Course Schedule I 
Course Schedule II
Word Transformation
Course Schedule






Minimum Spanning Tree
Prim’s
Kruskal’s
Shortest Path
Dijkstra's

DSU Recap

Spanning Tree - a spanning tree T of an undirected graph G is a subgraph that is a tree which includes all of the vertices of G, with a minimum possible number of edges.
A graph may have several spanning trees, but a graph that is not connected will not contain a spanning tree 
Minimum Spanning Tree - A minimum spanning tree (MST) or minimum weight spanning tree is a subset of the edges of a connected, edge-weighted undirected graph that connects all the vertices together, without any cycles and with the minimum possible total edge weight. That is, it is a spanning tree whose sum of edge weights is as small as possible. 

  Prim’s Algorithm
Prim’s Algorithm - Prim's (also known as Jarník's) algorithm is a greedy algorithm that finds a minimum spanning tree for a weighted undirected graph. The algorithm operates by building this tree one vertex at a time, from an arbitrary starting vertex, at each step adding the cheapest possible connection from the tree to another vertex.
Algorithm to find MST using Prim’s
Create a set mstSet that keeps track of vertices already included in MST.
Assign a key value to all vertices in the input graph. Initialize all key values as INFINITE. Assign key value as 0 for the first vertex so that it is picked first.
While mstSet doesn’t include all vertices
Pick a vertex u which is not there in mstSet and has minimum key value.
Include u to mstSet.
Update the key value of all adjacent vertices of u. To update the key values, iterate through all adjacent vertices. For every adjacent vertex v, if the weight of edge u-v is less than the previous key value of v, update the key value as the weight of u-v

Kruskal’s Algorithm
Kruskal’s Algorithm - Kruskal's algorithm is a minimum-spanning-tree algorithm which finds an edge of the least possible weight that connects any two trees in the forest. It is a greedy algorithm in graph theory as it finds a minimum spanning tree for a connected weighted graph adding increasing cost arcs at each step. This means it finds a subset of the edges that forms a tree that includes every vertex, where the total weight of all the edges in the tree is minimized.
Algorithm to find MST using Kruskal’s
Sort all the edges in non-decreasing order of their weight.
Pick the smallest edge. Check if it forms a cycle with the spanning-tree formed so far. If the cycle is not formed, include this edge. Else, discard it.
Repeat previous step until there are (V-1) edges in the spanning tree.
Union by Rank and Path Compression are ways to ensure that the depth of the tree is such that search operations can happen in O(log N) time.


  Prim’s vs Kruskal’s


Frequently asked problems
Find the minimum spanning tree of a connected, undirected graph with weighted edges.
Find the minimum cost to connect cities
Find the bridges that will connect all islands at minimum cost
How many minimum spanning trees are possible?


  Activity (Optional) - (Spanning Tree)
There are N cities and roads between some of the cities. Most of the roads have been damaged due to rains. We have to repair the roads to connect the cities again. There is a fixed cost to repair a particular road. Find the minimum cost to connect all the cities by repairing the roads.
Note: If the cost of repairing a road is 0, that means it is not damaged.


Example 1
Input:      6 7         → 6 cities and 7 roads
                   1 2 1
                   1 3 1
                   1 4 100
                   2 3 1
                   4 5 2
                   4 6 2
                   5 6 2
Output:   106
Explanation:  We have 6 cities and 7 roads. The minimum set of roads that need to be fixed to connect all the cities are shown below. Any such combination with minimum cost will add up to 106.


Approach
The ask is to connect the cities with minimum cost by choosing the correct roads to fix. This is equivalent to coming up with a minimum spanning tree, with cities as the vertices and roads as the edges. 
We can apply Prim’s MST algorithm to achieve this
Steps
Create a set mstSet that keeps track of cities already included in MST.
Assign a key value to all cities. Initialize all key values as INFINITE. Assign key value as 0 for the first city so that it is picked first.
While mstSet doesn’t include all cities
Pick a city u which is not there in mstSet and has minimum key value.
Include u to mstSet.
Update the key value of all adjacent cities of u. To update the key values, iterate through all adjacent cities of u. For every adjacent city v, if the weight of road u-v is less than the previous key value of v, update the key value as the weight of road u-v
Add up the key values of all the cities to get the minimum cost


Shortest Path algorithms
Thumb rules to find shortest path:
For unweighted graphs, we mostly use Breadth-first search
For weighted graphs with positive weights, we use Dijkstra's algorithm
For weighted graphs with negative weights which may have negative weighted cycles, we use Bellman Ford's algorithm.
Dijkstra’s algorithm
Dijkstra's algorithm is an algorithm for finding the shortest paths between nodes in a weighted graph 
It finds the minimum weight path from a start node to every node on the graph
We start from the source node and can stop once we find a path to the destination node
It generally uses a Min Heap based on Priority Queue to pick the node that is nearest or has the least weight  from the source
It is applicable to both directed and undirected graphs


Dijkstra’s algorithm
Dijkstra’s algorithm is very similar to Prim’s algorithm for minimum spanning tree. 
Like Prim’s MST, we generate a SPT (shortest path tree) with given source as root. We maintain two sets, one set contains vertices included in shortest path tree, other set includes vertices not yet included in shortest path tree. At every step of the algorithm, we find a vertex which is in the other set (set of not yet included) and has a minimum distance from the source.
Algorithm
Create a set sptSet (shortest path tree set) that keeps track of vertices included in shortest path tree, i.e., whose minimum distance from source is calculated and finalized. Initially, this set is empty.
Assign a distance value to all vertices in the input graph. Initialize all distance values as INFINITE. Assign distance value as 0 for the source vertex so that it is picked first.
While sptSet doesn’t include all vertices:
Pick a vertex u which is not there in sptSet and has minimum distance value.
Include u to sptSet.
Update distance value of all adjacent vertices of u. To update the distance values, iterate through all adjacent vertices. For every adjacent vertex v, if sum of distance value of u (from source) and weight of edge u-v, is less than the distance value of v, then update the distance value of v.


  Frequently asked problems
Find the cheapest price of flights from one city to another
Find the time taken for signal to reach all network nodes
Activity 1 - (Dijkstra’s Shortest Path) - Find shortest path 
Activity 2 -  Minimum Knight moves to reach the target
Diameter of a Tree
Graph Mock (3 problems)
