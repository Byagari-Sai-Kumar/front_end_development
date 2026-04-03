//Debouncing is a function that execute the code after a specified delay.

function Debouncing(fn,delay){
    let timer;

    return function(...args){
        clearTimeout(timer);

        timer = setTimeout(()=>{
            fn();
        },delay)
    }
}


const log = () => console.log('API called..');

const callingLog = Debouncing(log,2000);

callingLog();
callingLog();
callingLog();