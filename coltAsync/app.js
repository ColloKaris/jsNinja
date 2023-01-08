console.log("Sending request to server!");

setTimeout(() => {
    console.log("Here is your date from the server....")
}, 3000);
console.log("I AT THE END OF THE FILE!");

//Asynchronous javascript relies on a special partof the browser to handle
// the request
// it makes uses of web apis, javascripts identifies web api functions and passes
//the to the web api 
//browsers are written in languages such as C++ and can do what 
//javascript can't. That is why they can support multithreading