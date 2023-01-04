console.log(1);
console.log(2);

//this is an examples of asynchronous code
//it does not block the execution of code
setTimeout(() => {
    console.log('callback function fired')
}, 2000);

console.log(3);
console.log(4);