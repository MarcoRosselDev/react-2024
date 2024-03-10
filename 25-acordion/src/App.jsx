import { useEffect, useState } from 'react';
import './App.css'
import questions from './data'

function App() {

  const [toggle, setToggle] = useState([])

  /* function deleteOne(id) {
    func(prev => {
      const redu = prev.reduce((final, item) => {
        if (item.id == id) {
          console.log('hi');
        } else {
          final.push(item)
        }
        return final
      }, [])
      console.log(redu);
      return redu
    })
  } */
  function cargar_array() {
    const redu = questions.reduce((final, item) =>{
      final.push({
        id: item.id,
        title: item.title,
        key: item.id,
        info: item.info,
        mostrar: false
      })
      return final
    }, [])
    setToggle(redu)
  }

  useEffect(() =>{
    cargar_array()
  }, [])
  
  function mostrar(id) {
    console.log(id);
    const a = Number(id) -1
    setToggle(prev => {
      return [...prev, {
        prev[a].id == id? console.log('hi'): console.log(true)
      }]
    })
  }
  console.log(toggle, 'mostrar');

  const elems = toggle.map(item =>{
    return (
      <div className='item' key={item.id}>
        <div className='div-title'>
          <h2>{item.title}</h2>
          <button className='btn' onClick={() => mostrar(item.id)} >{item.mostrar? '-' : '+'}</button>
        </div>
        <p>{item.mostrar? item.info : ''}</p>
      </div>
    )
  })

  return (
    <div className='contenedor'>
      <h1>frequent questions</h1>
      {elems}
    </div>
  )
}

export default App
