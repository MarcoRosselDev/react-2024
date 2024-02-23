import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('lightblue')

  return (
    <main  style={{backgroundColor: color}}>
      <div className='main-div'>
        <h1>color project</h1>
        <div className='contenedor'>
          <button onClick={() => setColor('lightcoral')}>lightcoral</button>
          <button onClick={() => setColor('lightblue')}>lightblue</button>
          <button onClick={() => setColor('lightgreen')}>lightgreen</button>
          <button onClick={() => setColor('lightyellow')}>lightyellow</button>
        </div>
      </div>
    </main>
  )
}

export default App
