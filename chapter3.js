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
  N = Math.abs(N);
  if (N == 0) {return true};
  if (N == 1) {return false};
  return isEven(N-2);
}

// console.log(isEven(5));
// console.log(isEven(29984));
// console.log(isEven(-1));
// console.log(isEven(-2902));