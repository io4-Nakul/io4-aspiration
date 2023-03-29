// 1
let a = parseFloat(prompt("10: "));
let b = parseFloat(prompt("15: "));
let c = parseFloat(prompt("12: "));
let s = (a + b + c) / 2;

let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

console.log("The area of the triangle is: " + area.toFixed(2));

//2
let num = prompt("44444:");

num = parseInt(num);

let sum = 0;
while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
}
console.log("The sum of the digits is " + sum);

//3
const number = prompt("12345: ");
const reversedNumber = Number(number.toString().split('').reverse().join(''));
console.log(`Reversed number: ${reversedNumber}`);

//4
let A = parseFloat(prompt("10:"));
let B = parseFloat(prompt("20:"));
let C = parseFloat(prompt("30:"));
let S = (A + B + c) / 2;
let Area = Math.sqrt(S * (S - A) * (S - B) * (S - C));

console.log("The area of the triangle is " +Area.toFixed(2));

//5
let x = parseFloat(prompt("Enter the x-coordinate: "));
let y = parseFloat(prompt("Enter the y-coordinate: "));

let r = Math.sqrt(x ** 2 + y ** 2);
let phi = Math.atan2(y, x) - (9 * Math.PI / 180);

console.log(`Cartesian co-ordinates: (${x}, ${y})`);
console.log(`Polar co-ordinates: (r=${r}, φ=${phi})`);

//6













