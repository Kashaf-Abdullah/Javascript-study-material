//var:if we declare a variable from var , then we can also declaree it 
// again with the same name and if we want to re-assign its value then we can do that

//let: if we declare a variable with let, then we cannot declare it again with the same name
//but can re-assign it value


//const:if we declare variable with const, then we can neither declare it again nor can re-assign it value








// var,let and const


//var can be redefine and redeclare
var x=1;
var x=2;
console.log(x)


//let cannot be redeclre
let y=9;
// let y=8



const z=9;
//  z=8;
 console.log(z)



 //global scope
 var a=1;
 let b=2;
 const c=3
 //local scope
 {
    let y=4;
}

//loal scope
function myFunc(){
    const c=9;
}
