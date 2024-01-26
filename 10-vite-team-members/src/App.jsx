import { useState } from 'react';
import './App.css';
import Main from './components/main';

function App() {

  const [mainState, setMainState] = useState('item-1')

  return (
    <div className='body-div'>
      <header>
        <nav className='nav'>
          <button onClick={() => setMainState('item-1')}>item 1</button>
          <button onClick={() => setMainState('item-2')}>item 2</button>
          <button onClick={() => setMainState('item-3')}>item 3</button>
        </nav>
      </header>
      <Main main_state={mainState}/>
      <footer>
        <p>footer section</p>
      </footer>
    </div>
  )
}

export default App
