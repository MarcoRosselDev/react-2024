import { useEffect, useState } from 'react'
import './App.css'

function App() {

  async function f() {
    const data = await fetch('https://api.pexels.com/v1/photos', {
      method: 'GET',
      mode: 'no-cors',
    })

    data.then(info => info.json())
    .then(data => console.log(data))
  }

  useEffect(() => {
    f()
  }, [])

  return (
    <>
      <p>Hi</p>
    </>
  )
}

export default App
