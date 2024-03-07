const Tour = (params) => {
  const {id, name, info, image, price} = params
  
  return  (
    <div key={id}>
      <img src={image} alt='image of the tour' />
      <p>name: ${name}</p>
      <p>${info}</p>
      <p>price ${price} $</p>
      <button> no me interesa</button>
    </div>
  )
}

export default Tour