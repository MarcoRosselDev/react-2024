import './App.css'
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import reviews from './data' 
import { useState } from 'react';

function App() {

  const [user, setUser] = useState(1)

  function nextUser() {
    user === 4? setUser(1) : setUser(prev => prev + 1)
  }

  function prevUser() {
    user === 1? setUser(4) : setUser(prev => prev - 1)
  }

  const elems = reviews.map(item => {
    return (
      <div className='div-user' key={item.id}>
        <img src={item.image} alt="user image" />
        <h3>{item.name}</h3>
        <p>{item.job}</p>
        <p>{item.text}</p>
      </div>
    )
  })

  console.log(elems);
  console.log(user);

  return (
    <>
      <div className='contenedor'>
        <button className='btn-arrow' onClick={prevUser}>{<GoChevronLeft />}</button>
        {elems[user - 1]}
        <button className='btn-arrow' onClick={nextUser}>{<GoChevronRight/>}</button>
      </div>
    </>
  )
}

export default App
