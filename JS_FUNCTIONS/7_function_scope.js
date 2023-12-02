//GLOBAL: 
// 2 RUELS: 
//     1. The function is define inside the function, that cannot be accessed anywhere outside of the function 
//      The variable is define inside the function, that cannot be accessed anywhere outside of the function 
// oppsoiite of 1,9
//    2.A fucntion anywhere outside of the function.Second priciple , the opporsite of it , a function can access
//     all the variable inside the scope it is define.A function can access all the variable inside


//RULE:!
function doSomething(){
    let x=10;
    const y=20;
    var z=30;
    console.log(x,y,z)

}

doSomething()

// console.log(x)
// console.log(y)
// console.log(z)



const x=10
const y=20
let z=30

function something(){
    console.log(x,y,z)
}
something()