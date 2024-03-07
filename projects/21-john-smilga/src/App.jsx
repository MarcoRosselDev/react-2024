import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])

  const url = 'https://api.github.com/users'
  
  async function github_users() {
    const data = await fetch(url)
    const new_data = await data.json()
    setData(new_data)
  }
  useEffect(() => {
/*     const fetch_data = github_users()
    fetch_data.then(data => setData(data)) */
    github_users()
  }, [])

  return (
    <>
      <div>
        <ul>
          {data.map(item => {
            return (<li key={item.id}>
            <img src={item['avatar_url']} alt="user image" />
              {item.login}
            </li>)
          })}
        </ul>
      </div>
    </>
  )
}

export default App
