// ...... 1
let a = parseInt(prompt("Enter length of side a: "));
let b = parseInt(prompt("Enter length of side b: "));
let c = parseInt(prompt("Enter length of side c: "));

let s = (a + b + c) / 2;

let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

console.log("The area of the triangle is: " + area);

// ....... 2  Did not get it

//.........3 Did not get it


//.........4
const currentYear = prompt("Enter current year:");
const yearOfJoining = prompt("Enter year of joining:");

const yearsOfService = currentYear - yearOfJoining;


if (yearsOfService > 3) {

  console.log("Bonus of Rs.2500/- given to the employee.");
} else{
}


//........5
let basicSalary = prompt("Enter employee's basic salary: ");
let grossSalary;

if (basicSalary < 1500) {
  grossSalary = parseFloat(basicSalary) + parseFloat(basicSalary) * 0.1 + parseFloat(basicSalary) * 0.9;
} else {
  grossSalary = parseFloat(basicSalary) + 500 + parseFloat(basicSalary) * 0.98;
}

console.log("Employee's gross salary: " + grossSalary.toFixed(2));


//.......6
const costPrice = prompt("Enter the cost price of the item:");
const sellingPrice = prompt("Enter the selling price of the item:");

const profitOrLoss = sellingPrice - costPrice;

if (profitOrLoss > 0) {
  console.log(`The seller made a profit of ${profitOrLoss} dollars.`);
} else if (profitOrLoss < 0) {
  console.log(`The seller incurred a loss of ${-profitOrLoss} dollars.`);
} else {
  console.log("The seller broke even.");
}


//.......7
let number = parseInt(prompt("Enter an integer: "));

if (number % 2 == 0) {
  console.log(number + " is even.");
} else {
  console.log(number + " is odd.");
}

//.......8
let year = prompt("Enter a year: ");

if (year % 4 == 0) {
  console.log(year + " is a leap year");
} else {
  console.log(year + " is not a leap year");
}


//......9
const number1 = prompt("Enter a five-digit number: ");
const reverseNumber = number1.split("").reverse().join("");

if (number1 === reverseNumber) {
  console.log("The original and reverse numbers are equal.");
} else {
  console.log("The original and reverse numbers are not equal.");
}


















