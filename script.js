function makeid(l) {
  // write your code here
  let charArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; //length: 62

  let ans = "";
  for(let i=0; i<l; i++){
    let char =charArr[Math.floor(Math.random() * 62)];
    ans += char; 
  }
  return ans;

}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
