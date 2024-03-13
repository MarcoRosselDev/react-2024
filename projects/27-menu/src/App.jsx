import { useEffect, useState } from 'react';
import './App.css'
import menu from './data'

function App() {

  const [menuState, setMenuState] = useState('all')
  const [elem, setElem] = useState([])

  function filtro(menuTitle) {
    let array_filtro = []
    menuTitle === 'all'?  array_filtro = menu: menu.map(item =>{
      item.category === menuTitle? array_filtro.push(item) : console.log('no hacer nada');
    })
    setElem(array_filtro)
  }

  useEffect(() =>{
    filtro(menuState)
  }, [menuState])

  const dom = elem.map(item => {
    return (
      <div className="contenedor" key={item.id}>
        <h1>{item.title}</h1>
        <img src={item.img} alt="image of menu item" />
        <p>category : {item.category}</p>
        <p>price: {item.price}</p>
      </div>
    )
  })

  console.log(elem);

  return (
    <div className='main-container'>
      <div className='btns'>
        <button onClick={() => setMenuState('all')}>all</button>
        <button onClick={() => setMenuState('breakfast')}>break fast</button>
        <button onClick={() => setMenuState('lunch')}>lunch</button>
        <button onClick={() => setMenuState('shakes')}>shakes</button>
      </div>
      <div className='manu-container'>
        {dom}
      </div>
    </div>
  )
}

export default App
