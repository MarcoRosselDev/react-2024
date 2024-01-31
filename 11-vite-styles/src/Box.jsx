export default function Box(params) {

  //console.log(params.favorite);
  const mode = {
    backgroundColor : params.favorite? 'blue': 'pink'
  }

  return (
    <div 
    className="box"
    style={mode}
    onClick={() => params.toggle(params.id_params)}
    ></div>
  )
}