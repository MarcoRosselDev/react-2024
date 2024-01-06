import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('lightBlue')

  console.log(color);
  return (
    <>
      <h1>color project</h1>
      <button>lightred</button>
    </>
  )
}

export default App
