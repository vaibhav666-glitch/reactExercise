import { useState } from "react"

function App() {
 const [movement,setMovement]=useState({x:0,y:0});

 const handleMouse=(event)=>{
  setMovement({x:event.clientX,y:event.clientY})
 }

  return (
    <>
       <div
      className="w-screen h-screen bg-gray-100 "
      onMouseMove={handleMouse}>
      
      <div
        className="w-10 h-10 bg-blue-500 rounded-full fixed "
        style={{
          bottom: movement.y , // Center the circle
          right: movement.x , // Center the circle
        }}
        ></div>
      </div>
    </>
  )
}

export default App
