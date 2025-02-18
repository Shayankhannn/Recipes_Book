
import { useState } from 'react'
import useRecipeStore from '../store/RecipeStore'
import Button from './Button'
import RecipeCard from './RecipeCard'
import Search from './Search'

const FeaturedRecipes = () => {
  const [searchQuery,setSearchQuery] = useState('');  
  const {recipes} = useRecipeStore();
  const filteredRecipes = recipes.filter(recipe =>
     recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     recipe.author.toLowerCase().includes(searchQuery.toLowerCase())
    
    );


  return (
    <section className='mt-10'>
        <div className="flex-hero !justify-between flex-col md:flex-row lg:flex-row gap-3 p-4 mb-5">
            <h1 className="lg:text-[40px] md:text-xl text-xl text-primary font-extrabold ">Featured Recipes</h1>
      
       

<Button onClick={() => {}}>Add Recipe</Button>

        </div>
        <div className="flex items-center justify-center lg:justify-start">
           <Search setSearchQuery={setSearchQuery}/>
        </div>
            <ul className="mt-7 card_grid">
      { filteredRecipes.length > 0 ?  filteredRecipes.map((recipe) => (
        <RecipeCard recipe={recipe} key={recipe.id} />
      )) : (
        <p className="no-results font-semibold text-2xl text-red-600">No Results Were Found! 😥</p>
        
        )}
      </ul>
    </section> 
  )
}
 
export default FeaturedRecipes