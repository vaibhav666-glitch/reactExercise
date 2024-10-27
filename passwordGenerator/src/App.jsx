import { useCallback, useState,useEffect,useRef } from 'react'


function App() {
  const[length,setLength]=useState(8);
  const[numberAllowed,setNumberAllowed]=useState(false);
  const[charAllowed,setCharAllowed]=useState(false);
  const[password,setPassword]=useState("");

  //useRef hook
  const passwordRef=useRef(null)

  const passwordGenerator= useCallback(()=>{
    let pass="";
    let str="QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
    if(numberAllowed)
      str+="0123456789"
    if(charAllowed)
      str+="!@#$%^&*"
    for(let i=1;i<=length;i++){
      pass+=str.charAt(Math.floor(Math.random()*str.length+1));
    }
    setPassword(pass);
  },[length,numberAllowed,charAllowed,setPassword])

const copyPasswordToClipBoard=useCallback(()=>{
  passwordRef.current?.select();
  navigator.clipboard.writeText(passwordRef.current.value)
},[password])


  useEffect(()=>{passwordGenerator()},[length,numberAllowed,charAllowed,passwordGenerator])




  return (
   <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-500 text-white'>
        <h1 className='text-white text-center my-3'>
          Password Generator
        </h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input ref={passwordRef} type="text" value={password} className='outline-none w-full py-1 px-3 text-black' placeholder='Password' readOnly/>
          <button onClick={copyPasswordToClipBoard} className='outline-none bg-blue-500 px-3 py-0.5 shrink-0'>copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" 
            min={6}
            max={100}
            value={length}
            className='cursor-pointer px-3'
            onChange={(e)=>{setLength(e.target.value)}}
             />
             <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" 
          
            defaultChecked={numberAllowed}
            className='cursor-pointer px-3'
            onChange={()=>{setNumberAllowed((prev)=>!prev)}}
             />
             <label>Numbers:</label>
             
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" 
            defaultChecked={charAllowed}
            className='cursor-pointer px-3'
            onChange={()=>{setCharAllowed((prev)=>!prev)}}
             />
              <label htmlFor='CharacterInput'> Characters</label>
          </div>
        </div>
        
      </div>
   </>
  )
}

export default App
