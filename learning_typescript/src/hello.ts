function greet(name: string):string{
    return `Hello ${name}! Good morning!!`;
}

const greeting:string = greet('sai kumar');

console.log(greeting);

//npx tsc ./hello.ts 
//this is generate a .js file containing the same content. 
//we can then run the .js file using node hello.js to view the result.