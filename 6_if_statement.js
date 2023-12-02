//Conditionals
let counterIsBanned=false;
let soup="Chicken noodles"
let crackers='chiken noodle soup';
let reply;

if(soup){
    reply=`Here your order of ${soup}`
}
else if( soup && crackers){
    reply=`Here your order of ${soup} & crackers`;
}
else{
    reply='sorry!! we are out of soup'
}

console.log(soup)