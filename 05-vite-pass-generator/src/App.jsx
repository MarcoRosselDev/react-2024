import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [range, setRange] = useState(5)
  const [pass, setPass] = useState()

  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '1234567890';
  const caracteres = '!@#$%^&*()_+|}{":;[].,?><-='

  const generate_pass = (numb = false, charr = false, range_f = range ) => {
    //console.log(numb, charr, range_f);
    console.log(letters.length);
    
    /* let pass_str = '';
    for (let i = 0; i < range_f.length; i++) {
      let random = Math.floor(Math.random() * letters.length)
      console.log(letters.length, 'random: ', random);
      //Math.floor(Math.random() * letters.length);
    } */
  }

  generate_pass();
  return (
    <>
      <div className='input-div'>
        <p className='p-pass'>{pass}</p>
        <button>trigger</button>
      </div>
      <div className='options'>
        <p>numbers</p>
        <input type="checkbox" onChange={() => generate_pass()}/>
        <p>characters</p>
        <input type="checkbox" />
      </div>
        <div className='range-css'>
          <p>digits</p>
          <input type="range" defaultValue={5} min={5} max={15} onChange={(event) => setRange(event.target.value)}/>
          <p>{range}</p>
        </div>
    </>
  )
}

export default App
