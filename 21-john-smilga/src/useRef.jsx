import { useState } from "react"

export default function UseEffectD() {
  
  const [data, setData] = useState([])

  return (
    <>
      {data.map(item => {
        const {a, b, c} = item
        
        return (
          <div>
            
          </div>
          )
      } )}
    </>
  ) 
}