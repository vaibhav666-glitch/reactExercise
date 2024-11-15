import { useEffect, useState } from 'react'
import './index.css'
function App() {
  const [time,setTime]=useState(1)
  const [pattern,setPattern]=useState('static');

  const [animationStyle,setAnimationStyle]=useState({});

 
  useEffect(()=>{
   
    const duration=1000*time
    if (pattern === 'fading') {
      setAnimationStyle({
        animation: `fade ${duration}ms infinite`,
      });
    } else if (pattern === 'throbbing') {
      setAnimationStyle({
        animation: `throb ${duration}ms infinite`,
      });
    } else {
      setAnimationStyle({});
    }
  }, [time, pattern]);

  return (
    <>
     <div className='flex justify-center items-center min-h-screen space-x-4'>
     <div
  className=" yo mx-10 w-32 h-20 bg-blue-400 "
  style={animationStyle}
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
       type="number" 
       placeholder='in second' 
       value={time}
       onChange={(e)=>setTime(e.target.value)}
       />
     </div>
    </>
  )
}

export default App
