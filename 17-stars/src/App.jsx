import './App.css';
import start from './star.svg';
import start_yell from './star-yell.svg';
import { useState } from 'react';

export default function App(params) {
  //console.log(params);
  function createArray(num) {
    let newArray = []
    for (let i = 1; i < num + 1; i++) {
      newArray.push({id: i, gold: false})
    }
    return newArray
  }
  const [starClick, setStartClick] = useState(createArray(5))
  const [starOver, setStartOver] = useState(createArray(5))

  function changeStar(params) {
    
    setStartOver(prev => {
      const id = Number(params.target.id)
      let arr = []
      prev.map( item =>item.id <= id? arr.push({id:item.id, gold: true}) : arr.push({id: item.id, gold: false}) )
      return arr
    })
  }
  function cleanStar() {
    setStartOver(createArray(5))
  }
  function click(params) {
    const id = Number(params.target.id)
    setStartClick(prev => {
      let arr = []
      prev.map( item =>item.id <= id? arr.push({id:item.id, gold: true}) : arr.push({id: item.id, gold: false}) )
      return arr
    })
  }

  const starsImgs = starOver.map(item => {
    const id_img = Number(item.id) - 1
    console.log(starClick[id_img].gold, '..aksjdf;');
    return (
      <img 
      className='star'
      src={item.gold || starClick[id_img].gold ? start_yell: start}
      id={item.id} /* ojo es un string */
      key={item.id} 
      alt="star valoration"
      onMouseOver={changeStar}
      onMouseOut={cleanStar}
      onClick={click}
      />
    )
  })

  //console.log(starClick);
  return (
    <div>
      {starsImgs}
      {/* <img src={start} alt="empty star" />
      <img src={start_yell} alt="yellow star" /> */}
    </div>
  )
}