// lexical scoping is also called compile time scoping 

// Lexical scope is the ability for a function scope to access variables
//  from the parent scope. We call the child function to be lexically 
// bound by that of the parent function

var a = 10; // variable a assigned to 10

var func = function (){ // outermost function
    var b = 20;
    console.log("a and b is accessible (outer):", a, b);
    var innerFunc= function (){ // innermost function
        var c = 30;
        console.log("a and b and c is accessible (innner):", a, b, c);
    }
    innerFunc();
    return;
}
func(); // invoke function func 
console.log("only a is accessible (global):", a);




// --------------------------------------------
function sayHello() { 
    let name = "John"; // Function variable 
  
    if (true) { 
        let message = "Hello"; // Block variable 
        console.log(message + " " + name);  
        // Output: "Hello John" 
    } 
  
    console.log(message);  
    // Output: Uncaught ReferenceError:  
    // message is not defined 
} 
  
sayHello();