import { Route, Routes } from "react-router"
import Homepage from "./pages/Homepage"
import CoffeeRecipes from "./pages/CoffeeRecipes"
import CreatePage from "./pages/CreatePage"
import RecipeDetails from "./pages/RecipeDetails"
import NotFound from "./pages/NotFound"
import Navbar from "./components/Navbar"
import axios from "axios"
import { useState, useEffect } from "react"

const api = axios.create({
  baseURL: "http://localhost:8080",
})

function App() {
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(true)
  const getRecipes = async () => {
    try {
      const response = await api.get("/coffees")
      setRecipes(response.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getRecipes()
  }, [])
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/recipes"
          element={<CoffeeRecipes loading={loading} recipes={recipes} />}
        />
        <Route
          path="/recipes/create"
          element={<CreatePage api={api} getRecipes={getRecipes} />}
        />
        <Route
          path="/recipes/:id"
          element={<RecipeDetails api={api} getRecipes={getRecipes} />}
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
