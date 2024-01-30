import './App.css'
import usuarios from './usuarios.js'
import Main from './Main-content.jsx'
import Box from './Box.jsx';

function App() {
  //console.log(item.key)
  const a = usuarios.map(item => (
    <Box 
    key_params={item.key}
    favorite={item.favorite}
    />
  ))

  return (
    <main>
      {a}
    </main>
  )
}

export default App
