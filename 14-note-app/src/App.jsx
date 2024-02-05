import { useState } from 'react'
import './App.css'

function App() { 

  const [note, setNote] = useState({
    titulo: '',
    contenido: '',
    id: Math.random() * (Math.random() *10)
  })

  function newNote(props) {
    const {value, name} = props.target;
    //const {value, name} = props.target.value;
    // podriamos agregar unos validadores previos a la actualizacion
    setNote(prev => {
      console.log(prev);
      return {
        [name]: value
      }
    })
  }
  /* const notass = note.map(item =>(
  <div>
    <p>{item.titulo}</p>
    <p>{item.contenido}</p>
  </div>)) */
  
  //id: Math.random() * Math.random()
  console.log(note);
  return (
    <div className='div-main'>
       <form>
        <h1>app de notas</h1>
        <input 
        type="text"
        placeholder='titulo...'
        name='titulo'
        onChange={newNote}
        />
        <input 
        type="text" 
        placeholder='contenido...'
        name='contenido'
        onChange={newNote}
        />
        <button>crear</button>
      </form>
      {/*       <div>{note}</div>
      */}    
    </div>
  )
}

export default App
