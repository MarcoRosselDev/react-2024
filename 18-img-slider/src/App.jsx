import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [idPokemon, setIDPokemon] = useState(1);
  const [urlPokemon, setUrlPokemon] = useState(null)

  async function getPokemon(id) {
    const pokemon = id;
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })

    return data.json()
  }

  async function getEvolutions(id) {
    // id or name
    console.log(id);
    const evolutions = await fetch(`https://pokeapi.co/api/v2/evolution-trigger/${id}/`, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })

    console.log(evolutions);
    return evolutions.json()
  }

  useEffect(() => {
    const primer_pokemon =  getPokemon(idPokemon)
    const evoluciones = getEvolutions(5);
    evoluciones.then((data) => {
      console.log(data, 'data from evolutions');
    })

    primer_pokemon.then((pokemon) => {
      setUrlPokemon(pokemon['sprites']['front_default'])
    })
    //console.log(primer_pokemon);
  }, [idPokemon])

  function nextPokemon() {
    setIDPokemon(prev => prev + 1)
  }

  return (
    <>
      <img src={urlPokemon} alt="imagen del pokemon" className='imgss' />
      <button onClick={nextPokemon}>siguiente pokemon</button>
    </>
  )
}

export default App
