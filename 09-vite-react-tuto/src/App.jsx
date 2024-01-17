function Squere({value}) {

  function manejadorClick() {
    console.log(`clickeaste el valor: ${value}`);
  }

  return <button onClick={manejadorClick}>{value}</button>
}

export default function board() {
  return (
    <>
      <div className="board-row">
        <Squere value="1" />
        <Squere value="2" />
        <Squere value="3" />
      </div>
      <div className="board-row">
        <Squere value="4" />
        <Squere value="5" />
        <Squere value="6" />
      </div>
      <div className="board-row">
        <Squere value="7" />
        <Squere value="8" />
        <Squere value="9" />
      </div>
    </>
  )
}

