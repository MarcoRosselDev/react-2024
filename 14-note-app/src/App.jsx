import { useState } from 'react'
import './App.css'

function App() { 

  const [note, setNote] = useState({
    titulo: '',
    contenido: '',
    id: Math.round(Math.random() * (Math.random() *1000000))
  })
  const [all, setAll] = useState([])

  //console.log(note);

  function newNote(props) {
    const {value, name} = props.target;
    //const {value, name} = props.target.value;
    // podriamos agregar unos validadores previos a la actualizacion
    setNote(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  console.log(note);
  /* const notass = note.map(item =>(
  <div>
    <p>{item.titulo}</p>
    <p>{item.contenido}</p>
  </div>)) */
  
  //id: Math.random() * Math.random()

  function saveNote(notee) {
    setAll(prev =>{
      return [
        ...prev,
        notee
      ]
    })
  }

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
        <button onClick={(event) => {
          event.preventDefault();
          saveNote(note)
        }}>crear</button>
      </form>
      <div>
        {all.map(item => (
        <div className='margin-top' key={item.key}>
          <p>titulo: {item.titulo}</p>
          <p>contenido: {item.contenido}</p>
        </div>))}  
      </div>   
    </div>
  )
}

export default App
