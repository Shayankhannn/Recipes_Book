import { ToastContainer } from "react-toastify"
import FeaturedRecipes from "./components/FeaturedRecipes"
import Hero from "./components/Hero"


const App = () => {
  return (
    <div className="overflow-hidden">
      <ToastContainer />
      <Hero/>
      <FeaturedRecipes/>

    </div>
  )
}

export default App