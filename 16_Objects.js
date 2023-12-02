//JS CLASSES
class Pizza{
    //private 
#sauce="traditional"

    constructor(pizzaType,pizzaSize){
        this.type=pizzaType;
        this.size=pizzaSize
        this.crust="original"
        this.toppings=[]
    }

getCrust(){
return this.crustl
}
setCrust(pizzaCrust){
    this.crust=pizzaCrust;
}


getToppings(){
    return this.toppings;
}

//An array property with setter and getter
setToppings(topping){
    this.toppings.push(topping)
}
    bake(){
        console.log(`Baking a ${this.#sauce} ${this.size} ${this.crust} ${this.type} crust pizz`)
   
        // console.log(`Baking a ${this.sauce} ${this.size} ${this.crust} ${this.type} crust pizz`)
    }
}

const mypizza=new Pizza("pepperoni","small")
mypizza.bake()
// console.log(mypizza.type)

// mypizza.setToppings("sausage")
// mypizza.setToppings("olives")
// console.log(mypizza.getToppings())

// mypizza.setCrust("thin")
// mypizza.bake()



//Child class
class SpecialityPizza extends Pizza{
constructor(pizzaType,pizzaSize){
    super(pizzaType,pizzaSize);
    this.work="The works";
    
}

slice(){
    console.log(`Our ${this.work} ${this.type} ${this.size}  pizza has 8 slices`)
}
}

const myspeciality= new SpecialityPizza("medium")
myspeciality.slice()



