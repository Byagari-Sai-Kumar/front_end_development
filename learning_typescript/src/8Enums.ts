//* Enums are the group of constants those are unchangeable.

enum CardinalDirections{
    North,
    South,
    East,
    West
}

//1. Enums comes with two flavours string and numbers.
//2. Enums always start with 0 and adds 1 to the corresponding enum

console.log(CardinalDirections.North); //0
console.log(CardinalDirections.South); //1
console.log(CardinalDirections.West); //3

//* Explicitily giving index to enums

enum Fruits{
    Apple = 20,
    Mangp = 21,
    Grapes = 22
}

console.log(Fruits.Apple); //20
console.log(Fruits.Grapes); //21

//* Accessing values of enums

enum StatusCodes{
    Success = 200,
    BadRequest = 400,
    InternalServerError = 500
}

console.log(StatusCodes.Success); //200
console.log(StatusCodes.BadRequest); //400

//* String Enums

enum Mobiles{
    Apple = 'Apple',
    Samsung = 'Samsung',
    Oneplus = 'Oneplus'
}

console.log(Mobiles.Apple); //Apple
console.log(Mobiles.Samsung); //Samsung