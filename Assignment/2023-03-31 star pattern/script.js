//  1
const n1 = 5;
for(let i = 0; i < n1; i++) {
  let row1 = '';
  for(let j = 0; j < n1; j++) {
    row1 += '* ';
  }
  console.log("->1",row1);
}


//  2
const n2 = 5;
for(let i = 0; i < n2; i++) {
  let row2 = '';
  for(let j = 0; j <= i; j++) {
    row2 += '* ';
  }
  console.log("->2", row2);
}


//  3
const n3 = 5;
for(let i = n3; i >= 0; i--) {
  let row3 = '';
  for(let j = 0; j <= i; j++) {
    row3 += '* ';
  }
  console.log("->3", row3);
}


//  4
const n4 = 5;
for(let i = 0; i < n4; i++) {
  let row4 = '';
  for(let j = 0; j < n4 - i; j++) {
    row4 += ' ';
  }
  for(let k = 0; k <= i; k++) {
    row4 += '* ';
  }
  console.log("->4", row4);
}


//  5
const n5 = 5;
for(let i = 0; i < n5; i++) {
  let row5 = '';
  for(let j = 0; j < n5 - i; j++) {
    row5 += ' ';
  }
  for(let k = 0; k <= i; k++) {
    row5 += '* ';
  }
  console.log("->5",row5);
}
for(let i = n5 - 1; i >= 0; i--) {
  let row5 = '';
  for(let j = 0; j < n5 - i; j++) {
    row5 += ' ';
  }
  for(let k = 0; k <= i; k++) {
    row5 += '* ';
  }
  console.log("->5",row5);
}




















