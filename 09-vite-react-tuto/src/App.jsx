import { useState } from "react";
//import './styles.css';

function Square({value, onSquareClick}) {

  return (
  <button 
  className="square"
  onClick={onSquareClick}
  >
    {value}
  </button>
  );
}

export default function board() {

  const [squares, setSquares] = useState(Array(9).fill(null));

  function manejadorClick() {
    const nextSquares = squares.slice();
    nextSquares[0] = 'X';
    setSquares(nextSquares);
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={manejadorClick} />
        <Square value={squares[1]} onSquareClick={manejadorClick} />
        <Square value={squares[2]} onSquareClick={manejadorClick} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={manejadorClick} />
        <Square value={squares[4]} onSquareClick={manejadorClick} />
        <Square value={squares[5]} onSquareClick={manejadorClick} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={manejadorClick} />
        <Square value={squares[7]} onSquareClick={manejadorClick} />
        <Square value={squares[8]} onSquareClick={manejadorClick} />
      </div>
    </>
  )
}

