import { useState } from "react"

const Tour = (params) => {

  const [readMore, setReadMore] = useState(false)

  const {id, name, info, image, price, func} = params
  
  function deleteOne(id) {
    func(prev => {
      const redu = prev.reduce((final, item) => {
        if (item.id == id) {
          console.log('hi');
        } else {
          final.push(item)
        }
        return final
      }, [])
      console.log(redu);
      return redu
    })
  }

  return  (
    <div key={id}>
      <img src={image} alt='image of the tour' />
      <p>name: ${name}</p>
      {/* <p>${info}</p> */}
      {/* info.substring(0, 200)  === 200 caracteres a mostrar */}
      <p>{readMore? info : info.substring(0, 200)}<button onClick={() => setReadMore(!readMore)}>{readMore? 'mostrar menos': 'mostrar mas'}</button> </p>
      {/* en este boton agregar otros estilos para que se vea bien con el resto del texto */}
      <p>price ${price} $</p>
      <button onClick={() => deleteOne(id)}> no me interesa</button>
    </div>
  )
}

export default Tour