import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addNumber = () => {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  }
  const restNumber = () => {
    setCount(count - 1);
  }

  return (
    <>
      <p>{count}</p>
      <button onClick={addNumber}>add</button>
      <button onClick={restNumber}>rest</button>
    </>
  )
}

export default App
