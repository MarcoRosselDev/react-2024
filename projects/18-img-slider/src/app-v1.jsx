import { useEffect, useState } from 'react'
import './App.css'

function App() {
  
  const [imgs_arr , setImgs] = useState([])

  async function fetch_data() {
    const data = await fetch('https://api.pexels.com/v1/search?query=nature&per_page=3', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'mvs1q3C1jBMczdloJxg2DdPO1OkgjpQJQU5wGVZp6HvxaMHw1mOn6KeS',
      },
      //body: JSON.stringify(data), // data can be `string` or {object}!
    })
    return data
  }

  useEffect(() => {
    const imgs = fetch_data();
    imgs.then(data => data.json())
    .then((i) => {
      //console.log(i['photos'])
      setImgs(i['photos'])
    })
  }, [])

  //console.log(imgs_arr);
  const elems = imgs_arr.map(item => (<img src={item['url']} key={item['id']}  className='imgss' alt="" />))
  
  console.log(elems, 'elems ');

  return (
    <>
      {elems}
    </>
  )
}

export default App
