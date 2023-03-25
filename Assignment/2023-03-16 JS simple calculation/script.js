// name and hobbies
function printNameAndHobbies() {
    const name = "Nakul";
    const hobbies = ["reading", "learning new things"];
    
    console.log(`My name is ${name} and my hobbies are: `);
    
    hobbies.forEach(hobby => {
      console.log(`- ${hobby}`);
    });
  }
  printNameAndHobbies();

  // Favorite Avenger 
  function printFavoriteAvenger() {
    const avengers = "Ironman";
    
    console.log(`My favorite avengers is `);
    
      console.log(`- ${avengers}`);
    }
  printFavoriteAvenger();

  // odd and even number
  function printEvenOdd() {
    let num = prompt("12:");
    if (num % 2 == 0) {
      alert(num + " is even.");
    } else {
      alert(num + " is odd.");
    }
  }
  printEvenOdd();

  // calculation of simple interest 
  function calculateSimpleInterest
  (principal, rate, time) {
    var interest = (principal * rate * time) / 100;
    return interest;
  }
  
  var principal = 2500;
  var rate = 3;
  var time = 4;
  var interest = calculateSimpleInterest(principal, rate, time);
  
  console.log("The simple interest is: " + interest);


  


  