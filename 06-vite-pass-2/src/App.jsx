import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState('')
  const [range, setRange] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [characters, setCharacters] = useState(false);

  const generatePass = useCallback(()=> {
    let str = 'abcdefghijklmnopqrstuvwxyzABCDFGHIJKLMNOPQRSTUVWXYZ';
    let pass = '';

    if (numbers) str += '1234567890';
    if (characters) str += '!@#$%^&*()_+=-{}|":.?';

    for (let i = 1; i < range; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass)
    
  }, [password, range, numbers, characters])

  useEffect(() =>{
    generatePass();
  }, [range, numbers, characters])

  return (
    <>
      <h1>password generator</h1>
      <div>
        <input 
        type="text"
        placeholder='password'
        value={password}
        readOnly
        />
        <button>copy</button>
      </div>
      <div>
        <input 
        type="range" 
        min={8} 
        max={20}
        onChange={(event) => setRange(event.target.value)}
        defaultValue={range}
         />
        <label htmlFor="range">{range}</label>
      </div>
      <div>
        <input 
        type="checkbox"
        onChange={() => setNumbers((prev) => !prev)}
         />
        <label htmlFor="numbers">numbers</label>
      </div>
      <div>
        <input 
        type="checkbox"
        onChange={() => setCharacters((prev) => !prev)}
         />
        <label htmlFor="characters">characters</label>
      </div>
    </>
  )
}

export default App
