import { useState } from "react"

export default function App(params) {

  const [formState, setFormState] = useState({
    name:'',
    last_name: '',
  });

  function setFormFunction(event) {
    
    console.log(event.name);

    setFormFunction(prev => {
      return {
        ...prev,
        
      }
    })
  }

  return (
    <>
      <form >

        <label htmlFor="name">name</label>
        <input 
        type="text" 
        placeholder="name..."
        name="name"
        onChange={setFormFunction}
        />
        <label htmlFor="last_name">last name</label>
        <input 
        type="text" 
        placeholder="last name..."
        name="last_name"
        onChange={setFormFunction}
        />
      </form>
      <h1>Hi</h1>
    </>
  )
}