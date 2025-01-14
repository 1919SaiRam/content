Heaps
Concept Introduction
Insertion and Deletion
Heapify
Build Heap





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

  

