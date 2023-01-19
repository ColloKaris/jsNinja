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

    // I covered http requests and query strings.
    // in total I went through about 5 udemy videos but did not have
    // to write ny piece of code

    //I had a weird sleeping cycle today and worked on a technical article on
    //SMTP and IMAP for a job application I am handling