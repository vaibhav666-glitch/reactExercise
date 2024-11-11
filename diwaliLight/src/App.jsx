import { useEffect, useState } from 'react'

function App() {
  const [time,setTime]=useState(1)
  const [pattern,setPattern]=useState('static');

 
  useEffect(()=>{

    const intervalId = setInterval(() => {
      console.log("hello ji", time)
    },time===''?1000:time*1000)
    
    return () => clearInterval(intervalId);
  },[time])

  return (
    <>
     <div className='flex justify-center items-center min-h-screen space-x-4'>
     <div
  className={`mx-10 w-32 h-20 ${
    pattern === 'fading'
      ? 'animate-pulse '
      : pattern === 'throbbing'
      ? 'animate-bounce'
      : 'animate-none'
  } bg-blue-300`}
    >
    </div>
      <span>Pattern</span><select 
        className='bg-gray-200 p-2 rounded-md '
        name="dropdown" id="dropdown"
        onChange={(e)=>setPattern(e.target.value)}
        >
        <option value="static">Static</option>
        <option value="fading">Fading</option>
        <option value="throbbing">Throbbing</option>
        
      </select>
      <span>Interval</span><input
      className='p-2 bg-gray-100 rounded-lg'
       type="text" 
       placeholder='in second' 
       value={time}
       onChange={(e)=>setTime(e.target.value)}
       />
     </div>
    </>
  )
}

export default App
