import 'babel-polyfill';

let func = () => {};

const NUM = 45;

let arr = [1, 2, 3];

let arrB = arr.map(item => item * 2);


console.log(arrB.includes(6));
console.log("new Set(arrB) is", new Set(arrB));