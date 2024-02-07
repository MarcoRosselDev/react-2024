import { useState } from 'react';
import './App.css'
import data from './data'

function App() {
  const [show, setShow] = useState(null)
  const [btn, setBtn] = useState(false)

  function mostrar(id) {
    id === show? setShow(null) : setShow(id)
  }
  // disable, enable
  function habilitar() {
    setBtn(prev => !prev)
  }

  return (
    <>
      <p>preguntas frecuentes</p>
      <button onClick={habilitar}>{btn? 'deshabilitar': 'habilitar'}</button>
      <div className='contenedor'>
        {
          data.map(item => (
            <div className='item' key={item.id}>
              <p>{item.question}</p>
              <p>{show === item.id? item.answer : null}</p>
              <p onClick={() => mostrar(item.id)}>
                {show === item.id? '-': '+'}
              </p>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default App


/* function hidden(elem) {
  console.log(elem.target.id);
  setMostrar(anterior => !anterior)
} */