/*
Challenge 2:
Given an array of strings, return an array where the first letter of each string is capitalized
*/

const names = ['alice', 'bob', 'charlie', 'danielle'];

function capitalized(array) {
  return array.map(string => {
    const firsLetter = string.charAt(0);
    const rest = string.slice(1);
    return firsLetter.toUpperCase() + rest;
  })
}

console.log(capitalized(names));

// another way
const uperrcase = names.map((string) => {
  return `${string[0].toUpperCase()}${string.slice(1)}`
})

console.log(uperrcase);