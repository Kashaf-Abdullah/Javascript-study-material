//Functions

//Methods= Built-in functions!

"Kashaf".toLowerCase();

Math.random();


//Function Declaration Syntax:

function sum(){
    return 2+2;
}

console.log(sum());


function sum(n1,n2){
    return n1+n2;
}
console.log(sum(8,9));



const  getUserNameFromEmail=(email)=>{
    return email.slice(0,email.indexOf("@"))
}

console.log(getUserNameFromEmail("playerOnei@SomeRandomEmail.com"))


const toProperCase=(name)=>{
    return name.charAt(0).toUpperCase()+name.slice(1).toLowerCase();
    
}
console.log(toProperCase("septEmBer"))