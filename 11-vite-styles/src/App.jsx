import './App.css'
import usuarios from './usuarios.js'
import Main from './Main-content.jsx'
import Box from './Box.jsx';
import { useState } from 'react';

function App() {
  //console.log(item.key)

  const [user, setUser] = useState(usuarios)

  function toggle(id) {
    console.log(id);
    setUser(prev => {
      const arr = [];
      for(let i = 0; i < prev.length; i++) {
        const curr = prev[i];
        if (curr.id === id) {
          arr.push({
            ...curr,
            favorite: !curr.favorite
          })
        } else{
          arr.push(curr)
        }
      }
      console.log(arr);
      return arr
    })
  }

  return (
    <main key='kas'>
      {usuarios.map(item => (
        <Box 
        id_params={item.id}
        favorite={item.favorite}
        toggle={toggle}
        />
      ))}
    </main>
  )
}

export default App
