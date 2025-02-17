
import useRecipeStore from '../store/RecipeStore'
import Button from './Button'

const FeaturedRecipes = () => {
    const {recipes} = useRecipeStore()
  return (
    <section className='mt-10'>
        <div className="flex-hero !justify-between flex-col md:flex-row lg:flex-row gap-3 p-4 mb-5">
            <h1 className="lg:text-[40px] md:text-xl text-xl text-gray-700 font-extrabold ">Featured Recipes</h1>
      
       
            {/* <button className="shadow-[inset_0_0_0_2px_#616467] text-black px-5 py-2  lg:py-3 lg:px-10 md:py-3 md:px-10  tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
  Add Recipes
</button> */}

{/* <button className="relative px-6 py-3 text-lg font-bold text-white border-2 border-primary rounded-lg shadow-lg bg-black hover:bg-primary hover:text-black transition-all duration-300 ease-in-out">
  Add Recipe
  <span className="absolute inset-0 w-full h-full bg-primary opacity-25 blur-xl animate-pulse"></span>
</button> */}
<Button onClick={() => {}}>Add Recipe</Button>

        </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8 gap-5">
              {recipes && }
            </div>

    </section> 
  )
}
 
export default FeaturedRecipes