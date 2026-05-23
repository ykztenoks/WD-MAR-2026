import { Link } from "react-router"

export default function Navbar() {
  return (
    <nav className="w-screen flex justify-evenly items-center bg-slate-900 h-[5vh]">
      <Link
        to={"/"}
        className=" hover:text-amber-700 ease-in-out transition-all"
      >
        Home
      </Link>
      <Link
        to={"/recipes/create"}
        className=" hover:text-amber-700 ease-in-out transition-all"
      >
        Create
      </Link>
      <Link
        to={"/recipes"}
        className=" hover:text-amber-700 ease-in-out transition-all"
      >
        Recipes
      </Link>
    </nav>
  )
}
