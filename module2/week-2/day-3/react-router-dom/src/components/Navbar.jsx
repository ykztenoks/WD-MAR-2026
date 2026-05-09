import { Link } from "react-router"

export default function Navbar() {
  return (
    <nav className="w-screen flex justify-evenly items-center bg-amber-950 h-[8vh]">
      <Link to="/">
        {" "}
        <img
          src="https://www.stfrancisanimalwelfare.co.uk/wp-content/uploads/placeholder-logo-3-300x300.png"
          alt="logo"
          className="w-12"
        />
      </Link>

      <Link
        to="/"
        className="border rounded-xl p-2 hover:bg-amber-600 transition-all ease-in-out "
      >
        Home
      </Link>
      <Link
        to="/animals"
        className="border rounded-xl p-2  hover:bg-amber-600 transition-all ease-in-out "
      >
        Animals List
      </Link>
    </nav>
  )
}
