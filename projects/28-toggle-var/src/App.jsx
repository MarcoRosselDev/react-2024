import { useEffect, useState } from 'react';
import './App.css'

function App() {

  const url = 'https://course-api.com/react-tabs-project'

  const [info, setInfo] = useState([])
  const [info_number, setInfo_number] = useState(0)

  async function fetch_data() {
    const data = await fetch(url)
    const json_data = await data.json()
    //setInfo(json_data)
    setInfo(json_data)
    //json_data.then(data => setInfo(data))
  }

  useEffect(() =>{
    fetch_data()
  },[])
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

  function cambiar(id_item) {
    setInfo_number(id_item)
  }

  const selects = info.map((item, index) => {
    return (
      <div key={index} className={`select-item ${info_number == index? 'selected-item' : ''}`} onClick={() => cambiar(index)}>
        <p>{item.title}</p>
      </div>
    )
  })

  return (
    <>
      <div className='main'>
        <div className='side-var'>
          {info.length === 0? (<></>) : selects}
        </div>
        <div className='item-select'>
          {info.length === 0? (<p>cargando...</p>) : elems[info_number]}
        </div>

      </div>
    </>
  )
}

export default App
