//  1
const arr1 = [1, 2, 3, 4, 5];
const output = arr1.map(num => num ** 2);
console.log("---> 1", output);


//  2
const input = [ 1, -4, 12, 0, -3, 29, -150];
const sumOfPositives = input.reduce((sum, num) => {
    if (num > 0) {
      return sum + num;
    } else {
      return sum;
    }
  }, 0);
  
  console.log("---> 2", sumOfPositives); 


  //  3 a
  let num = 3;
let factorial = 1;

for (let i = 1; i <= num; i++) {
  factorial *= i;
}

console.log("--->3a",factorial);

//  3 b
let num1 = 5;
let factorial1 = 1;

for (let i = 1; i <= num1; i++) {
  factorial1 *= i;
}

console.log("--->3b",factorial1);

//  3 c
let num2 = 4;
let factorial2 = 1;

for (let i = 1; i <= num2; i++) {
  factorial2 *= i;
}

console.log("--->3c",factorial2);

//  3 d
let num3 = 10;
let factorial3 = 1;

for (let i = 1; i <= num3; i++) {
  factorial3 *= i;
}

console.log("--->3d",factorial3);
  



//  4
const words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];

const filteredWords = words.filter(word => word.length >= 8);

console.log("---> 4",filteredWords);


//  5 a
let arr = [1, 4, 9, 16, 25];

for (let i = 0; i < arr.length; i++) {
  arr[i] *= 2;
}

console.log("--- 5a",arr); 

// 5 b
let arr0 = [21, 0.4, 9, -1.6, 125];

for (let i = 0; i < arr0.length; i++) {
  arr0[i] *= 2;
}

console.log("--- 5b",arr0); 


//  6 i did not understand this program

//  7
const years = [ 2001, 1994, 1999, 2016, 2025, 2028, 2099, 1992 ];

const leapYears = years.filter(year => year % 4 == 0);

const nonLeapYears = years.filter(year => !year % 4 === 0 );

console.log("---> 7",leapYears); 
console.log("---> 7",nonLeapYears); 


//  8
const languages = ['Python', 'C++', 'Java', 'React', 'JavaScript'];
console.log("---> 8 ",languages);


//  9
const arr9 = [21, 0.4, 9, -1.6, 12, 5, 81, 94, -9];

const arr9output = arr9.filter(num => num >= 5);

console.log("---> 9 ",arr9output); 


//  10
const arr10 = [20, 1.4, 92, -1.61, 1.22, 50, 81, 94, -9];

const arr10output = arr.filter(num => num % 2 == 0);

console.log("--->10", arr10output); 


//  11 a
const arr11 = ["dog", "wolf", "by", "family", "eaten", "camping"];
const arr11output = arr11.filter(arr11 => arr11.length <= 5);

console.log("---> 11a",arr11output);


//  11  b
const arr111 = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'C++', 'RoR', 'Ruby', 'Swift', 'Kotlin', 'LISP'];

const arr111output = arr111.filter(arr111 => arr111.length <= 5);

console.log("---> 11b",arr111output);


//  12 i did not understand this program

//  13 i did not understand this program


//  14
let num14 = [25, 45, 55, 77, 88, 99];

let sum = num14.reduce((ele, ind) => ele + ind ** 2, 0);
let avg = sum / num14.length;

console.log("---> 14", sum);
console.log("---> 14", avg);

























