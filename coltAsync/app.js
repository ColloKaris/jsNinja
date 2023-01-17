console.log("Sending request to server!");
//this comment was added to test whether I can make a commit
//to an earlier date on github. The commit is to be made on the 12th of Jan
//which I missed committing for lawd knows why
setTimeout(() => {
    console.log("Here is your date from the server....")
}, 3000);
console.log("I AT THE END OF THE FILE!");

//creating our own promises
new Promise((resolve, reject) => {
    resolve();
})
