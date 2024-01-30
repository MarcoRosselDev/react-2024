import { useState } from 'react';
import './App.css';

export default function App() {

  const [things, setThings] = useState(['thing 1', 'thing 2'])

  function add() {
    setThings( prev => {
      return [...prev, `thing ${prev.length + 1}`]
    })
  }
  
  const print = things.map(item => <p key={item}>{item}</p>)

  return (
    <main>
      <button onClick={add}>Add new item</button>
      {print}

    </main>
  )
}