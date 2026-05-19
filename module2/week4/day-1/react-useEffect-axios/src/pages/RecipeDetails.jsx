import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
const api = axios.create({
  baseURL: "https://api.spoonacular.com",
  headers: { "x-api-key": import.meta.env.VITE_API_KEY },
})

export default function RecipeDetails() {
  const [recipe, setRecipe] = useState({})
  const { recipeId } = useParams()

  useEffect(() => {
    const getRecipe = async () => {
      try {
        const response = await api.get(`/recipes/${recipeId}/information`)
        setRecipe(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    getRecipe()
  }, [recipeId])

  useEffect(() => {
    console.log(recipe)
  }, [recipe])
  return (
    <div>
      <h1>RecipeDetails</h1>
      {Object.keys(recipe).length ? (
        <div>
          <img src={recipe.image} alt="" />
          <h2>{recipe.title}</h2>
          <span>Health score: {recipe.healthScore}</span>
        </div>
      ) : (
        <p>loading information</p>
      )}
    </div>
  )
}
