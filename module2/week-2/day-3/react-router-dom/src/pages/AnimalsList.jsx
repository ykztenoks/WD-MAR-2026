import { useState } from "react"
import { Link } from "react-router"
export default function AnimalsList({ animals }) {
  return (
    <div>
      <h1 className="text-large">Animals List</h1>
      <div>
        {animals.length &&
          animals.map((animal) => (
            <div>
              <img
                src="https://www.stfrancisanimalwelfare.co.uk/wp-content/uploads/placeholder-logo-3-300x300.png"
                alt=""
              />
              <Link to={`/animals/${animal.name.toLowerCase()}`}>
                <h3>{animal.name}</h3>
              </Link>
            </div>
          ))}
      </div>
    </div>
  )
}
