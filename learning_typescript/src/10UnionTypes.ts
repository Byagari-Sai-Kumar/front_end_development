//* Union Types are the used when the type could be more than one type.

//In a funciton is the parameter could be string or number we use union "|"

function printStatusCode(code: string | number): void {
    console.log(`The current status code is ${code}`)
}

printStatusCode("200");
printStatusCode(200);

//Unions somethimes could be problem. we should know what exact type we received and handle accordingly.

function changeStatusCode(code: string | number): void {
    //! console.log(`the code cannot be upper case ${code.toUpperCase()}`)
    //! Property 'toUpperCase' does not exist on type 'string | number'. Property 'toUpperCase' does not exist on type 'number'.
}

//in the above example what if we send a number and trying to make it toUpperCase().