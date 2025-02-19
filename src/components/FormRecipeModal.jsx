import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const FormRecipeModal = ({
  mode,
  closeModal,
  isOpen,
  selectedRecipe,
  handleSave,
}) => {
  const [formData, setFormData] = useState({
    title: selectedRecipe?.title || "",
    description: selectedRecipe?.description || "",
    author: selectedRecipe?.author || "",
    authorImage: selectedRecipe?.authorImage || "",
    image: selectedRecipe?.image || "",
    category: selectedRecipe?.category || "",
    ingredients: selectedRecipe?.ingredients || [],
    instructions: selectedRecipe?.instructions || "",
  });

  if (!isOpen) {
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave(formData);
    closeModal();
  };

  
  const handleChange = (e) => {
    const { name, value,  } = e.target;
  
    if (name === "ingredients") {
      setFormData({
        ...formData,
        ingredients: value.split(/[\n,]+/).map((item) => item.trim()),
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  
  
  return (
    <div
      className={`fixed inset-0 bg-primary-100 bg-opacity-60 flex justify-center items-center z-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={closeModal}
    >
      <div
        className="bg-bg m-5 p-6 rounded-lg w-full max-w-md h-full max-h-[70dvh] overflow-y-scroll   shadow-lg transform transition-all duration-300 ease-in-out"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex-between mb-5">
          <h2 className="text-left text-3xl font-bold ">
            {mode === "edit" ? "Edit Recipe" : "Add Recipe"}
          </h2>
          <FaTimes
            className="text-2xl cursor-pointer hover:text-secondary"
            onClick={closeModal}
          />
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col  gap-4">
              <div className=" space-2">
                <label
                  className="block text-md font-medium text-black"
                  htmlFor="title"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Title of Your Recipe"
                  className="placeholder-secondary border-2 bg-transparent text-black border-secondary rounded-md py-2 px-3 focus:outline-none focus:border-primary w-full"
                  required
                />
              </div>
              <div className=" space-2">
                <label
                  className="block text-md font-medium text-black"
                  htmlFor="description"
                >
                  Description
                </label>
                <textarea
                  type="text"
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Recipe Description"
                  className="placeholder-secondary border-2 bg-transparent text-black border-secondary rounded-md py-2 px-3 focus:outline-none focus:border-primary w-full"
                  required
                />
              </div>
              <div className=" space-2">
                <label
                  className="block text-md font-medium text-black"
                  htmlFor="instructions"
                >
                  Recipe Instructions
                </label>
                <textarea
                  type="text"
                  id="instructions"
                  name="instructions"
                  value={formData.instructions}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Recipe Instructions"
                  className="placeholder-secondary border-2 bg-transparent text-black border-secondary rounded-md py-2 px-3 focus:outline-none focus:border-primary w-full"
                  required
                />
              </div>

              <div className=" space-2">
                <label
                  className="block text-md font-medium text-black"
                  htmlFor="ingredients"
                >
                  Recipe Ingredients{" "}
                  <small>(separated by commas and new lines)</small>
                </label>
                <textarea
                  type="text"
                  id="ingredients"
                  name="ingredients"
                  value={formData.ingredients}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Recipe Ingredients (separated by commas and new lines)"
                  className="placeholder-secondary border-2 bg-transparent text-black border-secondary rounded-md py-2 px-3 focus:outline-none focus:border-primary w-full"
                  required
                />
              </div>

              <div className=" space-2">
                <label
                  className="block text-md font-medium text-black"
                  htmlFor="image"
                >
                  Image
                </label>
                <input
                  type="text"
                  id="image"
                  value={formData.image}
                  onChange={handleChange}
                  name="image"
                  placeholder="Recipe Image"
                  className="placeholder-secondary border-2 bg-transparent text-black border-secondary rounded-md py-2 px-3 focus:outline-none focus:border-primary w-full"
                  required
                />
              </div>

              <div className=" space-2">
                <label
                  className="block text-md font-medium text-black"
                  htmlFor="category"
                >
                  Category
                </label>
                <input
                  type="text"
                  id="category"
                  value={formData.category}
                  onChange={handleChange}
                  name="category"
                  placeholder=" eg: Lunch,Dinner,Breakfast etc.."
                  className="placeholder-secondary border-2 bg-transparent text-black border-secondary rounded-md py-2 px-3 focus:outline-none focus:border-primary w-full"
                  required
                />
               
              </div>

              <h2 className="text-left text-xl font-bold ">
                Author Details :{" "}
              </h2>

              <div className=" space-2">
                <label
                  className="block text-md font-medium text-black"
                  htmlFor="author"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="author"
                  value={formData.author}
                  onChange={handleChange}
                  name="author"
                  placeholder="Your Name"
                  className="placeholder-secondary border-2 bg-transparent text-black border-secondary rounded-md py-2 px-3 focus:outline-none focus:border-primary w-full"
                  required
                />
              </div>

              <div className=" space-2">
                <label
                  className="block text-md font-medium text-black"
                  htmlFor="authorImage"
                >
                  {" "}
                  Your Image <small>(optional)</small>
                </label>
                <input
                  type="text"
                  id="authorImage"
                  name="authorImage"
                  value={formData.authorImage}
                  onChange={handleChange}
                  placeholder="Your  Image"
                  className="placeholder-secondary border-2 bg-transparent text-black border-secondary rounded-md py-2 px-3 focus:outline-none focus:border-primary w-full"
                />
              </div>
              <div className="flex-between">
                <button
                  type="submit"
                  className=" px-4 py-2 bg-primary text-white rounded-full hover:bg-secondary hover:transform hover:scale-105 transition duration-300 "
                >
                  {mode === "edit" ? "Save Changes" : "Add Recipe"}
                </button>
                <button
                  type="submit"
                  className=" px-8 py-2 bg-red-700 text-white rounded-full hover:bg-red-800 hover:transform hover:scale-105 transition duration-300 "
                  onClick={closeModal}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormRecipeModal;
