import { FaTimes } from "react-icons/fa"

const FormRecipeModal = ({mode,closeModal,isOpen,selectedRecipe,handleSave}) => {
  return (
    <div className={`fixed inset-0 bg-primary-100 bg-opacity-60 flex justify-center items-center z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="bg-[#d6efd846] backdrop-blur-sm p-6 rounded-lg w-auto  shadow-lg transform transition-all duration-300 ease-in-out">
       <div className="flex-between mb-5">
        <h2 className="text-left text-3xl font-bold ">{mode === "edit" ? "Edit Recipe" : "Add Recipe"}</h2>
    <FaTimes className="text-2xl cursor-pointer hover:text-secondary" onClick={closeModal} />
       </div>
       <div className="">
        <form className="">
          
          <div className="flex flex-col lg:flex-row gap-4">


          <div className=" space-2">
            <label className="block text-md font-medium text-black" htmlFor="title">Title</label>
            <input type="text" id="title" name="title" placeholder="Title of Your Recipe" className="placeholder-secondary border-2 bg-transparent text-black border-secondary rounded-md py-2 px-3 focus:outline-none focus:border-primary" required />
          </div>
          <div className=" space-2">
            <label className="block text-md font-medium text-black" htmlFor="title">Title</label>
            <input type="text" id="title" name="title" placeholder="Title of Your Recipe" className="placeholder-secondary border-2 bg-transparent text-black border-secondary rounded-md py-2 px-3 focus:outline-none focus:border-primary" required />
          </div>


          </div>
        </form>
       </div>
      </div>
    </div>
  )
}

export default FormRecipeModal