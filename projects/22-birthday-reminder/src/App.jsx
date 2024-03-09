import { useState } from 'react'
import './App.css'
import data from './data'

function App() {
  
  const [birthday, setBirthday] = useState(data);

  console.log(birthday);

  function cleanBirthays() {
    setBirthday(null)
  }

  const f = birthday === null? (<p>Hi</p>) : birthday.map(person => {
    return (
      <div key={person.id}>
        <div className='img-div'>
          <img src={person.image} alt={person.name} />
        </div>
        <p>{person.age}</p>
        <p>{person.name}</p>
      </div>
    )
  })

  return (
    <div className='contenedor'>
      {f}
      <button onClick={cleanBirthays}>clean birthdats</button>
    </div>
  )
}

export default App
