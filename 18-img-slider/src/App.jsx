import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [img, setImg] = useState('')
  const [arr, setArray] = useState([])
  const [count, setCount] = useState(10)

  async function getPhotos() {
    const data = await fetch(`https://picsum.photos/v2/list?page=2&limit=10`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      },
    })
    return data.json()
  }

  useEffect(() => {
    const array_de_fotos = getPhotos();
    array_de_fotos.then(a => {
      let this_arr = []
      a.map(item => {
        this_arr.push(item)
      })
      setArray(this_arr)
    })
  }, [])

  useEffect(() =>{
    console.log('new count');
    arr.map(item => {
      item.id == count? setImg(item['download_url']): null; 
    })

  }, [count])

  /* const elems = arr.map(item => {
    // with: 2500
    // height: 1667
    return (<img src={item['download_url']} className='imgss' alt='random image' key={item.id} />)
  }) */
  //console.log(arr);


  function nextImage() {
    setCount(prev => prev>= 19? 10: prev + 1)
  }
  function prevImage() {
    setCount(prev => prev<=10? 19: prev - 1)
  }

  console.log(count);

  return (
    <div className='contenedor'>
      <button onClick={prevImage}>prev image</button>
      <img src={img} alt="imagen random" className='imgss' />
      <button onClick={nextImage}>next image</button>
    </div>
  )
}

export default App
