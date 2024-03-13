// comprobar si el string entregado es un palindromo

function palindromo(string) {
  const reverse = string.split('').reverse().join('')
  if (reverse === string) {
    return true
  }
  return false
}

console.log(palindromo('alola'));
console.log(palindromo('marco'));