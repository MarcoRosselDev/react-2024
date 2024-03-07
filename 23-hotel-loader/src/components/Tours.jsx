import Tour from "./Tour"

const Tours = ({data}) => {

  const elems = data.map(item =>{

    const {id, name, info, image, price} = item

    return (
      <Tour 
      id={id} 
      name={name}
      info={info}
      image={image}
      price={price}
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