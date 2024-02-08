import { useState } from 'react';
import './App.css'
import data from './data'

function App() {
  const [show, setShow] = useState(null)
  const [btn, setBtn] = useState(false)
  const [lista, setLista] = useState([])

  function mostrar(id) {
    id === show? setShow(null) : setShow(id)
  }
  // disable, enable
  function habilitar() {
    setBtn(prev => !prev)
  }
  function actualizar(id) {
    setLista(prev => {
      let arr = [...prev]
      return lista.includes(id)? arr.slice(id) : arr.push(id)
    })
  }
  console.log(btn);
  console.log(lista);

  return (
    <>
      <p>preguntas frecuentes</p>
      <button onClick={habilitar}>{btn? 'deshabilitar': 'habilitar'}</button>
      <div className='contenedor'>
        {
          data.map(item => (
            <div className='item' key={item.id}>
              <p>{item.question}</p>

              <p>{show === item.id?  item.answer : null}</p>
              {/* <p>{show === item.id? item.answer : null}</p> */}
              <p 
                onClick={btn? () => actualizar(item.id) : () => mostrar(item.id) }
              
              >
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