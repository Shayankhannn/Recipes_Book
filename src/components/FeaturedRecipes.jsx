
import { useState } from 'react'
import useRecipeStore, { ConfirmationDialog } from '../store/RecipeStore'
import Button from './Button'
import RecipeCard from './RecipeCard'
import Search from './Search'
import FormRecipeModal from './FormRecipeModal'
import { formatDate } from '../lib/data'
import DetailRecipeModal from './DetailRecipeModal'


const FeaturedRecipes = () => {
  const [searchQuery,setSearchQuery] = useState('');  
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [modalMode, setModalMode] = useState('add');
  // const [views, setViews] = useState(selectedRecipe?.views || 1);
  const [openDetailModal, setOpenDetailModal] = useState(false);
  const {recipes,addRecipe,updateRecipe,deleteRecipe} = useRecipeStore();
  
  const defaultRecipeImage = "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg";
  const defaultAuthorImage = "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg";

  

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
      setOpenDetailModal(false);
     }
     
    

    const handleSave = (formData)=>{
      
      const updatedFormData = {
        ...formData,
        date:  formatDate(new Date()), 
        
        
      };
      
      ConfirmationDialog({
        title: `${modalMode === 'add' ? 'Add' : 'Update'} Recipe?`,
        text: "This action cannot be undone!",
        icon: `${modalMode === 'add' ? 'info' : 'warning'}`,
        ToastsuccessText: `${modalMode === 'add' ? 'Recipe Added!' : 'Recipe Updated!'}`,
        ToastcancelText: `${modalMode === 'add' ? 'Addition cancelled!' : 'Update cancelled!'}`,
        confirmButtonText: `${modalMode === 'add' ? 'Yes, Add it!' : 'Yes, Update it!'}`,
        cancelButtonText: "Cancel",
        onConfirm: () => {
          if(modalMode === 'add'){
           
           
            
            addRecipe(updatedFormData);
          }else{
            updateRecipe(selectedRecipe.id, updatedFormData);
          }
       
        },
      });

    };

    const handleDelete = (id) => {

      ConfirmationDialog({
        title: "Delete Recipe?",
        text: "This action cannot be undone!",
        icon: "warning",
        ToastsuccessText: "Recipe Deleted!",
        ToastcancelText: "Deletion cancelled!",
        confirmButtonText: "Yes, Delete it!",
        cancelButtonText: "No, Keep it",
        onConfirm: () => {
          deleteRecipe(id);
          setOpenDetailModal(false);
        },
      });
      
    };
    

    const handleDetailModal = (recipe) => {
      const updatedViews = (recipe.views || 0) + 1;
      updateRecipe(recipe.id, { ...recipe, views: updatedViews });
      // setSelectedRecipe(recipe);
      setSelectedRecipe((prev) => ({ ...prev, ...recipe, views: updatedViews }));
      setOpenDetailModal(true);
      
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
        <RecipeCard recipe={recipe} key={recipe.id} handleDetailModal={() => handleDetailModal(recipe)} defaultRecipeImage={defaultRecipeImage} defaultAuthorImage={defaultAuthorImage}  />
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


{openDetailModal && (
  <DetailRecipeModal 
  isOpen={openDetailModal}
  closeModal={() => setOpenDetailModal(false)}
  recipe={selectedRecipe}
  openEditModal={() => openEditModal(selectedRecipe)} 
  defaultRecipeImage={defaultRecipeImage}
   defaultAuthorImage={defaultAuthorImage} 
   handleDelete={() => handleDelete(selectedRecipe.id)}
  />
) }
  
    </section> 

  )
}
 
export default FeaturedRecipes