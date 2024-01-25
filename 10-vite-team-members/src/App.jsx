import { useState } from 'react';
import './App.css';

function App() {

  const [contador, setContador] = useState(0)

  return (
    <>
      <h1>Hola mundo!</h1>
      <button onClick={() => setContador(contador + 1)}>click</button>
      <p>contador: {contador}</p>
      <button onClick={() => setContador(0)}>reiniciar</button>
    </>
  )
}

export default App
