import { useParams, Link } from "react-router"
import { useState, useEffect } from "react"
import Loading from "../components/Loading"
import { useNavigate } from "react-router"
export default function RecipeDetails({ api, getRecipes }) {
  const { id } = useParams()
  const [recipe, setRecipe] = useState({})
  const [loading, setLoading] = useState(true)
  const [isUpdating, setIsUpdating] = useState(false)
  const [editedRecipe, setEditedRecipe] = useState({})
  const navigate = useNavigate()
  useEffect(() => {
    const getRecipe = async () => {
      try {
        const response = await api.get(`/coffees/${id}`)
        console.log(response.data)
        setRecipe(response.data)
        setEditedRecipe(response.data)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    getRecipe()
  }, [id])

  const handleModal = () => {
    setIsUpdating(!isUpdating)
  }

  const handleChange = (e) => {
    setEditedRecipe((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await api.put(`/coffees/${id}`, editedRecipe)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  const handleDelete = async () => {
    const confirmed = confirm("Are you sure you want to delete?")
    try {
      if (confirmed) {
        const response = await api.delete(`/coffees/${id}`)
        if (response.status === 200) {
          getRecipes()
          navigate("/recipes")
        }
      }
      return
    } catch (error) {
      console.log(error)
    }
  }
  return loading ? (
    <div className=" bg-slate-900 flex justify-center items-center h-screen">
      <Loading />
    </div>
  ) : (
    <div className="bg-slate-900 flex justify-center items-center h-screen gap-12 flex-col">
      <div className="flex justify-center items-center gap-4">
        <img
          src={recipe.image}
          alt="recipeImg"
          className="w-[40vw] h-[30vh] object-cover"
        />
        <div>
          <h2 className="text-3xl font-bold">{recipe.recipeName}</h2>
          <p>{recipe.servings} servings</p>
          <ul className="flex flex-col">
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient} </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex gap-4 flex-col">
        <div>
          <Link to={-1}>
            <button className="p-4 bg-amber-600 rounded-md hover:text-amber-900 h-14">
              Back
            </button>
          </Link>

          <button
            onClick={handleModal}
            className="p-4 bg-amber-600 rounded-md hover:text-amber-900 h-14"
          >
            Update
          </button>
          <button
            onClick={handleDelete}
            className="p-4 bg-amber-600 rounded-md hover:text-amber-900 h-14"
          >
            Delete
          </button>
        </div>

        {isUpdating && (
          <div>
            <form
              className="flex flex-col w-[50vw] gap-4"
              onSubmit={handleSubmit}
            >
              <label htmlFor="recipeName">Recipe name</label>
              <input
                type="text"
                name="recipeName"
                value={editedRecipe.recipeName}
                onChange={handleChange}
                className="input"
              />
              <label htmlFor="image" name="image">
                Image URL
              </label>
              <input
                type="text"
                name="image"
                value={editedRecipe.image}
                onChange={handleChange}
                className="input"
              />
              <label htmlFor="servings" name="servings">
                Servings
              </label>
              <input
                type="number"
                name="servings"
                value={editedRecipe.servings}
                onChange={handleChange}
                className="input"
              />
              <label htmlFor="ingredients" name="ingredients">
                Ingredients list
              </label>
              {editedRecipe.ingredients.map((ingredient, i) => (
                <input
                  key={i}
                  type="text"
                  name={ingredient}
                  value={ingredient}
                  className="input"
                  // onChange={(e) => handleIngredients(e, i)}
                />
              ))}
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="p-4 py-8 bg-amber-600 rounded-md hover:text-amber-900 h-14 w-28"
                >
                  Submit changes
                </button>
                <button
                  onClick={handleModal}
                  className="p-4 bg-amber-600 rounded-md hover:text-amber-900 h-14 w-28"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
