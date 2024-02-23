import './App.css'
import star from './star.svg'
import star_gold from './star-yell.svg'
import { useState } from 'react';

function App() {

  const [arr, setArr] = useState([
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
    {
      id: 5,
      gold: false
    },
  ])

  // aplicar una segunda useState con un selector no solo un iterador
  function crearArray(num) {
    let newArray = []
    for (let i = 1; i < num; i++) {
      newArray.push(i)
    }
    return newArray
  }

  function gold(params) {
    //console.log(params.target.id);// this is an string, not a number
    const this_id = Number(params.target.id)
    const arr2 = crearArray(6)

    const arr3 = []
    //console.log(arr2);
    arr2.map(item => {
      //console.log(item);
      item <= this_id? arr3.push({id: item, gold: true}): arr3.push({id: item, gold: false})
      //arr3.push()
    })
    //console.log(arr3);
    setArr(arr3)

    //return params.target.src = star_gold;
  }
  function black(params) {
    const arr2 = crearArray(6)

    const arr3 = []
    //console.log(arr2);
    arr2.map(item => {
      arr3.push({id: item, gold: false})
      //arr3.push()
    })
    //console.log(arr3);
    setArr(arr3)
    console.log(params.target.DOMAttributes);
    //params.target.src = star
  }


  function establecer(params) {
    //console.log('establecer en el array', params.target.id);
    params.preventDefault();
    const this_id = Number(params.target.id)
    const arr2 = crearArray(6)

    const arr3 = []
    //console.log(arr2);
    arr2.map(item => {
      //console.log(item);
      item <= this_id? arr3.push({id: item, gold: true}): arr3.push({id: item, gold: false})
      //arr3.push()
    })
    //console.log(arr3);
    console.log(params.target);
    return setArr(arr3)
  }

  const imgs = arr.map(item => {
    return (
      <img 
      src={item.gold? star_gold: star}
      className='star' 
      alt="star logo" 
      onMouseOver={gold}
      onMouseLeave={black}
      onClick={establecer}
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
