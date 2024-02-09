import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState(`rgb(0,0,0)`)
//let random_color = `rgb(${Math.round(Math.random() * 250)}, ${Math.round(Math.random() * 250)}, ${Math.round(Math.random() * 250)})`

  function nuevo() {
    setColor(`rgb(${Math.round(Math.random() * 250)}, ${Math.round(Math.random() * 250)}, ${Math.round(Math.random() * 250)})`)
    const body = document.querySelector('body')
    body.style.backgroundColor = color
  }

  useEffect(() =>{
    nuevo()
  }, [])
  return (
    <>
      <p>{color}</p>
      <button onClick={nuevo}>nuevo color</button>
    </>
  )
}

export default App
