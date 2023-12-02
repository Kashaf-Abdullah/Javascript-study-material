// pure function and impure function


//this is impure function (bar bar value change arhi hai)
// impure side effect: 
console.log(Math.random())


let myarray=[]
function impure(addData){
 return myarray.push(addData)  // state change  means array pehle empty tha  ab element push hogaya isme
}

console.log(impure(3))
console.log(myarray)


//pure function: new function argument  pass krte hai tu usse output pata chal jata hai
//side effect:state change nai hoga



function pure(addData){
return myarray.concat(addData)// node state change means no any side effect
}
console.log(pure([1,2]))
console.log(myarray)





// What are Pure Functions?
// A pure function is a fundamental concept in functional programming, wherein a function produces predictable output solely based on its input parameters. In other words, for the same set of input arguments, a pure function will always yield the same output without causing any side effects.

// Pure function - calculate the area of a circle
function calcCircleArea(radius) {
  return Math.PI * radius * radius;
}

// Perform follow to execute the function
const radius = 5;
const area = calcCircleArea(radius);
console.log(`Circle area of radius ${radius} is ${area}`);










// What are Impure Functions?
// In 4contrast to pure functions, impure functions have side effects and can produce different output for the same set of input parameters. These side effects could involve modifying external state, such as global variables, or performing I/O operations like reading/writing to files or making network requests.

// Global variable
let counter = 0;

// Impure function - increment the global counter
function incrCounter() {
  counter++;
}

// Usage
incrCounter();
console.log(`Counter value: ${counter}`); // Output: "Counter value: 1"
incrCounter();
console.log(`Counter value: ${counter}`); // Output: "Counter value: 2"







// Pure functions are functions that:
// with a given input, always return the same output
// they do not rely on any variable outside their scope
// they do not modify the state of the application (no side effects




// This impure function rely on variable a that is defined outside its scope. So, if a is modified, impure's function result
// will be different