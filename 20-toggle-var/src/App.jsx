import './App.css'
import data from './data.js'

function App() {

  function clickHandler(params) {
    console.log(params);
    params.map()
  }

  function overF(params) {

  }
  const elems = data.map(item => {

    const childrens = item.children? item.children.map(a => {
      return a
    }): null

    return (<li 
      key={item.name} 
      onClick={() => clickHandler(childrens)}
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
