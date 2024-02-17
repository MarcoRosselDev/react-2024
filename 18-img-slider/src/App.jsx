import { useEffect, useState } from 'react'
import './App.css'
import { createClient } from 'pexels';




function App() {
  
  /* async function f() {
    const data = await fetch('https://api.pexels.com/v1/photos', {
      method: 'GET',
      mode: 'no-cors',
      key: 'mvs1q3C1jBMczdloJxg2DdPO1OkgjpQJQU5wGVZp6HvxaMHw1mOn6KeS'
    })
    
    data.then(info => info.json())
    .then(data => console.log(data))
  } */
  
  async function imgs() {
    const client = await createClient('mvs1q3C1jBMczdloJxg2DdPO1OkgjpQJQU5wGVZp6HvxaMHw1mOn6KeS');
    /* const data = await fetch('https://api.pexels.com/v1/', {
      method: 'GET',
      //key: 'mvs1q3C1jBMczdloJxg2DdPO1OkgjpQJQU5wGVZp6HvxaMHw1mOn6KeS',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'mvs1q3C1jBMczdloJxg2DdPO1OkgjpQJQU5wGVZp6HvxaMHw1mOn6KeS',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      //body: JSON.stringify(data)
    })
    return data */
    const data = await fetch('https://api.pexels.com/v1/popular', {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': client,
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })

    return client
  }

  useEffect(() => {
    const data = imgs();
    data.then((i) => console.log(i))
    //data.then(a => ())
  }, [])

  return (
    <>
      <p>Hi</p>
    </>
  )
}

export default App
