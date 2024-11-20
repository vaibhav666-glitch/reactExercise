
function App() {
  let elements = Array.from({length:5},()=>Array(5));
 
  
  for (let i = 0; i < 5; i++) {
    
    for(let j=0;j<5;j++)
    {
      if(i%2===0)
      elements[j][i]=i*5+(j+1);
    
      else
      elements[j][i]=(i+1)*5-j;
   
      
    }

  }
  console.log(elements)

  return (
    <>
     <div className="flex justify-center items-center min-h-screen">
     <div className="p-10 border-red-300 border-4  ">
      <div className="flex flex-col justify-center items-center gap-4">
        {elements.map((row,index)=>
        (
          <div key={index}
            className="flex justify-center items-center gap-4"
          >
            {row.map((col,colInd)=>(
              <div 
              key={colInd}
              className="flex justify-center items-center ">
                {col}
              </div>
            ))}
          </div>
        )
        )}
       </div>
      </div>
     </div>
  
    </>
  )
}

export default App
