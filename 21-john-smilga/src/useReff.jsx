import { useRef, useState } from "react"
import './App.css'

export default function App() {

  const inputRefer = useRef(null)
  const divRef = useRef(null)

  function makeThings() {
    divRef.current.innerHTML = `<p>${inputRefer.current.value}</p>`
  }

  return (
    <div>
      <input type="text" ref={inputRefer} />
      <button onClick={makeThings}>sumar uno</button>
      <div ref={divRef}></div>
    </div>
  ) 
}