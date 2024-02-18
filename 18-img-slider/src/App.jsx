import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [img, setImg] = useState('')
  const [arr, setArray] = useState([])
  const [count, setCount] = useState(1)

  async function getPhotos() {
    const data = await fetch(`https://picsum.photos/v2/list?page=2&limit=10`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      },
    })

    //console.log(typeof(data));
    return data.json()
  }

  useEffect(() => {
    const variable = getPhotos();

    variable.then(a => {
      let this_arr = []
      a.map(item => {
        this_arr.push(item)
      })
      setArray(this_arr)
    })
    //console.log(typeof(variable));
    //variable.map(item => console.log(item) )


    /* variable.then(info => {
      console.log(info);
      console.log(typeof(info.url));
      setImg(info.url)
    })
    .catch(err => console.log(err)) */
  }, [count])

  const elems = arr.map(item => {
    return (<img src={item['download_url']} className='imgss' alt='random image' key={item.id} />)
  })
  console.log(arr);

  function nextImage() {
    setCount(prev => prev + 1)
  }

  return (
    <>
      {elems}
      {/* <img src={img} alt="random img" /> */}
      {/* <button onClick={nextImage}>next image</button> */}
    </>
  )
}

export default App
