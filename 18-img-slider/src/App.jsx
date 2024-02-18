import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [img, setImg] = useState('')

  async function getPhotos() {
    const data = await fetch('https://picsum.photos/id/870/200/300?grayscale&blur=2', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      },
    })

    return data
  }

  useEffect(() => {
    const variable = getPhotos();

    variable.then(info => {
      setImg(info.url)
    }).catch(err => console.log(err))
    //console.log(variable);
  }, [])


  return (
    <>
      <p>hi</p>
      <img src={img} alt="random img" />
    </>
  )
}

export default App
