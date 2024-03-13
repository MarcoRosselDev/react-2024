/* contar el numero de veces que se repite un caracter y retornarlo */

function contador(string) {
  const str = string.split('')
  let obj = {}
  let max = 0
  let caracter_maximo = ''
  for (const key of str) {
    if (obj[key]) {
      obj[key] = obj[key] + 1
    } else{
      obj[key] = 1
    }
  }
  //console.log(obj);
  for (const iterator in obj) {
    if (obj[iterator] > max) {
      max = obj[iterator]
      caracter_maximo = iterator
    }
  }
  console.log(caracter_maximo);
  return caracter_maximo
}

contador('marcooosssss rossel')