import { useState } from 'react'
import data from './data'
import './app.css'

export default function App() {

  const array = data.map(item => {
    return {
      id: item.id,
      estado: false
    }
  })

  const [plus, setPlus] = useState(array)
  const [btn, setBtn] = useState(true)
  const [justOne, setJustOne] = useState(null)

  function one(id) {
    setJustOne(id? id: null)
  }

  function setBtnFunction() {
    setBtn(prev => !prev)
  }

  function setArray(id) {
    setPlus(prev => {
      let arr = []
      prev.forEach(item => {
        item.id === id? arr.push({id: id, estado: !item.estado}) : arr.push(item) 
      })
      return arr
    })
  }
  const solo_uno = data.map(item => (
    <div key={item.id} className='pregunta'>
      <p>{item.question}</p>
      <p>{justOne === item.id? item.answer: null}</p>
      <p onClick={() => one(item.id)}>{justOne === item.id? '-': '+'}</p>
    </div>
  ))

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
      <p>preguntas frecuentes</p>
      <button onClick={setBtnFunction}>{btn? 'solo uno': 'multiple'}</button>
      {btn? multy_preguntas : solo_uno}
    </>
  )
}