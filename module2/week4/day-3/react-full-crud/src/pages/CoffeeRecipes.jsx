import { Link } from "react-router"
import Loading from "../components/Loading"

export default function CoffeeRecipes({ recipes, loading }) {
  return loading ? (
    <div className="w-screen h-screen flex items-center justify-center">
      <Loading />
    </div>
  ) : (
    <div className="flex flex-wrap justify-center gap-4">
      {recipes.map((recipe) => (
        <Link to={`/recipes/${recipe.id}`}>
          <div className="flex flex-col">
            <img
              src={recipe.image}
              alt="recipeImg"
              className="w-[20vw] h-[30vh] object-cover"
            />
            <h2>{recipe.recipeName}</h2>
            <span>{recipe.servings}</span>

            {/* {recipe.ingredients.map((ingredient) => (
              <div>
                <h3>{ingredient}</h3>
              </div>
            ))} */}
          </div>
        </Link>
      ))}
    </div>
  )
}
