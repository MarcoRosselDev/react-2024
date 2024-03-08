const Tour = (params) => {
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
      <p>${info}</p>
      <p>price ${price} $</p>
      <button onClick={() => deleteOne(id)}> no me interesa</button>
    </div>
  )
}

export default Tour