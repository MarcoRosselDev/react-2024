import { useState } from 'react'
import data from './data'

export default function App(params) {

  const array = data.map(item => {
    return {
      id: item.id,
      estado: false
    }
  })

  const [plus, setPlus] = useState(array)

  function setArray(id) {
    setPlus(prev => {
      let arr = []
      prev.forEach(item => {
        item.id === id? arr.push({id: id, estado: !item.estado}) : arr.push(item) 
      })
      return arr
    })
  }

  const multy_preguntas = data.map(item => {
    return (
    <div key={item.id} className='pregunta'>
      <p>{item.question}</p>
      <p>{plus[item.id -1].estado && item.answer}</p>
      <p onClick={() => setArray(item.id)}>{plus[item.id -1].estado? '-': '+'}</p>
    </div>
  )})

  return (
    <>
      <p className='pregunta'>preguntas frecuentes</p>
      <button>solo uno</button>
      {multy_preguntas}
    </>
  )
}