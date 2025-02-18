import { create } from "zustand";
import Initialrecipes from "../lib/data";

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