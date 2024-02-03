import { useState } from "react"

export default function App(params) {

  const [formState, setFormState] = useState({
    name:'',
    last_name: '',
    password: '',
    repeat_lastname: ''
  });

  console.log(formState);
  function setFormFunction(props) {
    
    //console.log(props.target);

    setFormState(prev => {
      return {
        ...prev,
        [props.target.name]: props.target.value
      }
    })
  }

  function submitForm(event) {
    event.preventDefault();
    // logica para enviar formState {} a algun servidor o base de datos
  }
  return (
    <>
      <form onSubmit={submitForm}>

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
        <label htmlFor="password">password</label>
        <input 
        type="password" 
        placeholder="*******"
        name="password"
        onChange={setFormFunction}
        />
        <label htmlFor="">repeat password</label>
        <input 
        type="password" 
        placeholder="*******"
        name="repeat_lastname"
        onChange={setFormFunction}
        />

        <br />
        <button>Send form</button>
      </form>
    </>
  )
}