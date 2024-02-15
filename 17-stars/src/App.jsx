import './App.css';
import start from './star.svg';
import start_yell from './star-yell.svg';
import { useState } from 'react';

export default function App(params) {
  //console.log(params);
  function createArray(num) {
    let newArray = []
    for (let i = 1; i < num + 1; i++) {
      newArray.push(i)
    }
    return newArray
  }
  const [starClick, setStartClick] = useState(createArray(5))
  const [starOver, setStartOver] = useState(createArray(5))

  function changeStar(target, item) {
    console.log(target);
    console.log(item);
  }

  const starsImgs = starOver.map(item => {
    return (
      <img 
      src={start} 
      key={item} 
      alt="star valoration"
      onMouseOver={() => changeStar(item)}
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