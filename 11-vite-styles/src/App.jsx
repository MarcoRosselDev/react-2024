import './App.css'
import usuarios from './usuarios.js'
import Box from './Box.jsx';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(usuarios)

/*   function toggle(id) {
    //console.log(id);
    setUser(prev => {
      const arr = [];
      for(let i = 0; i < prev.length; i++) {
        const curr = prev[i];
        if (curr.id === id) {
          const a = {
            ...curr,
            favorite: !curr.favorite
          }
          arr.push(a)
        } else{
          arr.push(curr)
        }
      }
      //console.log(arr);
      return arr
    })
  } */

  function toggle(id) {
    setUser(prev =>{
      return prev.map(item => {
        return (item.id === id)? {...item, favorite: !item.favorite}: item
      })
    })
  }

  const elems = user.map(item => (
    <Box 
      key={item.id}
      id_params={item.id}
      favorite={item.favorite}
      toggle={toggle}
    />
  ))

  return (
    <main>
      {elems}
    </main>
  )
}

export default App
