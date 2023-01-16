console.log("Sending request to server!");

setTimeout(() => {
    console.log("Here is your date from the server....")
}, 3000);
console.log("I AT THE END OF THE FILE!");

//covered two vidoes on promises on udemy
//promises make codes less deeply nested through promise chaining
//the trick in making promise chaining work is returning a promise 
//within our callback then we have one catch statement to handle
//al the rejected requests

