//nested function is a closure

// https://medium.com/@prashantramnyc/javascript-closures-simplified-d0d23fa06ba4
// A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function’s variables — a scope chain

function outer(x){
    function inner(y){
        return  x+y;
    }

    return inner;
}


const outerReturn=outer(10)
console.log(outerReturn)
console.log( outerReturn(2))//10+2=12