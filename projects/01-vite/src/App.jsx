import { createElement } from "react"

function App() {
  
  const reactElement = createElement(
    'a',
    {href: 'https://marcorossel.com/cv', target: '_blank'},
    "marco's cv"
  )

  return (
    reactElement
  )
}

export default App
