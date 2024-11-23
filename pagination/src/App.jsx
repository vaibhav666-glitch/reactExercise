import { useEffect, useState } from "react"
import Pagination from "./component/Pagination";

function App() { 
const [data,setData]=useState([]);

  useEffect(()=>{
    const fetchApi= async ()=>{
      const response= await fetch("https://jsonplaceholder.typicode.com/posts");
      setData(await response.json());
     // console.log(data);

     
    }
    fetchApi();
  },[])


  return (
    <>
    <div className="bg-blue-400">Hellow</div>
    <Pagination data={data}/>
    </>
  )
}

export default App
