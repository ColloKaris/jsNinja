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

console.log(firstHighScore);
