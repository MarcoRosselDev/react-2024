/* 
Challenge 3:
Given an array of strings, return an array of strings that wraps each of the original strings in a HTML-like <p></p> tag.

E.g. given: ['Bulbasaur', 'Charmander', 'Squirtle']
return: ['<p>Bulbasaur</p>', '<p>Charmander</p>', '<p>Squirtle</p>']
*/

const pokemons = ['Bulbasaur', 'Charmander', 'Squirtle']

function pokemonsTags(array) {
  return array.map(string => `<p>${string}</p>`)
}

console.log(pokemonsTags(pokemons));