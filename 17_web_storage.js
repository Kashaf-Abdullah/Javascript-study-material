//Web storage API
//Not part of the DOM - refers to Window API
//Available to JS via the global variable :window
//we do not have to type window :It is implied





// window.alert("ok!")
// alert("ok")
// alert(window.location)


//SESSION STRORAFE

const myArray=["eat","sleep","code"]
//Storage->mySessionStorage:eat,sleep,code
sessionStorage.setItem("mySessionStorage",myArray)
const mySessionData=sessionStorage.getItem('mySessionStorage')
console.log(mySessionData)

//LOCAL STORAGE






const myObject={
    name:"Kashaf",
    hobbies:["eat","sleep","code"],
    logName:function(){
        console.log(this.name)
    }
}

// console.log(myObject.logName())

localStorage.setItem("myLocalStore",JSON.stringify(myObject));
let key=localStorage.key(0)

const mySessionData2=JSON.parse(localStorage.getItem('myLocalStore'))
localStorage.removeItem("myLocalStore")
console.log(mySessionData2)

console.log("key : "+key)

const storeLength=localStorage.length;
console.log(storeLength)