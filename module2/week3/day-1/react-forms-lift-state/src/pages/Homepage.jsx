import { Link } from "react-router"
export default function Homepage({ users, isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? (
        <h2>Welcome back!</h2>
      ) : (
        <h2>
          Welcome!
          <Link to="/login" className="hover:text-blue-600">
            {" "}
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
