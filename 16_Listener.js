//Javascript Event Listener

// const view=document.querySelector('#view2')
// console.log(view)


// const div=view.querySelector("div")
// const h2=div.querySelector("h2")
// console.log(h2.innerHTML)

//Syntax: addEventListener(event,function,useCapture)

// const doSomething=()=>{
//     alert('doing something')
// }

// h2.addEventListener("click",doSomething,false)
// h2.removeEventListener("click",doSomething,false)

// h2.addEventListener("click",(event)=>{
//          console.log(event.target)
        //  event.target.textContent="Clicked"
        //or
        // h2.innerHTML="clicked"
// })



















//EVENT BUBBLING
document.addEventListener("readystatechange",(event)=>{
    if(event.target.readyState==="complete"){
        console.log("readystate: complete")
    initApp();
    }
})

const initApp=()=>{
const view=document.querySelector('#view2')
console.log(view)
const div=view.querySelector("div")
const h2=div.querySelector("h2")
// console.log(h2.innerHTML)


view.addEventListener("click",(event)=>{
    // view.style.backgroundColor="purple";
// event.target.style.backgroundColor="purple"

view.classList.add("purple")
view.classList.remove("darkblue")
},true)



div.addEventListener("click",(event)=>{
    // event.stopPropagation()
    div.style.backgroundColor="blue"
},true)


h2.addEventListener("click",(event)=>{
    // h2.style.backgroundColor="green"
    event.target.textContent="Clicked"
},true)




//classList,add,remove,toggle

const nav = document.querySelector("nav");
console.log(nav)
nav.addEventListener("mouseover", (event) => {
    nav.style.backgroundColor="blue"
});

nav.addEventListener("mouseout", (event) => {
    nav.style.backgroundColor="purple"
});

}


//view

document.addEventListener("readystatechange",(event)=>{
    if(event.target.readyState==="complete"){
        console.log("readystate: complete")
    initApp2();
    }
})

const initApp2=()=>{
const view3=document.querySelector('#view3')
console.log(view3)
const myForm=view3.querySelector("#myForm")
myForm.addEventListener("submit",(event)=>{
    event.preventDefault()
    console.log("submit event");
})
}