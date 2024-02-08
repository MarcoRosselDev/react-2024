import { useState } from 'react'
import data from './data'

export default function App(params) {

  console.log(data);
  const array = data.map(item => {
    return {
      id: item.id,
      estado: false
    }
  })

  const [plus, setPlus] = useState(array)

  function setArray(id) {
    console.log(id);
    setPlus(prev => {
      console.log(prev);
      return [
        ...prev
      ]
    })
  }

  return (
    <>
      {
        data.map(item => {
          //console.log(plus[item.id - 1].estado);
          return (
            <div key={item.id}>
            <p>{item.question}</p>
            <p>{plus[item.id -1].estado && item.answer}</p>
            <p onClick={() => setArray(item.id)}>-</p>
          </div>
        )})
      }
    </>
  )
}