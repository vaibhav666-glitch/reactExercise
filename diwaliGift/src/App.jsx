import { useState } from "react"
function App() {
const [val,setVal]=useState('')
const [result,setResult]=useState([]);
const giftArr=["candles","crackers","chocolates","flowers","dress"];
const handleAdd=()=>{
  if(val!='')
  setResult((prev)=>(
   [...prev,{[val]:"Not Assigned"}] 
  ))
  setVal('')
}

const handleRemove=(ind)=>{
  setResult((prev)=>
    prev.filter((val,index)=>index!=ind)
  ) 
}
const handleGift=()=>{
 let randomGift=giftArr[Math.floor(Math.random()*giftArr.length)];
//console.log(randomGift);
 return randomGift;
}

const assignGift=()=>{
  
 setResult((prev)=>
  prev.map((item)=>
    {
      const key=Object.keys(item)[0];
      return item[key]==="Not Assigned"
      ?{[key]:handleGift()}:item }))
 
}

const shuffleGift=()=>{
  setResult(result.map((item)=>
  {
    const key=Object.keys(item)[0];
    return item[key]!=="Not Assigned" ?{[key]:handleGift()}:item;
  }
  ))
}
const reset=()=>{
  setResult(result.map((item)=>
  {
    const key=Object.keys(item)[0];
    return {[key]:"Not Assigned"};
  }
  ))
}



  return (
    <>
    <div className="flex flex-col items-center justify-center h-screen">
     <h1 className='font-bold m-2 text-2xl'>Diwali Gift Exchange </h1>
     <div className="flex m-2 ">
      <input type="text" 
      className="border border-black m-2"
      value={val}
      onChange={(e)=>setVal(e.target.value)}/>
      <button
      className="m-2 border border-black font-medium"
      onClick={handleAdd}
      >Send Gift</button>
  </div>
      <div className=" flex flex-col ">
        {result.map((item,index)=>(
          <ul
          className="flex space-x-3"
          key={index}>
            <li>
              {Object.keys(item)[0] }:{Object.values(item)[0]}
            </li>
            {/* <li>
              {gift?gift:"No gift assigned"}
            </li> */}
            <li>
              <button
              className="border border-black font-medium"
              onClick={()=>handleRemove(index)}
              >Remove</button>
            </li>
          </ul>
       
        ))}
      </div>
      {result.length!==0?<div className="flex m-2 space-x-2">
        <button 
          onClick={assignGift}
          className="border border-black font-medium">Assign Gifts</button>
        <button 
        onClick={shuffleGift}
        className="border border-black font-medium">Shuffle Gifts</button>
        <button
        onClick={reset} className="border border-black font-medium">Resets</button>
      </div>:null
      }
     </div>
    </>
  )
}

export default App
