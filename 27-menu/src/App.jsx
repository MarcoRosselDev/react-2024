import { useState } from 'react';
import './App.css'
import menu from './data'

function App() {

  console.log(menu);

  const [menuState, setMenuState] = useState('all')

  function filtro(menuTitle) {
    
  }

  return (
    <div className='main-container'>
      <div className='btns'>
        <button>all</button>
        <button>break fast</button>
        <button>lunch</button>
        <button>shakes</button>
      </div>
      <div className='manu-container'>
        <p>menus</p>
      </div>
    </div>
  )
}

export default App
