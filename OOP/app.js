//creating classes to be used in creating objects
class User {
    //constructor function
    constructor(username, email){
        //set up properties on the object
        this.username = username;
        this.email = email;
        this.score = 0;
    }
    login(){
        console.log(`${this.username} just logged in`);
        return this;
    }

    logout(){
        console.log(`${this.username} just logged out`)
        return this;
    }

    incScore(){
        this.score += 1;
        console.log(`${this.username} has a score of ${this.score}`);
        return this;
    }

}

const userOne = new User('mario', 'mario@gmail.com');
const userTwo = new User('luigi', 'luigi@gmail.com');
console.log(userOne);
console.log(userTwo);

// userOne.logout();
// userTwo.login();

// userOne.incScore();
// userOne.incScore();

//METHOD CHAINING
userOne.login().incScore().incScore().logout();
