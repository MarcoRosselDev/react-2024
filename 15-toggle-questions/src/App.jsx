import { useState } from 'react'
import './App.css'

function App() {

  const [mostras, setMostrar] = useState(false)

  function hidden(elem) {
    console.log(elem.target.id);
    setMostrar(anterior => !anterior)
  }

  return (
    <>
      <p>preguntas frecuentes</p>

      <div className='contenedor-preguntas'>
        <div className='pregunta'>
          <p onClick={hidden} id='tarea 1'>+ titulo</p>
          <p>{mostras && 'contenido'}</p>
        </div>
        <div className='pregunta'>
          <p onClick={hidden}>+ titulo</p>
          <p>{mostras && 'contenido'}</p>
        </div>
        <div className='pregunta'>
          <p onClick={hidden}>+ titulo</p>
          <p>{mostras && 'contenido'}</p>
        </div>
        <div className='pregunta'>
          <p onClick={hidden}>+ titulo</p>
          <p>{mostras && 'contenido'}</p>
        </div>
      </div>
    </>
  )
}

export default App
