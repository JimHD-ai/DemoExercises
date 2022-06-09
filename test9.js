const Numbers = [1, -4, 12, 0, -3, 29, -150];
// const Numbers = [];
const result = Numbers.filter((value) => value > 0).reduce((acc, cur) => acc + cur, 0);
console.log(result);