import './App.css'
import questions from './data'
import Question from './Component'

function App() {
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
