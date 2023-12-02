//Modules
const playGuitar=()=>{
    return "Playing guitar"
}

const shredding=()=>{
    return "Shredding some licks"
}

const plucking=()=>{
    return "Plucking the strings..."
}

export default playGuitar;
export {shredding,plucking}



export default class User{
constructor(email,name){
    this._id=email;
    this._name=name;
}

greeting(){
    return `Hi, my name is ${this._name}`
}
}