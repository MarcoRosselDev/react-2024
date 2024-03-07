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
  return (
    <>
      <Tours data={tours} />
    </>
  )
}

export default App
