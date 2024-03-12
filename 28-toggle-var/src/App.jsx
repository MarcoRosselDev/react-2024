import { useEffect, useState } from 'react';
import './App.css'

function App() {

  const url = 'https://course-api.com/react-tabs-project'

  const [info, setInfo] = useState([])

  async function fetch_data() {
    const data = await fetch(url)
    const json_data = data.json()
    //setInfo(json_data)
    json_data.then(data => setInfo(data))
  }

  useEffect(() =>{
    fetch_data()
  },[])

  console.log(info);
  const elems = info.map(item =>{

    const lista = item.duties.map((a,index ) => (<li key={index}>{a}</li>))

    return (
      <div key={item.id}>
        <p>title: {item.title}</p>
        <p>dates: {item.dates}</p>
        <p>company: {item.company}</p>
        <div>
          <ul>
            {lista}
          </ul>
        </div>

      </div>
    )
  })

  return (
    <>
      {info.length === 0? (<p>cargando...</p>) : elems}
      <p>Hi</p>
    </>
  )
}

export default App
