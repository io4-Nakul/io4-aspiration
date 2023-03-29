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
let number = prompt("12345:");
let reversedNumber = number.split("").reverse().join("");

console.log(`The reversed number is ${reversedNumber}`);

//4
let A = parseFloat(prompt("10:"));
let B = parseFloat(prompt("20:"));
let C = parseFloat(prompt("30:"));
let S = (A + B + c) / 2;
let Area = Math.sqrt(S * (S - A) * (S - B) * (S - C));

console.log("The area of the triangle is " +Area.toFixed(2));

//5 Did not get it
//6 Did not get it
//7 Did not get it

//8
const Number = parseInt(prompt("20: "));

if (number % 2 === 0) {
  console.log(`${number} is an even number.`);
} else {
  console.log(`${number} is an odd number.`);
}

//9
let year = prompt("2024:");
if (year % 4 === 0 && (year % 100 !==0 || year % 400 === 0)) {
    console.log(year + "is a leap year.");} 
    else {
        console.log(year + "is not a leap year.");
    }

    //10
 let basicSalary = prompt("4500:");

let hra, da, grossSalary;

if (basicSalary < 2000) {
  hra = 0.1 * basicSalary;
  da = 0.9 * basicSalary;
} else {
  hra = 500;
  da = 0.98 * basicSalary;
}
grossSalary = parseFloat(basicSalary) + parseFloat(hra) + parseFloat(da);

console.log(`The employee's gross salary is Rs. ${grossSalary}`);

//11
let ramAge = prompt("Ram's age 11: ");
let shyamAge = prompt("Shyam's age 12: ");
let ajayAge = prompt("Ajay's age 13: ");

ramAge = parseInt(ramAge);
shyamAge = parseInt(shyamAge);
ajayAge = parseInt(ajayAge);


let youngestAge = ramAge;

if (shyamAge < youngestAge) {
  youngestAge = shyamAge;
}

if (ajayAge < youngestAge) {
  youngestAge = ajayAge;
}

console.log("The youngest of the three is " + youngestAge + " years old.");

//12
let angle1 = parseInt(prompt("Enter the first angle of the triangle:"));
let angle2 = parseInt(prompt("Enter the second angle of the triangle:"));
let angle3 = parseInt(prompt("Enter the third angle of the triangle:"));

if(angle1 + angle2 + angle3 == 180) {
  console.log("The triangle is valid.");
}
else {
  console.log("The triangle is not valid.");
}

//13 Did not get it

//14
const length = prompt("Enter the length of the rectangle:");
const breadth = prompt("Enter the breadth of the rectangle:");

const area1 = length * breadth;
const perimeter = 2 * (parseInt(length) + parseInt(breadth));

if (area1 > perimeter) {
  console.log("The area of the rectangle is greater than its perimeter.");
} else {
  console.log("The area of the rectangle is less than or equal to its perimeter.");
}

//15
let marks = [];
let totalMarks = 0;

// Input marks for 5 subjects
for (let i = 1; i <= 5; i++) {
  marks[i] = parseInt(prompt("Enter marks for subject " + i));
  totalMarks += marks[i];
}
let percentage = (totalMarks / 500) * 100;

if (percentage >= 60) {
  console.log("First division");
} else if (percentage >= 50 && percentage <= 59) {
  console.log("Second division");
} else if (percentage >= 40 && percentage <= 49) {
  console.log("Third division");
} else {
  console.log("Fail");
}

//16 Did not get it
//17 Did not get it


// 18
let num2 = prompt("Enter a five-digit number:");
let reversedNum = num.toString().split("").reverse().join("");

if (num2 == reversedNum) {
  console.log("The original and reversed numbers are equal.");
} else {
  console.log("The original and reversed numbers are not equal.");
}

// 19
let costPrice = parseFloat(prompt("Enter the cost price:"));
let sellingPrice = parseFloat(prompt("Enter the selling price:"));

// Calculate profit or loss
let profitOrLoss = sellingPrice - costPrice;

// Determine if seller made profit or incurred loss
if (profitOrLoss > 0) {
  console.log("Seller made a profit of " + profitOrLoss.toFixed(2));
} else if (profitOrLoss < 0) {
  console.log("Seller incurred a loss of " + (-profitOrLoss).toFixed(2));
} else {
  console.log("Seller broke even - no profit, no loss.");
}























