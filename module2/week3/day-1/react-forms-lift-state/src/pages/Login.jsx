import { useState } from "react"
import { useNavigate } from "react-router"
export default function Login({ setUsers, setIsLoggedIn }) {
  //   const [name, setName] = useState("")
  //   const [email, setEmail] = useState("")
  //   const [password, setPassword] = useState("")

  const navigate = useNavigate()
  const [validPass, setValidPass] = useState(false)
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    setNewUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))

    if (
      newUser.password.match(
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$",
      )
    ) {
      setValidPass(true)
    } else {
      setValidPass(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setUsers((prev) => [...prev, newUser])
    setIsLoggedIn(true)
    navigate("/")
  }

  return (
    <div>
      <h1 className="text-2xl py-4 self-center">Welcome back, login here 🖥️</h1>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          name="name"
          type="text"
          className="text-input"
          placeholder="Type your name"
          value={newUser.name}
          onChange={handleChange}
          //   value={name}
          //   onChange={(event) => setName(event.target.value)}
        />

        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="text"
          className="text-input"
          placeholder="Type your email"
          value={newUser.email}
          onChange={handleChange}
          //   value={email}
          //   onChange={(event) => setEmail(event.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="text"
          className={`text-input`}
          placeholder="Type your password"
          value={newUser.password}
          onChange={handleChange}

          //   value={password}
          //   onChange={(event) => setPassword(event.target.value)}
        />
        {validPass ? <span>✅</span> : <span>❌</span>}
        <button
          type="submit"
          className="py-4 border rounded-sm bg-blue-300 hover:bg-blue-900 w-[50%] self-center"
        >
          Login
        </button>
      </form>
    </div>
  )
}
