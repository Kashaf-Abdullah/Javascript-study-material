// Default parameter for js
function calc(a,b){
    return (2*(a+b))
}
console.log(calc(3,4))//14
console.log(calc(3))//NaN

// so we define functiton like this
function calc(a,b=0){
    return (2*(a+b))
}
console.log(calc(3))//6