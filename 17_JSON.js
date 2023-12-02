//JSON:Javascript object notation

// JSON is used to send and recive data
//JSON is a text format that is compeletely language independent
// Meaning JSON is used to send and recieve data in many languages 
// ...not just in js


const myObj={
    name:"kashaf",
    hobbies:["eat","sleep","code"],
    hello:function(){
        console.log("hello!!")
    }
}

console.log(myObj)
console.log(myObj.name)
console.log(typeof myObj)//object

const sendJSON=JSON.stringify(myObj);
console.log(sendJSON)

console.log(typeof sendJSON) //string
console.log(sendJSON.name)


const recieveJSON=JSON.parse(sendJSON)
console.log(recieveJSON)
console.log(typeof recieveJSON)