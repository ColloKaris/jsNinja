// async in a function declaration
// async function hello(){

// }

// async in an arrow function
const sing = async () => {
    //return 'LA LA LA LA'
    //throw new Error('UH OH');
    throw "OH NO, PROBLEM!!"
}

sing()
    .then((data) => {
        console.log("PROMISE RESOLVED WITH: ", data)
    })
    .catch((err) => {
        console.log("OH NO, PROMISE REJECTED!");
        console.log(err);
    })