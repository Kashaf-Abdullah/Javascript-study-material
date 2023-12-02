// website : https://builtin.com/software-engineering-perspectives/currying-javascript


// Why Is Currying in JavaScript Useful?
// 1.Currying helps you avoid passing the same variable again and again.
// 2.It helps to create a higher order function.



function sum(a, b, c) {
    return a + b + c;
}
sum(1,2,3); // 6
// As you can see, this is a function with full arguments. Let’s create a curried version of the function and see how we would call the same function (and get the same result) in a series of calls:

function sum(a) {
    return (b) => {
        return (c) => {
            return a + b + c
        }
    }
}
console.log(sum(1)(2)(3)) // 6
// We could even separate this sum(1)(2)(3) to understand it better:

const sum1 = sum(1);
const sum2 = sum1(2);
const result = sum2(3);
console.log(result); 