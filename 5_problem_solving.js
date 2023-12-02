//your first code challenge

//write code that will retrn a random letter from your name?


console.log(typeof "Kashaf")
console.log("kashaf".charAt())
console.log(Math.floor(Math.random()*6+1))


//do u see the problem?
console.log("kashaf".charAt(Math.floor(Math.random()*6+1)))

// i have 6 characters in my name bt now i will make it work for any name
const anyName="seera"
console.log(anyName.charAt(Math.floor(Math.random()*anyName.length)))