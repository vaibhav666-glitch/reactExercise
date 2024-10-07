import Login from "./components/Login.jsx"
import Profile from "./components/profile.jsx"
import ContextProvider from "./context/userContext.jsx"

function App() {
  

  return (
    <ContextProvider>
    <Login/>
    <Profile/>
    </ContextProvider>
  )
}

export default App
