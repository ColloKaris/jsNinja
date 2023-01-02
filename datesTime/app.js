// dates & times
const before = new Date('February 1 2019 7:30:59');
const now = new Date();

//timestamps
console.log(now.getTime(), before.getTime());

//difference between two dates using TimeStamps
const diff = now.getTime() -before.getTime();
console.log(diff);



// console.log(now);
// console.log(typeof now);

// year, months, day, times
// console.log('getFullYear:', now.getFullYear());
// console.log('getMonth:', now.getMonth());
// console.log('getDate:', now.getFullYear());
// console.log('getDay:', now.getDay());
// console.log('getHours:', now.getHours());
// console.log('getMinutes:', now.getMinutes());
// console.log('getSeconds:', now.getSeconds());

// timestamps
// console.log('timestamp:', now.getTime())

// date strings
// console.log(now.toDateString());
// console.log(now.toTimeString());
// console.log(now.toLocaleString());