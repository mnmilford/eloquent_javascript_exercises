/***********************************************************
Write a function to mimics Math.min()
************************************************************/

function min(x, y) {
  return (x < y) ? x : y;
}

// console.log(min(4, 5));

/***********************************************************
Write a function to check if a number is even using recursion
************************************************************/

function isEven(N) {
  N = Math.abs(N); // convert N to its absolute value first
  if (N == 0) {return true};
  if (N == 1) {return false};
  return isEven(N-2);
}

// console.log(isEven(5)); // => false
// console.log(isEven(29984)); // => true
// console.log(isEven(-1)); // => false
// console.log(isEven(-2902)); // => true

/***********************************************************
Count letters in a string
************************************************************/

function countBs(anyString) {
  result = 0;
  for (var i = 0; i < anyString.length; i++) {
    if (anyString[i] === "B") {
      result += 1
    }
  }
  return result;
}

// console.log(countBs("BBC")); // => 2
// console.log(countBs("BBCAbcAJBLBB")); // => 5

/***********************************************************
Count letters in a string while choosing letter to count
************************************************************/

function countChar(anyString, letter) {
  result = 0;
  for (var i = 0; i < anyString.length; i++) {
    if (anyString[i] === letter) {
      result += 1
    }
  }
  return result;
}

console.log(countChar("kakkerlak", "k")); // => 4
console.log(countChar("balloon", "l")); // => 2