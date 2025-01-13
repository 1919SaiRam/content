Q1: What's the difference between undefined and null?


Q2: What is the output of the following code? Explain
 let num;
 console.log(typeof(typeof(x)));
1)number    2)string   3)boolean  4)undefined



Q3:   What is the output of the following code? Explain
console.log(typeof(null));
1)number    2)string   3)boolean  4)OBJECT



Q4:   Which line number will throw an error:
let a = 20;  // line #1
var b = 10;  // line #2
let a = 40;  // line #3
var b = 50;  // line #4
const c = 60 // line #5
a .line #2        b. line #3           c. line #4          d. line #5



Q5: In JavaScript, what does x===y statement implies ?


  
Q6:  What is the output of the following code? Explain
console.log(1 === 1);
console.log([1, 2] === [1, 2])
a.  true true     b.  false false    c.  true false      d.  false true


Q7: What are truthy and falsy values?


  
Q8: What is the output of the following code? Explain
  if ('') {
      console.log("I am true");
   } else {
      console.log("I am false");
   }
a.  I am true       b.  I am false      c.  Error           d.  None of the above



Q9: What is the output of the following code? Explain
 console.log("50" + 50 - 50)
a.  50           b.  500        c.  5000              d.  50000

  
  
Q10: What is the output of the following code? Explain
let str = "Kevin";
str[0] = 'R';
console.log(str);
a.  Kevin         b.  Revin         c.   R            d.  Error



Q11: What is the output of the following code? Explain
let arr = [ 4,30,2,10];
console.log(arr.sort())
a.  [2, 4, 10, 30]          b.  [10, 2, 30, 4]                    c.  [10, 30, 2, 4]                         d.  [30, 10, 4, 2]



Q12: What is the output of the following code? Explain
let a = [1, 2, 3, 4, 5];
console.log(a.slice(2,4));
console.log(a.splice(2,4));
a.  [ 3, 4 ] & [ 3, 4, 5 ]           b.  [ 3, 4 ] & [ 3, 4]              c.  [ 2, 3 ] & [ 2,4, 5]              d.  [ 3, 4, 5 ] & [ 3, 4]


Q13: What is Closure?

Q14: What is Hoisting?

  
Q15:What is the output of the following code? Explain
  function add(){
    console.log(answer)
    var answer = 2
};
add();
a.  2           b.  Error             c.  undefined                    d.  None of the above



Q16: Is this statement true or false? 
var is a function-based scope


Q17:What is the lexical scope?


Q18:What is the output of the following code? Explain
function add(obj){
  	obj.id = obj.id + 1;
}
var obj = {
     id: 9
};
add(obj)
console.log (obj.id);
a.  9                   b.  10                c.  Error                          d.  None of the above


Q19: What is the output of the following code? Explain
const obj = {
    	    id: 9
};
const temp = obj;
temp.id = 25;
console.log(obj.id);
a.  9                   b.  25               c.  Error                          d.  None of the above


Q20: What is the output of the following code? Explain
  const obj = {
        name: ‘Edwin’
};
const temp = {...obj};
temp.name= ‘Kevin’;
console.log(obj.name);
a. Edwin                    b.Kevin                 c.  Error                          d.  None of the above


Q21:  What is the output of the following code? Explain
  let customers = [
  {
    name: 'Rocky',
    credit: 100
  },
  {
    name: 'Tuffel',
    credit: 200
  },
  {
    name: 'Gigi',
    credit: 300
  }
];
console.log(customers.find(c => c.credit > 100));
A.   { name: 'Tuffel', credit: 200 }            B.    { name: 'Gigi', credit: 300 }                  C.     Both A & B                    D.     None of the above



Q22:  What is the output of the following code? Explain
let emp = [
    {
        "id": 1,
        "name":"Randy",
        "salary":75000
    },
    {
        "id": 2,
        "name":"Kevin",
        "salary":60000
    },
    {
        "id": 3,
        "name":"Ceri",
        "salary":30000
    }]
let out = emp.filter(emp => emp.salary > 40000)
console.log(out);
a.   [ { id: 1, name: 'Randy', salary: 75000 },
    { id: 2, name: 'Kevin', salary: 60000 } ]                             b.  [ { id: 2, name: 'Kevin', salary: 60000  }]           C.   [ { id: 1, name: 'Randy', salary: 75000 }]          d.  None of the above



Q23:  What is the output of the following code? Explain
let emp= [
    {
        "id": 1,
        "name":"Randy",
        "salary":75000
    },
    {
        "id": 2,
        "name":"Kevin",
        "salary":60000
    },
    {
        "id": 3,
        "name":"Ceri",
        "salary":30000
    }]
let out = emp.reduce((a,empl)=> a + empl.salary, 0)
console.log(out);


Q24:  What is the output of the following code? Explain
let text = "Good words without deeds are just words";
console.log(text.lastIndexOf("words") - text.indexOf("words"));

// Given that 
text.lastIndexOf("words") =  34


Q25:  What is the output of the following code? Explain
function solve(arr, rotate){
 for(let i = 0; i < rotate; i++){
   let element = arr.pop();
   arr.unshift(element);
 }
 return arr;
}
console.log(solve([44, 1, 22, 111], 3));



Q26:  What is the output of the following code? Explain
console.log (Math.abs(Math.floor(-20.5)));



Q27:  Is the below conversion of a simple function to an arrow function correct?
// Simple Function
function add (x,y){
  return x+y;
}
console.log(add(5,2));

// Arrow Function
let add = (x,y) => x + y;
console.log (add(5,2));




