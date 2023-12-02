//javascript errors and error handling
//1. refrence error

"use strict";
//  variable="kashaf"

// console.log(variable)


//2.TYPEERROR  ----->Assignment to constant variable
const name="Hina"
// name="kashaf"


//3.The catchID parameter
//TypeError: Assignment to constant variable.
const makeError=()=>{
    try{
throw new customError("this is custom error")
    }
    catch(err){
console.warn(err)
    }
}
makeError()




function customError(message){
    this.message=message;
    this.name="customerror";
    this.stack=`${this.name} :${this.message}`;
}