import './App.css'
import questions from './data'

function App() {

  const elems = questions.map(item =>{
    return (
      <div className='item' key={item.id}>
        <div className='div-title'>
          <h2>{item.title}</h2>
          <button className='btn'>-</button>
        </div>
        <p>{item.info}
        </p>
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
