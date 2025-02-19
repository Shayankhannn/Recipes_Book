import { FaTimes } from "react-icons/fa"

const FormRecipeModal = ({mode,closeModal,isOpen,selectedRecipe,handleSave}) => {
  return (
    <div className={`fixed inset-0 bg-primary-100 bg-opacity-60 flex justify-center items-center z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="bg-bg m-5 p-6 rounded-lg w-full max-w-md h-full max-h-[70dvh] overflow-y-scroll   shadow-lg transform transition-all duration-300 ease-in-out">
       <div className="flex-between mb-5">
        <h2 className="text-left text-3xl font-bold ">{mode === "edit" ? "Edit Recipe" : "Add Recipe"}</h2>
    <FaTimes className="text-2xl cursor-pointer hover:text-secondary" onClick={closeModal} />
       </div>
       <div className="">
        <form className="">
          
          <div className="flex flex-col  gap-4">


          <div className=" space-2">
            <label className="block text-md font-medium text-black" htmlFor="title">Title</label>
            <input type="text" id="title" name="title" placeholder="Title of Your Recipe" className="placeholder-secondary border-2 bg-transparent text-black border-secondary rounded-md py-2 px-3 focus:outline-none focus:border-primary w-full" required />
          </div>
          <div className=" space-2">
            <label className="block text-md font-medium text-black" htmlFor="description">Description</label>
            <textarea type="text" id="description" name="description" rows={4}  placeholder="Recipe Description" className="placeholder-secondary border-2 bg-transparent text-black border-secondary rounded-md py-2 px-3 focus:outline-none focus:border-primary w-full" required />
          </div>
          <div className=" space-2">
            <label className="block text-md font-medium text-black" htmlFor="instructions">Recipe Instructions</label>
            <textarea type="text" id="instructions" name="instructions" rows={4}  placeholder="Recipe Instructions" className="placeholder-secondary border-2 bg-transparent text-black border-secondary rounded-md py-2 px-3 focus:outline-none focus:border-primary w-full" required />
          </div>

          <div className=" space-2">
            <label className="block text-md font-medium text-black" htmlFor="ingredients">Recipe Ingredients <small>(separated by commas and new lines)</small></label>
            <textarea type="text" id="ingredients" name="ingredients" rows={4} placeholder="Recipe Ingredients (separated by commas and new lines)" className="placeholder-secondary border-2 bg-transparent text-black border-secondary rounded-md py-2 px-3 focus:outline-none focus:border-primary w-full" required />
          </div>

          <div className=" space-2">
            <label className="block text-md font-medium text-black" htmlFor="image">Image</label>
            <input type="file" id="image" name="image" placeholder="Recipe Image" className="placeholder-secondary border-2 bg-transparent text-black border-secondary rounded-md py-2 px-3 focus:outline-none focus:border-primary w-full" required />
          </div>

          <div className=" space-2">
            <label className="block text-md font-medium text-black" htmlFor="category">Category</label>
            
             <select name="category" id="category" className="placeholder-secondary border-2 bg-transparent text-black border-secondary rounded-md py-2 px-3 focus:outline-none focus:border-primary w-full cursor-pointer " required >
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
              <option value="snack">Snack</option>
              <option value="Dessert">Dessert</option>

             </select>
          </div>

            <h2 className="text-left text-xl font-bold ">Author Details : </h2>

            <div className=" space-2">
            <label className="block text-md font-medium text-black" htmlFor="author">Your Name</label>
            <input type="text" id="author" name="author" placeholder="Your Name" className="placeholder-secondary border-2 bg-transparent text-black border-secondary rounded-md py-2 px-3 focus:outline-none focus:border-primary w-full" required />
          </div>

          <div className=" space-2">
            <label className="block text-md font-medium text-black" htmlFor="authorImage"> Your Image <small>(optional)</small></label>
            <input type="file" id="authorImage" name="authorImage" placeholder="Your  Image" className="placeholder-secondary border-2 bg-transparent text-black border-secondary rounded-md py-2 px-3 focus:outline-none focus:border-primary w-full"  />
          </div>

          </div>
        </form>
       </div>
      </div>
    </div>
  )
}

export default FormRecipeModal