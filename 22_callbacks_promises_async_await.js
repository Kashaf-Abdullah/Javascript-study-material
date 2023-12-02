//Fetch API requires ....


//callbacks
function firstFunction(parameter,callbacks){
   //do stuff
    callbacks()
}

//promises:
//3states: pending,fulfilld,rejected
// const myPromises=new Promise((resolve,reject)=>{
//     const error=true;
//     if(!error){
//         resolve("Yes! resolve the promise")
//     }
//     else{
//         reject("ho! rejected the promise")
//     }
// });

// console.log(myPromises)

// myPromises.then(value=>{
//     console.log(value)
//     return value+1
// })
// .then(newValue=>{
// console.log(newValue)
// }).catch(err=>{
//     console.log(err);
// })



// ------------------
const myUser={
    userList:[]
}

const mycoolfunction=async()=>{
    const response=await fetch('https://jsonplaceholder.typicode.com/users')
const jsonUserData=await response.json()
console.log(jsonUserData)
return jsonUserData
}
mycoolfunction()

const anotherFunc=async()=>{
    const data=await mycoolfunction()
    myUser.userList=data
    console.log(data)
}
anotherFunc()
console.log(myUser.userList)
// -----------------------------------


const users=fetch('https://jsonplaceholder.typicode.com/users')

console.log(users)

fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
    console.log(response)
    return  response.json()
}).then(data=>{
    console.log(data)
data.forEach(user=>{
    console.log(user.name)
})})

// ---------------------------------
//  Retrieving user data
const getAllUserEmails=async()=>{
    const response=await fetch("https://jsonplaceholder.typicode.com/users")
    const jsonUserData=await response.json()
 const userEmailArray=  jsonUserData.map(user=>{
        return user.email;
    })
    console.log(userEmailArray)
}

getAllUserEmails()

//Retrieving dad jokes
console.log('Retrieving dad jokes') 
const getDadJoke=async()=>{
    const response=await fetch("https://icanhazdadjoke.com/",{
        method:"GET",
        headers:{
            Accept:"application/json"
            // Accept:"text/plain"
        }
    });
    const jsonjokeUserData=await response.json()
    // const jsonjokeUserData=await response.text()
 
    console.log(jsonjokeUserData)
}
getDadJoke()

// -----------------
//POSTING A JOKE
const jokeObject={
    id: "Qusrcahiib", 
    joke: "Astronomers got tired watching the moon go around the earth for 24 hours. They decided to call it a day."
    }
    console.log('posting dad jokes') 
    const postDadJoke=async(jokeObject)=>{
        const response=await fetch("https://httpbin.org/post",{
            method:"POST",
            headers:{
               "Content-Type":"application/json"
                
            },
            body:JSON.stringify(jokeObject)
        });
        const jsonresponse=await response.json()
     
        console.log(jsonresponse)
    }
    postDadJoke(jokeObject)
    




    // -------------------------
    // Restrieving data with URL parameter
    const reqJoke=async(firstName,lastName)=>{
        const response=await fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}&limitTo=[nerdy]`)
        const jsonResponse=await response.json()
        console.log(jsonResponse.value.joke)
    }
    reqJoke("Clint","Eastwood")



    
    