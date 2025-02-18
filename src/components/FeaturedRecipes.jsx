
import { useState } from 'react'
import useRecipeStore from '../store/RecipeStore'
import Button from './Button'
import RecipeCard from './RecipeCard'
import Search from './Search'
import FormRecipeModal from './FormRecipeModal'

const FeaturedRecipes = () => {
  const [searchQuery,setSearchQuery] = useState('');  
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [modalMode, setModalMode] = useState('add');
  const {recipes,addRecipe,updateRecipe} = useRecipeStore();
  const filteredRecipes = recipes.filter(recipe =>
     recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     recipe.author.toLowerCase().includes(searchQuery.toLowerCase()));

     const openAddModal = () => {
      setModalOpen(true);
      setModalMode('add');
      setSelectedRecipe(null);
     }
     const openEditModal = (recipe) => {
      setModalOpen(true);
      setModalMode('edit');
      setSelectedRecipe(recipe);
     }

    const handleSave = (formData)=>{
      if(modalMode === 'add'){
        addRecipe(formData);
      }else{
        updateRecipe(selectedRecipe.id, formData);
      }
    }

  return (
    <section className='mt-10'>
        <div className="flex-hero !justify-between flex-col md:flex-row lg:flex-row gap-3 p-4 mb-5">
            <h1 className="lg:text-[40px] md:text-xl text-xl text-primary font-extrabold ">Featured Recipes</h1>
      
       

<Button onClick={openAddModal}>Add Recipe</Button>

        </div>
        <div className="flex items-center justify-center lg:justify-start">
           <Search setSearchQuery={setSearchQuery}/>
        </div>
            <ul className="mt-7 card_grid">
      { filteredRecipes.length > 0 ?  filteredRecipes.map((recipe) => (
        <RecipeCard recipe={recipe} key={recipe.id} openEditModal={() => openEditModal(recipe)} />
      )) : (
        <p className="no-results font-semibold text-2xl text-red-600">No Results Were Found! 😥</p>
        
        )}
      </ul>
{modalOpen &&(
      <FormRecipeModal 
      isOpen={modalOpen}
      closeModal={() => setModalOpen(false)}
      mode={modalMode}
      selectedRecipe={selectedRecipe}
      handleSave={handleSave}
      />

)}
  
    </section> 

  )
}
 
export default FeaturedRecipes