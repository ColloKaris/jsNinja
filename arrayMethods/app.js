// const scores = [10,30, 15, 25, 50, 40, 5]

// const filteredScores = scores.filter((score) => {
//     return score > 20;
// });

// console.log(scores);
// console.log(filteredScores);

const users = [
    {name: 'shaun', premium: true},
    {name: 'yoshi', premium: false},
    {name: 'mario', premium: false},
    {name: 'chun-li', premium: true}
];

//get an array of premius users using the filter() method
const premiumUsers = users.filter((user) => {
    return user.premium === true
})

//console.log(premiumUsers);

//Map method
const prices = [20, 10, 30, 25, 15, 40, 80, 5];

// const salePrices = prices.map((price) => {
//     return price / 2;
// });
//  console.log(salePrices);
// console.log(prices)

const products = [
    {name: 'gold star', price: 20},
    {name: 'mushroom', price: 40},
    {name: 'green shells', price: 30},
    {name: 'banana skin', price: 10},
    {name: 'red shells', price: 50},
];

const saleProducts = products.map((product) => {
    if(product.price > 30){
        return {name: product.name, price: product.price / 2}
    } else{
        return product;
    }
})

// console.log(saleProducts);

//Reduce method
//const scores = [10,20, 60, 40, 70, 90, 30];

// const result = scores.reduce((acc, curr) => {
//     if(curr > 50){
//         acc++;
//     }
//     return acc;
// }, 0);

// console.log(result);

// const scores = [
//     {player: 'mario', score:50},
//     {player: 'yoshi', score:30},
//     {player: 'mario', score:70},
//     {player: 'crystal', score:60},
//     {player: 'mario', score:50},
//     {player: 'yoshi', score:30},
//     {player: 'mario', score:70},
//     {player: 'crystal', score:60},
//     {player: 'mario', score:50},
//     {player: 'yoshi', score:30},
//     {player: 'mario', score:70},
//     {player: 'crystal', score:60},
//     {player: 'mario', score:50},
//     {player: 'yoshi', score:30},
//     {player: 'mario', score:70},
//     {player: 'crystal', score:60}
// ];

// const marioTotal = scores.reduce((acc,curr) => {
//     if(curr.player === 'mario'){
//         acc += curr.score;
//     }
//     return acc;
// }, 0);
// console.log(marioTotal);


// REDUCE METHOD
const scores = [10,5,0,40,30,10,90,70];

const firstHighScore = scores.find((score) => {
    return score > 50;
})

//console.log(firstHighScore);


// SORT METHOD
//example 1 - sorting strings
const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];

// names.sort();
// names.reverse();
// console.log(names);

//example 2 - sorting numbers
const score = [10,50,20,5,35,70,45]
// score.reverse();
// console.log(score);
score.sort((a,b) => {
    return b - a; //changing to a-b sorts it in the other order
})
console.log(score);

//example 3 - sorting objects
const players = [
    {name: 'mario', score: 20},
    {name: 'luigi', score: 10},
    {name: 'chun-li', score: 50},
    {name: 'yoshi', score: 30},
    {name: 'shaun', score: 70}
];

// players.sort((a,b) => {
//     if(a.score > b.score){
//         return -1;
//     } else if(b.score > a.score){
//         return 1;
//     } else{
//         return 0; 
//     }
// });

players.sort((a,b) => {
    return b.score - a.score;
})

console.log(players)


//CHAINING ARRAY METHODS
const product = [
    {name: 'gold star', price: 30},
    {name: 'green shell', price: 10},
    {name: 'red shell', price: 40},
    {name: 'banana skin', price: 5},
    {name: 'mushroom', price: 50}
];

const promos = products
    .filter(product => product.price > 20)
    .map((product) => `the ${product.name} is ${product.price /2} pounds`)
console.log(promos)