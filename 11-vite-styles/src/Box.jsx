//import { useState } from "react"

export default function Box(params) {

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