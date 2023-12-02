//objects
//key-value pairs in curly braces

const myObj={
    name:"kashaf",
    age:21,
    gender:"female",
    fruit:["Apple","orange","banana"],
    beverages:{
        morning:"Cofeee",
        afternoon:"Iced Tea"
    },
    action:function(){
        return `Time for ${this.beverages.morning}` 
    }
}

console.log(myObj.name)
console.log(myObj.gender)

console.log(myObj.fruit)
console.log(myObj.fruit[1])
console.log(myObj.beverages)
console.log(myObj.beverages.morning)
console.log(myObj.action())

// --------------------------------------------------------------------------


//Object Inheritance and example of inheritance
const vehicle={
    wheels:4,
    engine:function(){
        return "Kashaf"
    }
}

const truck=Object.create(vehicle)
truck.doors=4;
console.log(truck)
console.log(truck.wheels)//Inheritance

const car=Object.create(vehicle)
car.doors=4;
car.engine=function(){
    return "whoosh!!!";
}

console.log(car.engine())
console.log(car.wheels)


console.log("tesla")
const tesla= Object.create(car)
console.log(tesla.engine())
console.log(tesla.wheels)
tesla.engine=function(){return "Shhhhhh...."}


// -----------------------------------------------------------------------

const band={
    vocale:"Robert Plant",
    guitar:"Jimmy Page",
    bass:"John Paul Jones",
    drums:"John Bonhan"

}

//destructing objects
// const {guitar:myVariable, bass:myBass}=band
// console.log(myVariable)
// console.log(myBass)

const {vocals,guitar,bass,drums}=band
console.log(vocals)
console.log(guitar)
function sings({vocals}){return `${vocals} sings!`}
console.log(sings[band])

console.log(band.hasOwnProperty("drums"))

console.log(Object.keys(band))
console.log(Object.values(band))


for(let job in band){
    console.log(`On ${job} , it's ${band[job]}`)
}
