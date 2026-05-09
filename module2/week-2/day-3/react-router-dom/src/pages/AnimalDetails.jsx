import { useParams } from "react-router"
import { useState } from "react"
export default function AnimalDetails({ animals }) {
  const { name } = useParams()
  const [animal, setAnimal] = useState(
    animals.find((animal) => animal.name.toLowerCase() === name),
  )
  console.log(animal)
  return (
    <div>
      Animal details
      <br />
      <h3>{animal.name}</h3>
      <span>{animal.species}</span>
      <p>{animal.description}</p>
    </div>
  )
}
