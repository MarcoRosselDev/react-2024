import { useState } from 'react'
import './App.css';
import useCurrencyInfo from './hooks/useCurrencyInfo';


function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);




  return (
    <>
      <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style={{backgroundImage: `url(https://images.pexels.com/photos/4497591/pexels-photo-4497591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`}}
    >

      <h1 className="text-3xl font-bold underline text-red-500">
        Hello world!
      </h1>
      </div>
    </>
  )
}

export default App
