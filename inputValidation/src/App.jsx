import { useState } from "react"

function App() {
  const [firstName,setFirstName]=useState("");
  const [lastName,setLastName]=useState("");
  const [email,setEmail]=useState("");
  const [phNo,setPhNo]=useState("");

  const handleSubmit=()=>{
    let validation=new Promise((res,rej)=>{
     if(firstName==="")
      rej("Enter first Name")
    else if(lastName==="")
      rej("Enter Last Name")

    else if(!email.includes('@'))
      rej("Enter valid Email")

    else if(phNo.length<11)
      rej("Enter valid Number")

    else
      res("Form submitted successfully")
    })
    validation
    .then((message)=>{
      alert(message)
        
    })
    .catch((err)=>{
      alert(err);
    })
    console.log(validation)
  }

  return (
    <>
     <div className="flex  justify-center items-center min-h-screen">
      <div className="flex flex-col space-y-4">
        <label htmlFor="firstName">First Name</label>
        <input type="text"
        className="w-full px-4 py-2 border-2 border-gray-600 rounded-lg "
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        id="firstName"
        />
        <label htmlFor="lastName">Last Name</label>
        <input type="text"
         className="w-full px-4 py-2 border-2 border-gray-600 rounded-lg "
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        id="lastName"
        />
        <label htmlFor="email">Email</label>
        <input type="email"
         className="w-full px-4 py-2 border-2 border-gray-600 rounded-lg "
        value={email}

        onChange={(e) => setEmail(e.target.value)}
        id="email"
        />
        <label htmlFor="phNo">Phone No</label>
        <input type="text"
         className="w-full px-4 py-2 border-2 border-gray-600 rounded-lg "
        value={phNo}
        onChange={(e) => setPhNo(e.target.value)}
        id="phNo"
        />
        <button 
        className="border-2 rounded-xl bg-blue-500 text-white"
        onClick={handleSubmit}
        >Submit</button>
      </div>
     </div>
    </>
  )
}

export default App
