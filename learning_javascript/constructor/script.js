//Constructor is a special function that is used to create instances of the object

function Car(name,model,year){
    this.name = name;
    this.model = model;
    this.year = year;

    this.setMilage = function(kms){
        this.milage = kms;
        return this.milage;
    }
}

const carOne = new Car("Audi",'Z+', 1999);
console.log(carOne);
console.log(typeof carOne); //object

carOne.setMilage(20);
console.log(carOne.milage);

const carTwo = new Car("Benz",'S-class',2022);
console.log(carTwo);
carTwo.setMilage(15);
console.log(carTwo.milage);

//check if an object is an instance of a constructor
console.log(carOne instanceof Car);

//prototype is the method given to the property of the object
Car.prototype.getCarAge = function(){
    const currentYear = (new Date()).getFullYear();
    const carAge = currentYear - this.year;
    return carAge;
}

console.log(carOne.getCarAge());
console.log(carTwo.getCarAge());

//instead of defining method inside the function set it using prototype for better performance since it do not create
//multiple duplicates
const carThree = new Car('BMW','premium',2022);
console.log(carThree);

carThree.setMilage(40);