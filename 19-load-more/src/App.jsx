import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [page, setPage] = useState(1)
  const [arrData, setArrData] = useState([])

  async function get_array_de_fotos(page) {
    const arr = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=10`, {
      method: 'GET',
      mode: "cors", // no-cors, *cors, same-origin
      cache: "force-cache", // *default, no-cache, reload, force-cache, only-if-cached
      //credentials: "same-origin", // include, *same-origin, omit
      headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    }
  })
  return arr.json()
  }

  useEffect(()=>{
    const arr = get_array_de_fotos(page)
    arr.then(data => {
      setArrData(data)
    })
    //nextPage()
  },[])

  function nextPage() {
    setPage(prev => prev + 1)
  }

  console.log(page, 'por fuera');

  function setArray() {

    console.log(page);
    const asyncData = get_array_de_fotos(page)
    asyncData.then(data => console.log(data))
  }

  

  useEffect(() =>{
    arrData.map(item => (<img src={item["download_url"]} alt={`imagen ${item.id}`} key={item.id} id={item.id} className='imagenes' />))
  }, [arrData])


  
  return (
    <>
      <div>
        
      </div>
      <button onClick={setArray}>cargar mas</button>
    </>
  )
}

export default App
