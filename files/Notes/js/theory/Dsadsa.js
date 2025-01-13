Arrays 
Implementation
Two Pointers
Prefix Sum
Sorting
Binary Search
Bit Manipulation


-------+++++++++++++----------------================-------------------------------------=========================---------------------------------------------

 Intro to Array Problem Patterns 
Solve problems
Print Matrix in Spiral Order 
Increment number represented as an Array
Best time to Buy and Sell stock

Array - Problem Patterns
General Implementation
Two Pointers
Sorting
Searching
Prefix Sum
Bit Manipulation

Activity 1 - Print Matrix in Spiral Order
Activity 2 - Increment number represented as an Array
Activity 3 - Best Time to Buy and Sell Stock 

Introduction to Palindrome and Anagram 
Solve problems
Find missing +ve number in an Array
Find if the string permutation can form a palindrome
Reverse words in a given sentence

Activity 1 - Find the first missing +ve number in an array

Palindrome
What is a Palindrome?
A word, phrase, or sequence that reads the same backwards as forwards
Examples: civic, radar, level, rotor, kayak, racecar, madam
How to check if a String is a valid Palindrome?
To find if a sentence is palindrome, compare each character from left and right. If they are equal, compare until left and right of string are equal or right becomes less than left. Remember to ignore white spaces and other characters in a string.

Permutation
  What is permutation of a string?
A Permutation of a string is another string that contains same characters, only the order of characters can be different. 
For example, ‘abcd’ and ‘dabc’ are Permutations of each other.
For example, all Permutations of ‘abc’ would be - ‘abc’, ‘acb’, ‘bac’, ‘bca’, ‘cab’, ‘cba’

Activity 2 - Find if the String Permutation can form a Palindrome

Anagram
What is an Anagram of a String?
An anagram of a string is another string that contains the same characters, only the order of characters can be different. 
For example, “abcd” and “dabc” are an anagrams of each other.
Is Permutation of a String the same as Anagram of a String?
For our current purposes, yes.
But technically - An anagram is a word or phrase that when rearranged will create a new word or phrase. An anagram must have meaning (be a real word or phrase), but a permutation can be any ordering of the characters without needing to have meaning.

 Activity 3 - Reverse Words in a given string

Two Pointer Pattern
Solve problems
Find pair with given sum in sorted array
Merge two sorted arrays
Find triplet with maximum sum in unsorted array

Is an optimization to solve certain array or linked list traversal problems.
Used when the solution needs multiple traversals to find or organize data, according to specified constraints.
Reduces the number of nested loops needed, reducing Time Complexity.
The idea is to position 2 pointers which can traverse at the same or different speed and in the same or opposite directions to solve the problem.
Let's understand this with examples.

When to use this method?
When the problem involves arrays or linked lists and the goal is to find or organize data according to some criteria
When there is a need to have better time complexity than bruteforce traversal since this method reduces the need for nested traversals

How to use this method?
Start with two pointers positioned as necessary to solve the problem and start traversing in the direction needed
First pointer at the first position (or middle)
Second pointer at the last position (or second or middle or k-th or first itself)

Additional takeaways
If array is unsorted, sort it first if needed. The method will be faster in spite of the additional complexity sorting brings in
The pointers can traverse in different directions (e.g. Check for palindrome where pointers move towards each other from either end).
The pointers can also move at different speeds (e.g. Linked List cycle - which we’ll cover under linked lists)
These pointers can point to 2 separate arrays or lists (e.g. Merge 2 sorted arrays)

Frequently asked problems :-
Reverse a string in place
Move all 0s in an integer array to one end maintaining order of other elements
In an array of integers, find 2 numbers that add up to a given value
In an array of integers, find 3 numbers that add up to a given value (or add up to 0)
Merge 2 sorted arrays
Confirm if a given string is a palindrome
Find (or Remove) duplicates from sorted array
Implement strStr()
Trapping rain water 
Container with most water
Sort 3 Colors in constant space or Dutch National Flag problem

Example Problems
Two Sum
Sum to 0 or Sum to a given number
Sorted or Unsorted Array
Three Sum
Builds on top of Two Sum

Activity 1 - Find pair with given sum in sorted array
Activity 2 - Merge Two Sorted Arrays 
Activity 3 - Find triplet with maximum sum in unsorted array

Remove duplicates such that each element occurs at most twice
Find pair with given sum in an unsorted array


Prefix Sum Concept 
Find the equal partition index 
Kadane’s Algorithm
Find the largest sum contiguous subarray

Prefix Sum
Given an array arr[] of size n, its prefix sum array is another array prefixSum[] of the same size, such that the value of prefixSum[i] is arr[0] + arr[1] + arr[2] … arr[i].
Input  : arr[] = {10, 20, 10, 5, 15}
Output : prefixSum[] = {10, 30, 40, 45, 60}
Example problem
Find if there is a subarray with sum 0
This will be true either when a prefix sum repeats or prefix sum becomes 0. 
Pick an example and try it out!

Suffix Sum
Similar to Prefix Sum but from the right.
Input  : arr[] = {10, 20, 10, 5, 15}
Output : suffixSum[] = {60, 50, 30, 20, 15}

Activity #1 - Find the equal partition index 

Kadane’s algorithm

Activity #2 - Find the largest sum contiguous subarray

Check if there is a subarray with a Zero sum
Find the container that can hold the most water


Sliding Window Concept 
Solve problems
Find largest subarray with sum 0 
Longest substring with at most K distinct characters

Subarray, Subsequence, Subset, Substring	
Subarray
A subarray is a contiguous part of array. An array that is inside another array.
Example array [1, 2, 3, 4]. There are 10 non-empty sub-arrays. 
(1), (2), (3), (4), (1,2), (2,3), (3,4), (1,2,3), (2,3,4) and (1,2,3,4)
Subsequence
A subsequence is a non contiguous sequence that can be derived from another sequence by zero or more elements, without changing the order of the remaining elements. 
(1), (2), (3), (4), (1,2), (1,3),(1,4), (2,3), (2,4), (3,4), (1,2,3), (1,2,4), (1,3,4), (2,3,4), (1,2,3,4)
Subset
Any combination of elements in an array. Can even be an empty subset. In addition to the empty subset, it will be same as subsequence but order of elements within the subset doesn’t matter. 
(), (1), (2), (3), (4), (1,2), (1,3),(1,4), (2,3), (2,4), (3,4), (1,2,3), (1,2,4), (1,3,4), (2,3,4), (1,2,3,4)
Substring
A substring is a contiguous sequence of characters within a string

Sliding Window Pattern
A Sliding Window is used to solve problems where we need to operate on a contiguous subarray (or sublist) of a larger array (or linked list).
It is applicable in cases where we need to 
Find longest or shortest subarray/substring meeting a particular criteria (E.g. Smallest substring with X unique characters or Longest stretch of days when stock price did not decrease). These are variable size windows.
Find a window of fixed size with contents meeting some criteria (E.g. Subarray of size N with largest sum)
It involves 2 pointers. One indicating the beginning of the window and the second indicating the end.
The idea is to create a window containing a subarray and slide the window along as we traverse through the array to find the answer. 
The window size can change by adding new elements in the end
 or removing elements from the beginning as we traverse.
Let's understand this with some examples.

When to use this method?
When we see a contiguous subarray problem
When goal is to find the longest, shortest or fixed size window in the given array, string or linked list 
When we need to reduce the Time Complexity by avoiding recalculation of values which are already in the window as we move through the array (e.g. Calculation of average of X consecutive values in an array)

How to use this method?
Start with a window of size 1 or a predefined size K (e.g. Subarrary of size K with the maximum sum)
Add elements at the end and/or remove elements at the beginning of the window as we traverse along the array, string or linked list

Frequently asked problems
Longest substring without repeating characters
Maximum sum subarray of fixed size K
Given a string and a pattern, find the smallest substring which has all the characters of the pattern
Smallest (or largest) subarray that adds up to a given sum (or zero)
Given a string and a pattern, find out if the string contains any permutation of the pattern 
(slide the window along looking for the permutations of the pattern in the window)
Given a string and a set of words of the same length, find all substrings that are a concatenation of all the words exactly once 
(similar to permutation above, but with words instead of letters)

Activity #1 - Find the largest subarray with sum zero

Activity #2 - Longest substring with at most K distinct characters

Find maximum sum in any subarray of size k 
Find the longest substring without repeating characters


Sorting 
Bubble Sort ; Insertion Sort  ; Selection Sort  ; Merge Sort  


Quick Sort
Comparator 
Solve problems
Sort based on absolute values
Merge Intervals Pattern
Merge overlapping intervals

Quick Sort
How does it work?
Role of Recursion
Space and Time Complexity

Comparator
Writing a Comparator is a way to sort a group/array of elements (primitive types or objects)
Why is it needed, can’t I use a library method?
When you need to sort beyond the simple Integer or String, which the library cannot do
Example: You need to sort by absolute value OR sort objects of user defined classes
How to go about this?
All you need is one function/method that can compare two objects (of same kind) and tell you which one has to come first in the sorted order
The comparison logic in the method is key, can be based on one or multiple fields of the object
Return value from the method can be one of these:
True or False
Number which is <0, 0 or >0 depending on which element should come first
This method is then applied to pairs of objects at a time to sort the entire group 


Merge Interval Pattern
Merge Interval problems have intervals (Interval has a start value and an end value) that may overlap and if they overlap, they may need to be merged. 
There are different possibilities with any two given intervals. They need to be handled to solve the problem.
In addition, 
The two intervals may be the same
Have the same start time
Have the same end time

Approach
Merging overlapping intervals
Sort the given intervals by their start value
Now, we take two intervals at a time. We know that the start time of first interval will be <= start time of second meeting, since the list is sorted.
If there is an overlap i.e. second.start <= first.end, we need to merge first and second into new.
We set new.start = first.start. 
We set new.end = the maximum of first.end and second.end
Replace first and second with new, in the list of sorted meetings
Repeat for every pair of meetings in sequence

Given any Merge Interval related problem, think about all the start time and end time combinations. 
Sort by Start time or End time as needed. 

Frequently asked problems
Find out if there are any overlapping intervals among the given intervals
Merge the given meeting ranges or time intervals, if there is any overlap
Find out if there are any conflicting appointments given a list of appointment start and end times
Find the minimum meeting rooms required to conduct all meetings given the meeting timings
Find the max CPU load given a list of processes and their start, end times and cpu loads
Find the common time when all employees are free given their work timings
Confirm if hotel bookings are possible
Given a list of intervals, merge all the overlapping intervals to produce a list that has only mutually exclusive intervals
Given a list of non-overlapping intervals sorted by their start time, insert a given interval at the correct position and merge all necessary intervals
Given an array of intervals representing ‘N’ appointments, find out if a person can attend all the appointments

Activity #1 - Sort based on absolute values

Activity #2 - Merge Overlapping Intervals

Sort array with string elements
Minimum difference between 2 array elements
Sorting Structures 
Meeting Rooms


What is Binary Search?
The Algorithm
Time Complexity 
How to identify Binary Search problems? 
Solve problems
Find the first one
Search in rotated sorted array

What is Binary Search?
It’s a divide and conquer algorithm to solve problems and for data retrieval.
Example:
Consider that you want to look for the word ‘Search’ in the dictionary.
Intuitively, you would open the dictionary in the middle and see if the first letter of the page comes after or before the letter ‘S’. 
Let’s say that the letter you arrived at is ‘N’. Since ‘S’ comes after ‘N’ in the alphabet, you would then ignore the first half of the dictionary and divide the second half again into two parts. 
Now, let’s say that you arrived at the letter ‘T’....
This process continues until you intuitively keep halving the search set and find the page with ‘Search’

Most important requirement
The group/array of elements have to be SORTED!
In the previous case, the dictionary is arranged in alphabetical order (sorted).
Binary search is applicable to search any sorted array/linked list or matrix.

  The Binary Search Algorithm
How does Binary Search work to find a target element in a sorted array?
Start the search with the middle element of the array
If the target number = middle element, search ends with Success.
Else if array size = 1, the search ends with Failure.
Else if target number < middle element, search the left half of the array
Else target number is > middle element, search the right half of the array
Start over with either the left half or right half of the array. Repeat till Success or Failure

Time Complexity
While implementing binary search, the target element may be at three kinds of positions:
Middle of the array (Best case)
First or last element of the array (Worst case)
Anywhere except the cases above (Average case)
The Best case time complexity of the binary search algorithm is O(1).
The Average and Worst case time complexity is O(log2n).
In comparison, linear search has average and worst-case time complexity of O(n).
Why is complexity of Binary Search O(log2n)? That comes from the number of times the loop needs to run to search for the target element in the worst case. Each time the loop runs, the range gets reduced by half (effectively division by 2). We need (log2n) iterations of the loop to bring the range size down to 1 element. Remember that log is base 2 and not base 10.
What does O(log2n) mean? This implies that the number of comparisons needed to arrive at a match is significantly smaller than linear search. To put that in perspective, if you want to find your name in a register that contains the names of all people in the world, it can be accomplished by binary search in no more than 33 comparisons.

Lower Bound and Upper Bound for elements
Binary Search can be used when you need to find the maximum of the smallest value or the minimum of the largest value.

  How to identify Binary Search problems?
Working on sorted array - should consider Binary Search as an option.
Find number of occurrences of an element in a large search space
First or last occurrence of an element in a large search space
Come up with the Upper and Lower Bound values, or Problems related to “Maximise the minimum” or “Minimize the maximum” something are usually solved using Binary Search (optimization problems)
Koko eating bananas
Square root of a number

Implementation 
Iterative
Recursive
Tweaks needed to the implementation
Example: Find first occurrence, last occurrence (when an element repeats).
Are there library methods I can use for this?
Yes, most languages provide standard methods for binary search, just like sort.
But in most problems you’ll have to customize the binary search a bit, so you would end up writing your own code.

Activity #1 - Find the first one 
Activity #2 - Search in rotated sorted array

One more real world example
Since Binary search is a quick way for searching through sorted databases, it is often used in debugging. Suppose you have 100 versions of a code, each of which is different from the other. The 1st version displays the correct output, but the 100th version doesn’t. 
An efficient way to find the broken version would be to run a binary search through all the versions. The versions are logged in a Version Control System in sorted order, so don’t worry about that. Check out the code in the 50th release, build it, and see if the bug is still there. 
Continue dividing until you discover when the bug was introduced. This approach comes in quite handy especially if you make small commits. 

  
Ternary Search
Binary Search is better than Linear Search. Is Ternary Search better than Binary Search?
No
Why is Binary Search better than Ternary Search?
Ternary search is similar to binary search (where we divide the array into two parts), but in this algorithm, we divide the given array into three parts and determine which has the key (searched element) (source: www.geeksforgeeks.org)
If you apply binary search, you have log2(n) + O(1) comparisons.
If you apply ternary search, you have 2.log3(n) + O(1) comparisons, as in each step, you need to perform 2 comparisons to cut the search space into three parts.
Doing the math, 2*(log(2)/log(3)) > 1
Hence, we actually get more comparisons with ternary search. Binary Search performs better.


Copare searching algorithms :- Sequential search & Binary search 
Find the peak element
Count occurrences of an integer

Frequently asked Binary Search Problems
Search for an integer N in a sorted Matrix
Find the median of 2 sorted arrays
Find the first and last position of element in sorted array (or range of the element or number of occurrences)
Find the duplicate in a array containing n + 1 integers where each integer is between 1 and n
OR Find an integer that appears more than once in the array
Given a sorted matrix, find the overall median of the matrix 
Find the Kth smallest element in a sorted matrix
Compute square root of an integer (Hint: The square root of an integer >= 2 is always smaller than x/2)
Find the element that occurs once in a sorted array where all other elements occur twice
Given a sorted array of strings that is interspersed with empty strings, find the location of a given string
Search for a number in a sorted array where we don’t know whether array is in ascending or descending order
Given an array of lowercase letters sorted in ascending order, find the smallest letter in the given array greater than a given key
OR Given an array of numbers in ascending order, find an element that has the minimum difference with the given key
Find the maximum value in a given Bitonic array (array which first increases then decreases and all elements are unique)
