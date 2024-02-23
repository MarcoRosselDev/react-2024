import { useState } from "react"

export default function App(params) {

  const [formState, setFormState] = useState({
    name:'',
    last_name: '',
    password: '',
    repeat_password: '',
    agree: false
  });

  console.log(formState);
  function setFormFunction(props) {
    
    //console.log(props.target);

    const {name, value, type, checked} = props.target;
    setFormState(prev => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  function submitForm(event) {
    event.preventDefault();
    console.log(formState);
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
        value={formState.name}
        />
        <label htmlFor="last_name">last name</label>
        <input 
        type="text" 
        placeholder="last name..."
        name="last_name"
        onChange={setFormFunction}
        value={formState.last_name}
        />
        <label htmlFor="password">password</label>
        <input 
        type="password" 
        placeholder="*******"
        name="password"
        onChange={setFormFunction}
        value={formState.password}
        />
        <label htmlFor="">repeat password</label>
        <input 
        type="password" 
        placeholder="*******"
        name="repeat_password"
        onChange={setFormFunction}
        value={formState.repeat_password}
        />

        <label htmlFor="check">I am agree</label>
        <input 
        type="checkbox"
        name="agree"
        onChange={setFormFunction}
        value={formState.agree}
        />

        <br />
        <button>Send form</button>
      </form>
    </>
  )
}