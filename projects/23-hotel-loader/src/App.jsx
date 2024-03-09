import { useEffect, useState } from 'react'
import './App.css'
import Tours from './components/Tours'

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [tours, setTours] = useState([])
  async function fetchURL(url) {
    const data = await fetch(url)
    const jsonData = await data.json()
    setTours(jsonData)
  }
  useEffect(() =>{
    fetchURL(url)
  }, [])

  function cargar_denuevo() {
    fetchURL(url)
  }

  const f = tours.length == 0 ? (<button onClick={cargar_denuevo}>cargar denuevo</button>) : (<Tours 
    data={tours}
    func={setTours}
    />)

  return (
    <>
      {f}
    </>
  )
}

export default App
