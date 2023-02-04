// rest parameter
//allows us to bundle up arguments inside a function into
//a single array parameter

const double = (...nums) => {
    //console.log(nums);
    return nums.map(num => num*2)
}

const result = double(1, 3, 5, 7, 9, 2, 4, 6, 8)
//console.log(result)

// spread syntax (arrays)
const people = ['shaun', 'ryan', 'crystal'];
//console.log(...people);
const members = ['mario', 'chun-li', ...people]
//console.log(members);

//spread syntax (objects)

const person = {name: 'shaun', age:30, job: 'net ninja'};
const personClone = {...person, location: 'manchester'}
// console.log(person);
// console.log(personClone);


//Sets
const namesArray = ['ryu', 'chun-li', 'ryu', 'shaun'];
console.log(namesArray);

//const namesSet = new Set(['ryu', 'chun-li', 'ryu', 'shaun'])
//const namesSet = new Set(namesArray)
//console.log(namesSet)


//const uniqueNames = [...namesSet]

const uniqueNames = [...new Set(namesArray)]
console.log(uniqueNames);

const ages = new Set();
ages.add(20);
ages.add(25).add(30);
console.log(ages);
ages.delete(25);
console.log(ages, ages.size);
console.log(ages.has(30));

ages.clear();
console.log(ages);

const ninjas = new Set([
    {name: 'shaun', age: 30},
    {name: 'crystal', age: 29},
    {name: 'chun-li', age:32}
]);

ninjas.forEach(ninja => {
    console.log(ninja.name, ninja.age)
})