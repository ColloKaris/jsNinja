//creating classes to be used in creating objects
class User {
    //constructor function
    constructor(username, email){
        //set up properties on the object
        this.username = username;
        this.email = email;
    }
}

const userOne =new User('mario', 'mario@gmail.com');
const userTwo =new User('luigi', 'luigi@gmail.com');
console.log(userOne);
console.log(userTwo)