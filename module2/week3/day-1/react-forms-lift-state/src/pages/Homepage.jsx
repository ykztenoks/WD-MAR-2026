import { Link } from "react-router"
export default function Homepage({ users, isLoggedIn }) {
  const getUsers = async () => {
    try {
      const response = await fetch("https://dummyjson.com/users")
      const formatted = await response.json()

      console.log(formatted)
    } catch (error) {
      console.log(error)
    }
  }

  getUsers()
  return (
    <div>
      {isLoggedIn ? (
        <h2>Welcome back!</h2>
      ) : (
        <h2>
          Welcome!
          <Link to="/login" className="hover:text-blue-600">
            Login here
          </Link>
        </h2>
      )}

      {users.map((user) => (
        <div key={user.email}>
          <h1>{user.name}</h1>
        </div>
      ))}
    </div>
  )
}
