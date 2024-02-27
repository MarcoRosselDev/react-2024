import './App.css'
import data from './data.js'

function App() {

/*   function overHandler(params) {
    console.log(params);
    params? params.map((i) => {
      return (<li>{i.name}</li>)
    }): console.log('no tiene hijitos');
  }

  const elems = data.map(item => {

    const childrens = item.children? item.children.map(a => {
      return a
    }): null

    return (<ul 
      key={item.name} 
      onMouseOver={() => overHandler(childrens)}
      >{item.name}
      </ul>)
  })
 */
  return (
    <>
      <div className='header'>
        <div>
          <p>lista 1</p>
          <ul>
            <li>a</li>
            <li>b</li>
            <li>c</li>
          </ul>
        </div>
        <div>
          <p>lista 2</p>
          <ul>
            <li>d</li>
            <li>e</li>
            <li>f</li>
          </ul>
        </div>
        <div>
          <p>lista 3</p>
          <ul>
            <li>g</li>
            <li>h</li>
            <div>
              <p>i</p>
            </div>
          </ul>
        </div>
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
