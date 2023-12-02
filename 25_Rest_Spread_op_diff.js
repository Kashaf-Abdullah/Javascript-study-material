// rest operator
function sum(a,b,...rest_op){
    console.log(rest_op)
}
//list of item converted into array
sum(1,2,3,4,5)





let spread_op=[1,2,3];
// convert array into list of items
console.log(Math.min(...spread_op))//1
