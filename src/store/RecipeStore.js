import { create } from "zustand";
import Initialrecipes from "../lib/data";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const loadRecipe = () => {
    const storedRecipes = localStorage.getItem('recipes');
    return storedRecipes ? JSON.parse(storedRecipes) : Initialrecipes;
}



const useRecipeStore = create((set)=>({
    recipes: loadRecipe(),
   

    addRecipe: (recipe) => 
        set((state)=> {
            const newRecipes = [...state.recipes,{id: state.recipes.length + 1, ...recipe}]
            localStorage.setItem('recipes', JSON.stringify(newRecipes))
            return {recipes: newRecipes}
        }),

        updateRecipe: (id, updatedRecipe) => 
        set((state) => {
        
            const updatedRecipes = state.recipes.map((recipe)=> 
            recipe.id === id ? {...recipe, ...updatedRecipe} : recipe
            )

            localStorage.setItem('recipes', JSON.stringify(updatedRecipes))
            return {recipes: updatedRecipes}
        }),

        deleteRecipe: (id) =>
        set((state) => {
            const updatedRecipes = state.recipes.filter((recipe) => recipe.id !== id);
            localStorage.setItem('recipes', JSON.stringify(updatedRecipes))
            return {recipes: updatedRecipes}
        }),

}));


export default useRecipeStore;

export const ConfirmationDialog = ({
    title = "Are you sure?",
    text = "You won't be able to revert this!",
    icon = "warning",
    confirmButtonText = "Yes",
    cancelButtonText = "No",
    successText = "Success!",
    cancelText = "Cancelled!",
    onConfirm, // Function to execute when confirmed
  }) => {
    Swal.fire({
      title,
      text,
      icon,
      showCancelButton: true,
      confirmButtonText,
      cancelButtonText,
      reverseButtons: true,
      customClass: {
        popup: "rounded-xl shadow-lg",
        title: "text-xl font-semibold",
        confirmButton: "bg-red-600 text-white px-4 py-2 rounded",
        cancelButton: "bg-gray-300 text-black px-4 py-2 rounded",
      },
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        if (onConfirm) onConfirm(); // Execute the function passed in props
        toast.success(successText);
      } else {
        toast.error(cancelText);
      }
    });
  };