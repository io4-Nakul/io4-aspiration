// Initialize variables
let accountPin = "1234";
let accountBalance = 100000;

// Function to change PIN
function changePin(newPin) {
  accountPin = newPin;
  console.log("You have changed Pin");
}

// Function to withdraw cash
function withdrawCash(amount) {
  if (amount <= accountBalance) {
    accountBalance -= amount;
    console.log(`You have successfully withdrawn ${amount}Rs`);
  } else {
    console.log("Insufficient funds");
  }
}

// Function to deposit cash
function depositCash(amount) {
  accountBalance += amount;
  console.log(`You have successfully deposited ${amount}Rs, current balance is ${accountBalance}Rs`);
}

// Function to check balance
function checkBalance() {
  console.log(`The available balance is ${accountBalance}Rs`);
}

// Function for mini statement
function miniStatement() {
  console.log("Mini statement is not working. Sorry for the inconvenience.");
}

// Main ATM function
function runATM() {
  console.log("Change Pin          : 1");
  console.log("Cash Withdrawal     : 2");
  console.log("Cash Deposit        : 3");
  console.log("Check Balance       : 4");
  console.log("Mini statement      : 5");

  const option = prompt("Please enter your option (1-5):");
  
  switch (option) {
    case "1":
      const newPin = prompt("Please enter a new PIN:");
      changePin(newPin);
      break;
    case "2":
      const withdrawalAmount = parseFloat(prompt("Please enter the amount to withdraw:"));
      withdrawCash(withdrawalAmount);
      break;
    case "3":
      const depositAmount = parseFloat(prompt("Please enter the amount to deposit:"));
      depositCash(depositAmount);
      break;
    case "4":
      checkBalance();
      break;
    case "5":
      miniStatement();
      break;
    default:
      console.log("Invalid option. Please enter a valid option (1-5).");
  }
}

// Run the ATM program
runATM();
