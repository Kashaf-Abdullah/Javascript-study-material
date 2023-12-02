//Numbers
//An integer is a whole number
const mynum=42;
//A number with a decimal point is a float which refrences the " floting point"

const myFloat= 42.0;
const mystring="34"
console.log(myFloat)
console.log(myFloat===mynum) //true

//Number Methods 
//The Number .isInteger() methods determines whether the passed value is an integer
console.log("number is integer"+Number.isInteger(mystring))
//The Number.parseFloat()  mthods parses an arguments and return a floating point nuumber.If
//a number cannot be parsed from the arguments, it rerutn NaN
console.log(Number.parseFloat(mystring))
s=Number.parseFloat(mystring)
console.log(typeof(s))

//The toFixed() method format a number according to how many decimal points you provide as the parameter .
console.log(myFloat.toFixed(2))

//chaining
console.log(Number.parseFloat("4.349abc").toFixed(2).toString())


//NaN is an acronym for Not a Number
//The Number is NaN() methods determines whether the passed value is NaN
//and its type is Number



//The global isNan() function determines whether a value is NaN or not
console.log(Number.isNaN("David"))