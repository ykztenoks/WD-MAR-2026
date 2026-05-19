import { Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import RecipeDetails from "./pages/RecipeDetails"

function App() {
  // RUNS ON EVERY RENDER
  // useEffect(() => {
  //   const getTest = async () => {
  //     try {
  //       const response = await axios.get("https://dummyjson.com/test")
  //       console.log(response)
  //       setTest(response.data.status)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   getTest()
  // })

  return (
    <>
      <Routes>
        <Route path="/recipes" element={<Homepage />} />
        <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
      </Routes>
    </>
  )
}

export default App
