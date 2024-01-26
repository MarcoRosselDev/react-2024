import { useState } from 'react';
import './App.css';
import Main from './components/main';
import Header from './components/header';
import db from './db.js'

function App() {
  const [mainState, setMainState] = useState(db)
  const [proyecto, setProyecto] = useState('proyecto-1')

  function SetProyecto(target) {
    setProyecto(target.value)
  }

  return (
    <div className='body-div'>
      <Header proyecto={setProyecto}/>
      <Main main_state={mainState} proyecto={proyecto}/>
      <footer>
        <p>footer section</p>
      </footer>
    </div>
  )
}

export default App
