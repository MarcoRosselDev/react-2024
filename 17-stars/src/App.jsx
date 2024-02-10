import './App.css'
import star from './star.svg'
import star_gold from './star-yell.svg'
import { useState } from 'react';

function App() {

  const [arr, setArr] = useState([
    {
      id: 0,
      gold: false
    },
    {
      id: 1,
      gold: false
    },
    {
      id: 2,
      gold: false
    },
    {
      id: 3,
      gold: false
    },
    {
      id: 4,
      gold: false
    },
  ])

  function gold(params) {

    function crearArray(num) {
      let newArray = []
      for (let i = 1; i < num; i++) {
        newArray.push(i)
      }
      return newArray
    }

    console.log(params.target.id);
    //params.target.src = star_gold
    setArr(prev => {
      const id_target = crearArray(params.target.id)
      
      console.log(prev);

    })
  }
  function black(params) {
    params.target.src = star
  }



  const imgs = arr.map(item => {
    return (
      <img 
      src={star}
      className='star' 
      alt="star logo" 
      onMouseOver={gold}
      onMouseLeave={black}
      key={item.id}
      id={item.id}
      />
    )
  })

  return (
    <>
      <div>
      {imgs}
      </div>
    </>
  )
}

export default App
