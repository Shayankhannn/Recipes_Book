import FeaturedRecipes from "./components/FeaturedRecipes"
import Hero from "./components/Hero"


const App = () => {
  return (
    <div className="overflow-hidden">
      <Hero/>
      <FeaturedRecipes/>

    </div>
  )
}

export default App