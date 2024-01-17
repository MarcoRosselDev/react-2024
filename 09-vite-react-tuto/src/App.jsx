import { useState } from "react";
import './styles.css';

function Squere() {

  const [value, setValue] = useState(2);
  
  function manejadorClick() {
    setValue()
  }
  return <button onClick={manejadorClick}>{value}</button>
}

export default function board() {
  return (
    <>
      <div className="board-row">
        <Squere />
        <Squere />
        <Squere />
      </div>
      <div className="board-row">
        <Squere />
        <Squere />
        <Squere />
      </div>
      <div className="board-row">
        <Squere />
        <Squere />
        <Squere />
      </div>
    </>
  )
}

