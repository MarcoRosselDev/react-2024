import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [range, setRange] = useState(5)
  return (
    <>
      <div className='input-div'>
        <input type="text" />
        <button>trigger</button>
      </div>
      <div className='options'>
        <div>
          <p>digits</p>
          <input type="range" defaultValue={5} min={5} max={15} onChange={(event) => setRange(event.target.value)}/>
          <p>{range}</p>
        </div>
        <p>numbers</p>
        <input type="checkbox" />
        <p>characters</p>
        <input type="checkbox" />
      </div>
    </>
  )
}

export default App
