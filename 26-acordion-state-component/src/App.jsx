import './App.css'
import questions from './data'
import Question from './Component'

function App() {

/*   const elems = toggle.map(item =>{
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
  ) */

  const elems = questions.map(item => {
    return <Question data={item} key={item.id}/>
  })

  return (
    <div className="contenedor" >
      <h1 >frequent questions</h1>
      {elems}
    </div>
  )
}

export default App
