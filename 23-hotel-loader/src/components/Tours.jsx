import Tour from "./Tour"

const Tours = ({data, func}) => {
  const elems = data.map(item =>{
    const {id, name, info, image, price} = item
    return (
      <Tour
      key={id}
      id={id} 
      name={name}
      info={info}
      image={image}
      price={price}
      func={func}
      />
    )
  })

  return  (
    <>
      {elems}
    </>
  )
}

export default Tours