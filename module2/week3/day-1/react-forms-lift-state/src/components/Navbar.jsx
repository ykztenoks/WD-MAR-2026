import { Link } from "react-router"
export default function Navbar({ isLoggedIn, setIsLoggedIn }) {
  return (
    <nav className=" flex justify-evenly items-center border-blue-900 border-b-2  w-[98vw] h-16  ">
      <Link to="/" className="bg-gray-400 p-3 rounded-md hover:bg-gray-800">
        Home
      </Link>
      {isLoggedIn ? (
        <span
          onClick={() => setIsLoggedIn(false)}
          className="bg-gray-400 p-3 rounded-md hover:bg-gray-800"
        >
          Logout
        </span>
      ) : (
        <Link
          to="/login"
          className="bg-gray-400 p-3 rounded-md hover:bg-gray-800"
        >
          Login
        </Link>
      )}
    </nav>
  )
}
