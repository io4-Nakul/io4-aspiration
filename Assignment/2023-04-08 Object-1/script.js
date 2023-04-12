//  1
const myObject = Object.create(null);
myObject.property1 = "Value 1";
delete myObject.property1;

console.log(myObject.property1); 


//  2
var person = {
    firstName: "Nakul",
    lastName: "Mishra",
    address: "Sohawal Ayodhya",
    pincode: "224188"
  };
  
  console.log("First Name:", person.firstName);
  console.log("Last Name:", person.lastName);
  console.log("Address:", person.address);
  console.log("Pincode:", person.pincode);



  //  3
 const objectName = { name: '', age: '', rollNo: '' };

objectName.name = prompt("Enter name:");
objectName.age = prompt("Enter age:");
objectName.rollNo = prompt("Enter roll number:");

console.log(objectName);


//  4

const myObject4 = {
    prop1: "value1",
    prop2: "value2"
  };
  Object.freeze(myObject4);
  myObject4.prop3 = "value3"; 
  delete myObject4.prop1; 
  
  console.log(myObject4);


//  5
function checkProperty(obj, property) {
    return property in obj;
  }
  
  var myObj = { 
     a: 1,
     b: 2,
     c: 3 };
  console.log(checkProperty(myObj, 'a')); 
  console.log(checkProperty(myObj, 'd')); 
  
  

























  