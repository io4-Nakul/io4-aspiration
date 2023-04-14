//  1
let output = [];
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0){
        output.push("fizzBuzz");
    }
    else if (i % 3 == 0) {
        output.push("Fizz");
    }
    else if (i % 5 == 0){
        output.push("buzz");
    }
    else {
        output.push(i);
    }
}
console.log(output);


//  2
function sumArrayNumbers(arr) {
    let sum = 0; 
    
    for (let i = 0; i < arr.length; i++) { 
      sum += arr[i]; 
    }
    
    return sum; 
  }
  const numbers = [1, 2, 3, 4, 5]; 
const total = sumArrayNumbers(numbers); 
console.log(total); 



//  3
function reverseString(str) {
    let charArray = str.split('');
    charArray.reverse();
    let reversedStr = charArray.join('');
    return reversedStr;
}
let inputStr = "Nakul, Mishra";
let reversed = reverseString(inputStr);
console.log(reversed);


//  4
function findLongestString(arr)  {
    let longestString = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longestString.length) {
            longestString = arr[i];
        }
    }
    return longestString;
}
const string = ['nakul','mishra','sohawal','ayodhya'];
const longestString = findLongestString(string);
console.log(longestString);


//  5
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num);i++) {
        if (num % 1 == 0) {
            return false;
        }
    }
    return true;
}
const userInput = parseInt(prompt("Enter a number;"));
console.log(userInput);
for (let i = 2; i <= userInput; i++) {
    if (isPrime(i)){
 console.log(i);
    }
}


//  6
function countWords(sentence) {
    var words = sentence.split(" ");
    var wordCount = words.length;
    
    return wordCount;
  }
  var sentence = "This is a sample sentence.";
  var result = countWords(sentence);
  console.log(result);
  
  
  //  7
const userInput7 = prompt("Enter a string:");
const inputString = userInput7.replace(/\s/g, "").toLowerCase();
const reversedString = inputString.split("").reverse().join("");

if (inputString == reversedString) {
  console.log(`${userInput} is a palindrome.`);
} else {
  console.log(`${userInput} is not a palindrome.`);
}


//  8
function getEvenNumbers(arr) {
    let evenNumbers = [];

    for (let i = 0; i < arr.length; i++) {

      if (arr[i] % 2 == 0) {

        evenNumbers.push(arr[i]);
      }
    }
  
    return evenNumbers;
  }
  
  let number8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let evenNumbers = getEvenNumbers(number8);
  console.log(evenNumbers); 


  //  9   this program did not understand

  //  10  this program did not understand



























  
  



  



















