import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header.jsx'
import './App.css'

function App() {
  const [dark, setDark] = useState(true)

  function toggleDark() {
    setDark(prev => !prev)
  }

  return (
    <>
      <Header 
      func={toggleDark} 
      darkValue={dark}
      />
      <h1>hi</h1>
      <p>this is the body of this page</p>
    </>
  )
}

export default App
