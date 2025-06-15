// const score = 10;
// const newScore = new Number(400000);
// console.log(score);
// console.log(newScore);

// console.log(newScore.toLocaleString()); //international standards ma comma add kredea
// console.log(newScore.toFixed(2)); //add decimal points upto 2
// console.log(newScore.toPrecision(5)); //add decimal points upto 2
// console.log(newScore.toLocaleString("en-In")); //local indian or pakistan standards ma comma add kredea
// console.log(score.toExponential(2)); //local indian or pakistan standards ma comma add kredea

// const newNum = new Number(13.5694);
// console.log(Math.ceil(newNum)); // round to top value like if 13.2 then print 14
// console.log(Math.round(newNum)); // round to 13 when 13.4 or less than.5 and round to 14 when greater than .5
// console.log(Math.floor(newNum)); // round to minimum value if 13.7 then it 13

const arrayMax = [25, 959, 279, 0, 498, 256];
const arrayMin = [25, 959, 279, 0, 498, 256];

console.table([Math.max(...arrayMax), Math.min(...arrayMin)]);

let max = 20;
let min = 10;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
