import './App.css'
import data from './data.js'

function App() {

  function clickHandler(params) {
    console.log(params.target.name);
  }

  const elems = data.map(item => {

    item.children? console.log(`${item.name} tiene elementos hijos para mostrar: ${item.children}`) :null

    return (<li 
      key={item.name} 
      onClick={clickHandler}

      >{item.name}</li>)
  })

  return (
    <>
      <div className='header'>
        <ul>
          {elems}
        </ul>
      </div>
      <div>
        <p>some content</p>
        <p>some content</p>
        <p>some content</p>
        <p>some content</p>
        <p>some content</p>
      </div>
    </>
  )
}

export default App
