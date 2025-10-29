//*setInterval

//setInterval is used to repeatedly call a function at specified intervals (in milliseconds).
//it takes two arguments: the function to be called and the interval in milliseconds.
//it returns an interval ID that can be used to stop the interval using clearInterval.

const intervalId = setInterval(function() {
    console.log("This message will be logged every 2 seconds");
}, 2000);

//*clearInterval
//setInterval can be stopped using clearInterval
//clearInterval takes the interval ID returned by setInterval as an argument.

clearInterval(intervalId);

//*setTimeout
//setTimeout is used to call a function once after a specified delay (in milliseconds).
//it takes two arguments: the function to be called and the delay in milliseconds.

const timeoutId = setTimeout(function() {
    console.log("This message will be logged after 3 seconds");
}, 3000);

//*clearTimeout
//setTimeout can be stopped using clearTimeout
//clearTimeout takes the timeout ID returned by setTimeout as an argument.

clearTimeout(timeoutId);
