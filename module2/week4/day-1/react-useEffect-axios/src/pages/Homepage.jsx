import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router"
const api = axios.create({
  baseURL: "https://api.spoonacular.com",
  headers: { "x-api-key": import.meta.env.VITE_API_KEY },
})
function Homepage() {
  const [recipes, setRecipes] = useState([])
  useEffect(() => {
    //   // axios.get().then().catch(err)
    const getTest = async () => {
      try {
        const response = await api.get("/recipes/complexSearch")
        setRecipes(response.data.results)
      } catch (error) {
        console.log(error)
      }
    }
    getTest()
  }, [])
  useEffect(() => {
    console.log("test changed! 💥", recipes)
  }, [recipes])
  return (
    <div>
      {recipes.length ? (
        <div>
          {recipes.map((element) => (
            <div key={element.id}>
              <Link to={`/recipes/${element.id}`}>
                <img src={element.image} alt="recipe img" />
                <h2>{element.title}</h2>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p>No recipes yet.</p>
        </div>
      )}
    </div>
  )
}

export default Homepage
