/* 
Challenge 1:
Given an array of numbers, return an array of each number, squared
*/

const nums = [1, 2, 3, 4, 5];

function squer(array) {
  return array.map(num => num * num)
}

console.log(squer(nums))