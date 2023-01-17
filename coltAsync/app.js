// console.log("Sending request to server!");
// //this comment was added to test whether I can make a commit
// //to an earlier date on github. The commit is to be made on the 12th of Jan
// //which I missed committing for lawd knows why
// setTimeout(() => {
//     console.log("Here is your date from the server....")
// }, 3000);
// console.log("I AT THE END OF THE FILE!");

// //creating our own promises
// new Promise((resolve, reject) => {
//     resolve();
// })


const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if(rand < 0.7){
                resolve('YOUR FAKE DATA HERE')
            }
            reject('REQUEST ERROR!');
        }, 1000)
    })
}

fakeRequest('/dogs/1')
.then((data) => {
    console.log("DONE WITH REQUEST!");
    console.log('data is: ', data);

})
.catch((err) => {
    console.log("OH NO!", err)
})