import CreateRecipeForm from "../components/CreateRecipeForm"

export default function CreatePage({ api, getRecipes }) {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh]">
      <h2>Create a new recipe!</h2>

      <CreateRecipeForm api={api} getRecipes={getRecipes} />
    </div>
  )
}
