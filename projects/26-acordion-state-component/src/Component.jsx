import { useState } from "react"

const Question = ({data}) => {
  const [mostrar, setMostrar] = useState(false)
  const {id, title, info} = data
  return (
    <div className='item' key={id}>
      <div className='div-title'>
        <h2>{title}</h2>
        <button className='btn' onClick={() => setMostrar(!mostrar)} >{mostrar? '-' : '+'}</button>
      </div>
      <p>{mostrar? info : ''}</p>
    </div>
 ) 
}

export default Question