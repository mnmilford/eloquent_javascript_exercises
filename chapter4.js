/*******************************
The Sum of a Range
*******************************/

// My range function
function range(start, end, step=1) {
  var arr = [];
  if (start < end) {
    for (var i = start; i <= end; i+=step) {
      arr.push(i);
    }
  } 
  else {
    for (var i = start; i >= end; i+=step) {
      arr.push(i);
    }
  }
  return arr;
}

// Testing my range function
// console.log(range(2,10));
// console.log(range(2,10,2));
// console.log(range(5,2,-1));

// My sum function
function sum(array) {
  var result = 0;
  for (var i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
}

// console.log(sum([1,2,3]));

// Test a combination of my functions
// console.log(sum(range(1, 10)));


/*******************************
Reversing an Array
*******************************/
var arr1 = ["A", "B", "C"];
var arr2 = [1, 2, 3];

// My array reversal function
function reverseArray(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    result.unshift(array[i]);
  }
  return result;
}

// Testing reverseArray
// console.log(reverseArray(arr));

function reverseArrayInPlace(array) {
  for (var i = 0; i < Math.floor(array.length / 2); i++) {
    var old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

console.log(arr1 == reverseArray(arr1));
console.log(reverseArrayInPlace(arr2));
console.log(arr2 == reverseArrayInPlace(arr2));