import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('lightblue')

  console.log(color);
  return (
    <main>
      <div className='main-div'>
        <h1>color project</h1>
        <div className='contenedor'>
          <button>lightred</button>
          <button>ligthblue</button>
          <button>orange</button>
          <button>black</button>
        </div>
      </div>
    </main>
  )
}

export default App
