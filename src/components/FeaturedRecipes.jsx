
import useRecipeStore from '../store/RecipeStore'

const FeaturedRecipes = () => {
    const {recipes} = useRecipeStore()
  return (
    <div className=''>
        <div className="flex-hero !justify-between p-4">
            <h1 className="text-[40px] text-black font-extrabold ">Featured Recipes</h1>
      
       
            <button className="shadow-[inset_0_0_0_2px_#616467] text-black px-12 py-3  tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
  Add Recipes
</button>

        </div>
    </div>
  )
}

export default FeaturedRecipes