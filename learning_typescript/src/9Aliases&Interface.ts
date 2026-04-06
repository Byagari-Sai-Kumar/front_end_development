//* Type Aliases are the way to give custom names to types and re-use them.

type User = {
    name: string;
    age: number
}

const user1: User = {
    name: 'sai kumar',
    age: 27,
}

const user2: User = {
    name: 'Rahul',
    age: 30
}

//* Union Types

type Status = "Loading" | "Success" | "Failure";

const currentStatus: Status =  "Success";
//! const isLoading:Status = 'is not loading'; Type '"is not loading"' is not assignable to type 'Status'.

//we can use type aliases in function.
type Callback = (name: string) => void;

//* Interface are similar to type but mostly used with objects.

interface Customer{
    name: string,
    age: number,
    isActive: boolean
}

const customer1: Customer = {
    name: 'sai kumar',
    age: 27,
    isActive: true
}

//We can extend interface
interface Animal{
    canRun: boolean
}

interface Dog extends Animal{
    canBark: boolean
}

const Pet: Dog = {
    canRun: true,
    canBark: true
}