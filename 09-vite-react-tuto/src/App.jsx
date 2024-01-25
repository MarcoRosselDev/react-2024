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

  const [xIsNext, setXIsNext] = useState(true)
  const [squares, setSquares] = useState(Array(9).fill(null));

  function manejadorClick(i) {

    if (squares[i]) {
      return;
    }

    const nextSquares = squares.slice();
    if (xIsNext === true) {
      nextSquares[i] = 'X';
      setSquares(nextSquares);
      setXIsNext(!xIsNext)
    } else {
      nextSquares[i] = 'O';
      setSquares(nextSquares);
      setXIsNext(!xIsNext)
    }
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => manejadorClick(0)} />
        <Square value={squares[1]} onSquareClick={() => manejadorClick(1)} />
        <Square value={squares[2]} onSquareClick={() => manejadorClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => manejadorClick(3)} />
        <Square value={squares[4]} onSquareClick={() => manejadorClick(4)} />
        <Square value={squares[5]} onSquareClick={() => manejadorClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => manejadorClick(6)} />
        <Square value={squares[7]} onSquareClick={() => manejadorClick(7)} />
        <Square value={squares[8]} onSquareClick={() => manejadorClick(8)} />
      </div>
    </>
  )
}

