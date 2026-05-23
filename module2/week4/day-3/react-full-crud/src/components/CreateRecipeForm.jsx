import { useEffect, useState } from "react"
import { v4 as uuid } from "uuid"
import { useNavigate } from "react-router"

export default function CreateRecipeForm({ api, getRecipes }) {
  const [newRecipe, setNewRecipe] = useState({
    recipeName: "",
    image: "",
    servings: 0,
    ingredients: ["", "", "", ""],
  })
  const navigate = useNavigate()

  const handleChange = (e) => {
    setNewRecipe((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleIngredients = (e, i) => {
    const ingredientArr = [...newRecipe.ingredients]
    ingredientArr[i] = e.target.value
    setNewRecipe((prev) => ({ ...prev, ingredients: ingredientArr }))
  }

  const handleDeleteIngredient = (i) => {
    const ingredientArr = [...newRecipe.ingredients]
    ingredientArr.splice(i, 1)
    setNewRecipe((prev) => ({ ...prev, ingredients: ingredientArr }))
  }
  const handleAddIngredient = () => {
    setNewRecipe((prev) => ({
      ...prev,
      ingredients: [...prev.ingredients, ""],
    }))
  }

  useEffect(() => {
    console.log(newRecipe)
  }, [newRecipe])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await api.post("/coffees", { ...newRecipe, id: uuid() })

      if (response.status === 201 || response.status === 200) {
        getRecipes()
        navigate("/recipes")
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label htmlFor="recipeName">Recipe name</label>
        <input
          type="text"
          name="recipeName"
          value={newRecipe.recipeName}
          onChange={handleChange}
          className="create-input"
        />
        <label htmlFor="image" name="image">
          Image URL
        </label>
        <input
          type="text"
          name="image"
          value={newRecipe.image}
          onChange={handleChange}
          className="create-input"
        />
        <label htmlFor="servings" name="servings">
          Servings
        </label>
        <input
          type="number"
          name="servings"
          value={newRecipe.servings}
          onChange={handleChange}
          className="create-input"
        />
        <label htmlFor="ingredients" name="ingredients">
          Ingredients list
        </label>
        {newRecipe.ingredients.map((ingredient, i) => (
          <div className="flex" key={i}>
            <input
              type="text"
              className="create-input"
              onChange={(e) => handleIngredients(e, i)}
            />
            <button type="button" onClick={() => handleDeleteIngredient(i)}>
              🗑️
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAddIngredient}>
          add ingredient
        </button>
        <div className="flex gap-4">
          <button
            type="submit"
            className="p-4 py-8 bg-amber-600 rounded-md hover:text-amber-900 h-14 w-28"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  )
}
