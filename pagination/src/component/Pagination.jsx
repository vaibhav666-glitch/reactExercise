import { useState } from "react"

const Pagination=(({data})=>{
const [pageNo,setPageNo]=useState(1);


const arr= data.filter((item,index)=>((pageNo-1)*10)<=index && index<pageNo*10)
const totalPage=data.length/10;
const pageArray=Array.from({length:10},(_,index)=>index+1);
console.log(pageArray)
//console.log(arr);
    return(
        <>
        <ul>
            {
                arr.map((item,index)=>(
                    <li
                    key={index}>
                         <span>{item.id}</span> {item.title}
                    </li>
                ))
            }
        </ul>

        <footer>
            {pageArray.map((item)=>(
                <button
                key={item}
                onClick={()=>setPageNo(item)}
                className="bg-green-400 m-3 p-4"
                >{item}</button>
            ))}
        </footer>


        </>
    )
})

export default Pagination;