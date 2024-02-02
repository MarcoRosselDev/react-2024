import { useState } from 'react'
import './App.css'

function App() {

  const [inputs, setInputs] = useState({name: '', lastName: ''})

  function change(event) {
    // event.target.name === name | lastName <--------------
    setInputs(prev => {
      return {
        ...prev,
        //event.target.name: event.target.value ----> esto marca error en el event.target.name
        // se soluciona encerradolo en []
        [event.target.name]: event.target.value
      }
    })
    console.log(inputs);
  }

  return (
    <>
      <input 
      type="text"
      placeholder='name...'
      onChange={change}
      name='name'
      />
      <input 
      type="text"
      placeholder='last name...'
      onChange={change}
      name='lastName'
      />
    </>
  )
}

export default App
