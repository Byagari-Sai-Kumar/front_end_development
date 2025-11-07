//Pyramid of Doom
//Nested call backs create pyramid of doom

function stepOne(next){
    console.log("Step one completed, proceed to next");
    next();
}

function stepTwo(next){
    console.log("Step two completed. proceed to next");
    next();
}

function stepThree(next){
    console.log("Step three completed. proceed to next");
    next();
}

function finalStep(){
    console.log('Finally completed');
}

stepOne(function(){
    stepTwo(function(){
        stepThree(function(){
            finalStep();
        });
    });
});

//Using promises to handle callback hell

function operationOne(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const evenNumber = 2;
            if(true){
                console.log("Operation One Completed");
                resolve("sending data to operation two..." + evenNumber.toString());
            }else{
                reject('Something went wrong in operation one and failed');
            }
        },2000);
    })
}

function operationTwo(prevResult){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`here is the response received from operation one -- ${prevResult}`);
            const oddNumber = 3;
            if(true){
                console.log("Operation two completed");
                resolve('sending data to operation three...' + oddNumber.toString());
            }else{
                reject("Something went wrong in operation two and failed")
            }
        },2000);
    })
}

function operationThree(prevResult){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`here is the response received from operation two -- ${prevResult}`);
            const finalNumber = 10;
            if(true){
                console.log("Operation three completed");
                resolve('task completed');
            }else{
                reject("Something went wrong in operation three and failed")
            }
        },2000);
    })
}


operationOne()
    .then((res)=>operationTwo(res))
    .then((res)=>operationThree(res))
    .then((res)=>console.log(res))
    .catch((error)=>console.log('Operation failed'))
