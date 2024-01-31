import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(true)

  function toggle() {
    setCount(prev => !prev)
  }

  return (
    <>
      {count && <p>Hi</p>}
      <button onClick={toggle}>toggle</button>
    </>
  )
}

export default App
