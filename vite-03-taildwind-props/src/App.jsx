import './App.css'
import Card from './components/Card'

function App() {
  return (
    <>
      <Card producto={"White polo shirt"} precio={30.99} urlImage={'https://www.atar.cl/cdn/shop/products/PoleraATARhombre1_2000x.jpg?v=1639579941'}/>
      <Card producto={"blue pants"} precio={40.99} urlImage={'https://www.hollomen.com/cdn/shop/products/kenz-navy-blue-pants-632080.jpg?v=1693388087'}/>
      <Card />
    </>
  )
}

export default App
