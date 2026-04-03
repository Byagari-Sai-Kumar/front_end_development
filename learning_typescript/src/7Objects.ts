//* Objects types
//ts have special object typing.

const person: {name: string, age: number, isActive: boolean} = {
    name: 'sai kumar',
    age: 27,
    isActive: true
}

//* Type Inference in Objects

let user = {
    age: 'twenty'
}

user.age = 'twenty One';
//! user.age = 22; Type 'number' is not assignable to type 'string'.

//* Optional Properties

// let customer: {name: string, city: string} = {
//     name: 'sai kumar'
// }
//! Property 'city' is missing in type '{ name: string; }' but required in type '{ name: string; city: string; }'.

let customer: {name: string, city?: string} = {
    name: 'sai kumar'
}

//using ? we can mention that this property could be null

//* Index Signature

//Index signature is used to define like properties could be anything but value must be a certain type.

let cricketPlayersAge: {[player: string]: number} = {
    sachin: 50,
    dhoni: 47
    //! virat: 'fourty' Type 'string' is not assignable to type 'number'.
}