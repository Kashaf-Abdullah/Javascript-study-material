//loops
let myNumber=0;
while(myNumber<50){

    myNumber+=2;
    
    console.log(myNumber)

}
//don't create an endless loop


//do while
console.log('do while loop')
do{
    console.log(myNumber);
}
while(myNumber<50);

//for loop

for(let i=0;i<=10;i++){
    console.log(i)
}


let name="Kashaf"
for(let i=1; i<=name.length;i++){
    console.log(name.charAt(i))
}

let n="Kashaf"
let counter=0;
let myLetter;
while(true){
myLetter=name[counter];
console.log(myLetter)
if(myLetter==='h')break;
counter++;}