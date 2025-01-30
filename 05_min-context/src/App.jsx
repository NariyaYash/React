import DisplayComponent from "./context/Components/DisplayComponent"
import Login from "./context/Components/Login"
import UserContextProvider from "./context/userContextProvider"

function App() {
  return (
    <UserContextProvider>
      <Login/>
      <DisplayComponent/>
    </UserContextProvider>
  )
}

export default App
