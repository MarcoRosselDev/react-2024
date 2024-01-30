export default function Box(params) {
  
  const mode = {
    backgroundColor : params.favorite? 'blue': 'pink'
  }
  
  return (
    <div className="box" key={params.key_params}
    style={mode}
    ></div>
  )
}