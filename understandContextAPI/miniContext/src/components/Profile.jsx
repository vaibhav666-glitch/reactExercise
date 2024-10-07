import { useContext } from "react";
import  userContext  from "../context/usercontext.js";

function Profile(){
    const { user } = useContext(userContext);
    console.log(user)
   if(!user)return <div>Please Login</div>
  
   return <div>Welcome! {user.email}</div>
}
export default Profile