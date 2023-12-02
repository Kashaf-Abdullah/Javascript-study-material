//Arrays
const myArray=[];

//add elements to an array
myArray[0]=23;
myArray[1]="Kashaf";
myArray[2]=false;
console.log(myArray)

//refer to an array
console.log(myArray[1])

//length property
console.log(myArray.length)

//last element in an array
console.log(myArray[myArray.length-1])

//add in last
myArray.push("school")

console.log(myArray)
//remove from last
// console.log(myArray.pop())
console.log(myArray)


//add in start
myArray.unshift(21)
console.log(myArray)

myArray.shift()
console.log(myArray)

console.log(myArray[6])

// The splice() method of Array instances changes the contents
//  of an array by removing or replacing existing elements and
// /or adding new elements in place
console.log(myArray.splice(1,2,55))
console.log(myArray)
// ------------------------------------------------------------------------

const arr=['A','B','C','D','E','F']
// avaScript Array slice()​​ The slice() method returns a shallow copy of a portion of an array into a new array objec

// const myarr=arr.slice(2)

console.log(arr)

console.log(arr.reverse())



const myArrA=["A","B","C"]

const myArrB=["D","E","F"]
// Spread Operator
// The JavaScript spread operator (...) allows us to quickly copy 
// all or part of an existing array or object into another array or object.
const newArr=[...myArrA,...myArrB]
console.log(newArr)


//Refrencing an element in a two dimensiomal array

const equipA=["baseball","football","volleyball"]
const equipB=["basketball","golf balls","tennis balls"]

const clothShelfA=["tank tops","t-shirts","jerseys"]
const clothShelfB=["sweat tops","sweat pants","hoodies"]

console.log(equipA[1])

console.log(clothShelfB[0])

const equipDept=[equipA,equipB]
const clothDept=[clothShelfA,clothShelfB]

console.log(equipA)
console.log(clothDept)


console.log(equipA[0][1])
console.log(clothDept[0][1])

const sportStore=[equipDept,clothDept]
console.log(sportStore)

