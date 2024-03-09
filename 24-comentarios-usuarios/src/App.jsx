import './App.css'
import {FaBeer} from 'react-icons/fa'
import reviews from './data' 

function App() {

  const elems = reviews.map(item => {
    return (
      <div key={item.id}>
        <img src={item.image} alt="user image" />
        <h3>{item.name}</h3>
        <p>{item.job}</p>
        <p>{item.text}</p>
      </div>
    )
  })

  return (
    <>
      <p>Hi</p>
      <h3>Lets go for a <FaBeer /> </h3>
      {elems}
    </>
  )
}

export default App
