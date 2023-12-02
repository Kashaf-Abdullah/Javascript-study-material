//function definition can have inly one rest parameter . so it means u cannot do x comma rest
// function collectThings(x,...y)// wrong bcz a function can have only one rest parameter


function collectThings(x,...y){
console.log(x)
console.log(y)
}

collectThings(1,2,4,5,6,7,8,9)
//x=1
//y=2,4,5,6,7,8,9
