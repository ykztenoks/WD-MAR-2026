import { Routes, Route } from "react-router"
import Homepage from "./pages/Homepage"
import Login from "./pages/Login"
import Navbar from "./components/Navbar"
import { useState } from "react"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [users, setUsers] = useState([
    {
      name: "Busola",
      password: "Pass123",
      email: "busola@gmail.com",
    },
    {
      name: "Eugenie",
      password: "Pass123",
      email: "eugenie@gmail.com",
    },
    {
      name: "Joaquim",
      password: "Pass123",
      email: "joaquim@gmail.com",
    },
  ])
  return (
    <div className="bg-slate-800 text-white">
      <Navbar setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
      <div className="flex justify-center items-center h-screen">
        <Routes>
          <Route
            path="/"
            element={
              <Homepage
                users={users}
                setUsers={setUsers}
                isLoggedIn={isLoggedIn}
              />
            }
          />

          <Route
            path="/login"
            element={
              <Login setUsers={setUsers} setIsLoggedIn={setIsLoggedIn} />
            }
          />
        </Routes>
      </div>
    </div>
  )
}

export default App
