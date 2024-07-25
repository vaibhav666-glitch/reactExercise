import { useState } from 'react'
import './index.css'

function App() {
  const [color,setColor]=useState("olive")

  return (
    
      <div className='w-full h-screen duration-200'style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button onClick={()=>{setColor("red")}} className='bg-red-600 outline-none px-4 py-1 rounded-2xl text-white shadow-sm' >Red</button>
            <button onClick={()=>{setColor("green")}} className='bg-green-600 outline-none px-4 py-1 rounded-2xl text-white shadow-sm' >Green</button>
            <button onClick={()=>{setColor("yellow")}} className='bg-yellow-600 outline-none px-4 py-1 rounded-2xl text-white shadow-sm' >yellow</button>
            <button onClick={()=>{setColor("purple")}} className='bg-purple-600 outline-none px-4 py-1 rounded-2xl text-white shadow-sm' >purple</button>
            <button onClick={()=>{setColor("pink")}} className='bg-pink-600 outline-none px-4 py-1 rounded-2xl text-white shadow-sm' >pink</button>
          </div>
        </div>
      </div>
    
  )
}

export default App
