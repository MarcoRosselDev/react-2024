import { useState } from 'react'
import Header from './Header.jsx'
import './App.css'

/* 
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;
*/
function App() {
  const [dark, setDark] = useState(false)

  function toggleDark() {
    setDark(prev => !prev)
  }

  const div_style = dark? {backgroundColor: 'red'} : {backgroundColor: 'green'}

  return (
    <>
      <Header 
      func={toggleDark} 
      darkValue={dark}
      />
      <div 
      className='main'
      style={div_style}
      >
        <h1>hi</h1>
        <p>this is the body of this page</p>
      </div>
    </>
  )
}

export default App
