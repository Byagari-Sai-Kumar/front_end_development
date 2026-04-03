function throttle(fn, limit) {
    let flag = true;

    return function (...args) {
        if (!flag) return;

        fn.apply(this, args);
        flag = false;

        setTimeout(() => {
            flag = true;
        }, limit);
    };
}

const log = () => console.log('api calling..');

const callingThrottle = throttle(log,1000);

setInterval(()=>{
    callingThrottle();
},2000)