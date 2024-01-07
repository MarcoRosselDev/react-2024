import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [range, setRange] = useState(5)
  const [pass, setPass] = useState('pijsn')
  return (
    <>
      <div className='input-div'>
        <p className='p-pass'>{pass}</p>
        <button>trigger</button>
      </div>
      <div className='options'>
        <p>numbers</p>
        <input type="checkbox" />
        <p>characters</p>
        <input type="checkbox" />
      </div>
        <div className='range-css'>
          <p>digits</p>
          <input type="range" defaultValue={5} min={5} max={15} onChange={(event) => setRange(event.target.value)}/>
          <p>{range}</p>
        </div>
    </>
  )
}

export default App
