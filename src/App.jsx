import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-blue-300 h-screen w-full'> 
    <div className='h-1/7 w-full text-4xl text-black/80 flex ' >
    <p className='mx-5 mt-10'>
    <FontAwesomeIcon icon={faArrowTrendUp} beatFade />
    <span className='mx-4 font-bold	'>INVESTO</span>
      </p>
    </div>
    <div className='flex text-lg mx-5 justify-end px-5' >
      <div className='mx-4 hover:bg-white focus:outline-none focus:ring focus:ring-violet-300  hover:rounded-xl'><a href=''>
        Home
      </a></div>
      <div className='mx-4  hover:bg-white focus:outline-none focus:ring focus:ring-violet-300  hover:rounded-xl'><a href=''>
        Our Offer
        </a></div>
      <div className='mx-4  hover:bg-white focus:outline-none focus:ring focus:ring-violet-300  hover:rounded-xl'><a href=''>
        Investment thesis
        </a></div>
      <div className='mx-4  hover:bg-white focus:outline-none focus:ring focus:ring-violet-300  hover:rounded-xl'><a href=''>
        Portfolio
        </a></div>
      <div className='mx-4  hover:bg-white focus:outline-none focus:ring focus:ring-violet-300  hover:rounded-xl'><a href=''>
        Team
        </a></div>
      <div className='mx-4  hover:bg-white focus:outline-none focus:ring focus:ring-violet-300  hover:rounded-xl'><a href=''>
        Contact
        </a></div>
      </div>
      <div className='flex h-1/6 bg-blue-300 justify-center items-end	'>
        <div className='flex text-2xl'>
        <h5 >WE   ARE   AN   INDIAN   INVESTMENT   FUND</h5>
        </div>
        </div>
        <div className='flex h-4/6 bg-blue-300 justify-center'>
        <div className='mt-8 text-7xl'>
        <h1 className=''>Shaping The</h1>
        <h1 className='text-center mt-7'>Future</h1>
        <h1 className='mt-7'>Of Commerce</h1>
        </div>
        </div>
    </div>

    </>
  )
}

export default App
