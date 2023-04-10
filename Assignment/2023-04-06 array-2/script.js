//  2
function isArray(input) {
    return Array.isArray(input);
  }
  console.log(isArray('I am a string.')); 
  console.log(isArray([1, 2, 4, 0, 'array'])); 


  //  3 a
  let arr3a = [5, 12, 8, 130, 44];
  console.log(arr3a.length); 
  //  3 b
  let arr3b = [ 'g','e','e','k','s'];
  console.log(arr3b.length);
  //  3 c
  let arr3c = ['shoes', 'shirts', 'socks', 'sweaters'];
  console.log(arr3c.length);
  //  3 d
  let arr3d = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
  console.log(arr3d.length);


  //  4 a

const day = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];

const dayOutput = day[3];

console.log(dayOutput);

//  4 b
const item = [ 'shoes', 'shirts', 'socks', 'sweaters' ];
const itemOutput = item[3];
console.log(itemOutput); 


// 5 a
let day1 = ['Sunday', 'Monday'];
let day2 = ['Friday', 'Saturday'];
let day3 = ['Tuesday', 'Wednesday', 'Thursday'];

let concatOutput = day1.concat(day2,day3);
console.log(concatOutput); 
//  5 b
let num = [5, 12, 8, 130, 44];
let alfa = ['g','e','e','k','s'];
let numOutput = num.concat(alfa);
console.log(numOutput);


//  6  
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
days.sort(); 
console.log(days); 


//  7  a
let arr = [210, 'Sunday', 702, true, null, '90', 'vinay', 'CAT'];
arr.reverse();
console.log(arr);

//  7 b
let arr1 = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
arr1.reverse();
console.log(arr1);

//  8  a
const arr8 = [210, 'Sunday', 702, true, null, '90', 'vinay', 'CAT'];

const index1 = arr8.indexOf('90'); 
const index2 = arr8.indexOf(true); 
const index3 = arr8.indexOf('Ajay'); 

console.log(index1); 
console.log(index2); 
console.log(index3); 

//  8  b
const num8 = [115, 54, 101, -52, -10, 0.56, 5, 12, 8, 130, 44];
const index4 = num8.indexOf(0);         
const index5 = num8.indexOf(-52);
const index6 = num8.indexOf(56);

console.log(index4);
console.log(index5);
console.log(index6);


//  9 
const arr9 = [210, 'Sunday', 702, true, null, '90', 'vinay', 'CAT'];

const lastIndexOfVinay = arr9.lastIndexOf('vinay'); 
const lastIndexOfNull = arr9.lastIndexOf(null); 
const lastIndexOfAjay = arr9.lastIndexOf('Ajay');

console.log(lastIndexOfVinay);
console.log(lastIndexOfNull);
console.log(lastIndexOfAjay);


//  10 a
const arr10 = [314,115, 54, 101, -52, -10, 0.56, 5, 12, 8, 130, 44];

const findArr10 = [];

for(let i = 0; i < arr10.length; i++) {
  if(arr10[i] > 11) {
    findArr10.push(i);
  }
}

console.log(findArr10); 

//  10  b
const arr10b = [314, 115, 54, 101, -52, -10, 0.56, 5, 12, 8, 130, 44];
const findArr10b = [];

for (let i = 0; i < arr10b.length; i++) {
  if (arr10b[i] * 10 + 5 >= 100) {
    findArr10b.push(i);
  }
}

console.log(findArr10b); 


//  11 
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const outputWeekDays = weekDays.includes('Sunday');
console.log(outputWeekDays); 

const outputWeekDays1 = weekDays.includes('Wednesday');
console.log(outputWeekDays1); 

const outputWeekDays2 = weekDays.includes('Funday');
console.log(outputWeekDays2); 



//  12
let daysOfWeek12 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

daysOfWeek12.push('Funday');

console.log(daysOfWeek12);


//  13
let daysOfWeek13 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
daysOfWeek13.pop(); 
console.log(daysOfWeek13); 



//  14
let arr14 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
arr14.unshift('Funday'); 

console.log(arr14); 


//  15  a
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

months.splice(0, 2);

console.log(months); 

//  15 b
let num15 = [11, -152, -10, 2.56, -5];
num15.splice(0, 2); 
console.log(num15); 






















































































































    













