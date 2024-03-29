import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

/* function App() {
  const [count, setCount] = useState(0)
  const [range, setRange] = useState(5)
  const [pass, setPass] = useState()
  
  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '1234567890';
  const caracteres = '!@#$%^&*()_+|}{":;[].,?><-='
  
  const generate_pass = (numb = false, charr = false, range_f = range ) => {
    //console.log(numb, charr, range_f);
    console.log(letters.length);
    
    let pass_str = '';
    for (let i = 0; i < range_f.length; i++) {
      let random = Math.floor(Math.random() * letters.length)
      console.log(letters.length, 'random: ', random);
      //Math.floor(Math.random() * letters.length);
    }
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
} */

function App() {

  // logica
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = '';
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%^&*()_+|}{":;[].,?><-=`';

    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  const copyPasswordToClick = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current.select();
  }

  //useEffect(()=>{}, []) sintax
  // dentro del [], si algo cambia, se ejecuta la funcion collback
  useEffect(()=>{ generatePassword()}, [length, numberAllowed, charAllowed])

  return (
    <>
      <div>
        <h1>password generator</h1>
        <input 
        type="text" 
        value={password}
        placeholder='password'
        readOnly
        ref={passwordRef}
        />
        <button onClick={copyPasswordToClick}>copy</button>
      </div>
      <div>
        <input 
        type="range"
        min={8}
        max={20}
        value={length}
        className=''
        onChange={(event) => setLength(event.target.value)}
        name=''
        id=''
        />
        <label htmlFor="length">Length: {length}</label>
      </div>
      <div>
        <input 
        type="checkbox"
        defaultChecked={numberAllowed}
        onChange={() => {
          setNumberAllowed((prev) => !prev)
          /* utilizamos un callback dentro de setNumberAllowed 
          en caso de que se ataseque por el exeso de clicks,
          es una buena practica utilizar el valor anterior para ser utlilizado.
          De esta manera nos aseguramos de que react no se atascara. */
        }}
        />
        <label htmlFor="number">Numbers</label>
      </div>
      <div>
        <input 
        type="checkbox"
        defaultChecked={charAllowed}
        onChange={() => {
          setCharAllowed((prev) => !prev)
        }}
        />
        <label htmlFor="number">Character</label>
      </div>
    </>
  )
}

export default App
