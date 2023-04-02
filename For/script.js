// 1 
function evenChars(str) {
    const arr = str.split("");
    const evenArr = [];
    for (let i = 1; i < arr.length; i += 2) {
      if (i % 2 !== 0) {
        evenArr.push(arr[i]);
      }
    }
    return evenArr;
  }
  const str1 = "abcdefghijklm";
  const str2 = "I Love JavaScript";
  
  console.log(evenChars(str1)); 
  console.log(evenChars(str2)); 
  
  console.log(evenChars(str1).join("")); 
  console.log(evenChars(str2).join("")); 
    

  
  
  