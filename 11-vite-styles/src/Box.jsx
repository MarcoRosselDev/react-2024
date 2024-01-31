import { useState } from "react"

export default function Box(params) {
  
  const [dark, setDark] = useState(params.favorite)

  function handelDark() {
    setDark(prev => !prev)
  }

  const mode = {
    backgroundColor : dark? 'blue': 'pink'
  }

  return (
    <div 
    className="box" 
    key={params.key_params}
    style={mode}
    onClick={handelDark}
    ></div>
  )
}