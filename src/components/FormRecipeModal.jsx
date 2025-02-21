//  import { useState } from "react";
//  import { FaTimes } from "react-icons/fa";
//  import { motion, AnimatePresence } from "framer-motion";
//  import gsap from "gsap";
//  const FormRecipeModal = ({
//    mode,
//    closeModal,
//    isOpen,
//    selectedRecipe,
//    handleSave,
//  }) => {
//    const [formData, setFormData] = useState({
//      title: selectedRecipe?.title || "",
//      description: selectedRecipe?.description || "",
//      author: selectedRecipe?.author || "",
//      authorImage: selectedRecipe?.authorImage || "",
//      image: selectedRecipe?.image || "",
//      category: selectedRecipe?.category || "",
//      ingredients: selectedRecipe?.ingredients || [],
//      instructions: selectedRecipe?.instructions || "",
//    });

//    if (!isOpen) {
//      return null;
//    }

//    const handleSubmit = (e) => {
//      e.preventDefault();
//      handleSave(formData);
//      closeModal();
//    };

  
//    const handleChange = (e) => {
//      const { name, value,  } = e.target;
  
//      if (name === "ingredients") {
//        setFormData({
//          ...formData,
//          ingredients: value.split(/[\n,]+/).map((item) => item.trim()),
//        });
//      } else {
//        setFormData({ ...formData, [name]: value });
//      }
//    };

//    useEffect(() => {
//      if (isOpen) {
//        gsap.fromTo(
//          modalRef.current,
//          { scale: 0.5, opacity: 0, y: -50 },  Start off-screen above, smaller
//          { scale: 1, opacity: 1, y: 0, duration: 0.6, ease: "elastic.out(1, 0.5)" }  Bouncy animation
//        );
//      } else {
//        gsap.to(modalRef.current, {
//          scale: 0.5,
//          opacity: 0,
//          y: -50,
//          duration: 0.5,
//          ease: "back.in(1)",  Different exit animation
//        });
//      }
//    }, [isOpen]);
  
//    const modalVariants = {
//      hidden: { opacity: 0 },
//      visible: { opacity: 1, transition: { duration: 0.4 } },  Slightly longer transition
//      exit: { opacity: 0, transition: { duration: 0.4 } },
//    };
  

//    return (
//      <div
//        className={`fixed inset-0 bg-primary-100 bg-opacity-60 flex justify-center items-center z-50 transition-opacity duration-300 ${
//          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
//        }`}
//        onClick={closeModal}
//      >
//        <div
//          className="bg-bg m-5 p-6 rounded-lg w-full max-w-md h-full max-h-[70dvh] overflow-y-scroll   shadow-lg transform transition-all duration-300 ease-in-out"
//          onClick={(e) => e.stopPropagation()}
//        >
//          <div className="flex-between mb-5">
//            <h2 className="text-left text-3xl font-bold ">
//              {mode === "edit" ? "Edit Recipe" : "Add Recipe"}
//            </h2>
//            <FaTimes
//              className="text-2xl cursor-pointer hover:text-secondary"
//              onClick={closeModal}
//            />
//          </div>
//          <div>
//            <form onSubmit={handleSubmit}>
//              <div className="flex flex-col  gap-4">
//                <div >
//                  <label
//                    className="block text-md font-medium text-black"
//                    htmlFor="title"
//                  >
//                    Title
//                  </label>
//                  <input
//                    type="text"
//                    id="title"
//                    name="title"
//                    value={formData.title}
//                    onChange={handleChange}
//                    placeholder="Title of Your Recipe"
//                    className="border-2 border-gray-600 rounded-lg py-3 px-4 w-full bg-gray-800 text-white placeholder-white-200 focus:outline-none focus:border-indigo-500 transition duration-300"
//                    required
//                  />
//                </div>
//              <div >
//                  <label
//                    className="block text-md font-medium text-black"
//                    htmlFor="description"
//                  >
//                    Description
//                  </label>
//                  <textarea
//                    type="text"
//                    id="description"
//                    name="description"
//                    value={formData.description}
//                    onChange={handleChange}
//                    rows={4}
//                    placeholder="Recipe Description"
//                    className="border-2 border-gray-600 rounded-lg py-3 px-4 w-full bg-gray-800 text-white placeholder-white-200 focus:outline-none focus:border-indigo-500 transition duration-300"
//                    required
//                  />
//                </div>
//                <div >
//                  <label
//                    className="block text-md font-medium text-black"
//                    htmlFor="instructions"
//                  >
//                    Recipe Instructions
//                  </label>
//                  <textarea
//                    type="text"
//                    id="instructions"
//                    name="instructions"
//                    value={formData.instructions}
//                    onChange={handleChange}
//                    rows={4}
//                    placeholder="Recipe Instructions"
//                    className="border-2 border-gray-600 rounded-lg py-3 px-4 w-full bg-gray-800 text-white placeholder-white-200 focus:outline-none focus:border-indigo-500 transition duration-300"
//                    required
//                  />
//                </div>

//                <div >
//                  <label
//                    className="block text-md font-medium text-black"
//                    htmlFor="ingredients"
//                  >
//                    Recipe Ingredients{" "}
//                    <small>(separated by commas and new lines)</small>
//                  </label>
//                  <textarea
//                    type="text"
//                    id="ingredients"
//                    name="ingredients"
//                    value={formData.ingredients}
//                    onChange={handleChange}
//                    rows={4}
//                    placeholder="Recipe Ingredients (separated by commas and new lines)"
//                    className="border-2 border-gray-600 rounded-lg py-3 px-4 w-full bg-gray-800 text-white placeholder-white-200 focus:outline-none focus:border-indigo-500 transition duration-300"
//                    required
//                  />
//                </div>

//                <div >
//                  <label
//                    className="block text-md font-medium text-black"
//                    htmlFor="image"
//                  >
//                    Image
//                  </label>
//                  <input
//                    type="text"
//                    id="image"
//                    value={formData.image}
//                    onChange={handleChange}
//                    name="image"
//                    placeholder="Recipe Image"
//                    className="border-2 border-gray-600 rounded-lg py-3 px-4 w-full bg-gray-800 text-white placeholder-white-200 focus:outline-none focus:border-indigo-500 transition duration-300"
//                    required
//                  />
//                </div>

//                <div >
//                  <label
//                    className="block text-md font-medium text-black"
//                    htmlFor="category"
//                  >
//                    Category
//                  </label>
//                  <input
//                    type="text"
//                    id="category"
//                    value={formData.category}
//                    onChange={handleChange}
//                    name="category"
//                    placeholder=" eg: Lunch,Dinner,Breakfast etc.."
//                    className="border-2 border-gray-600 rounded-lg py-3 px-4 w-full bg-gray-800 text-white placeholder-white-200 focus:outline-none focus:border-indigo-500 transition duration-300"
//                    required
//                  />
               
//                </div>

//                <h2 className="text-left text-xl font-bold ">
//                  Author Details :{" "}
//                </h2>

//                <div >
//                  <label
//                    className="block text-md font-medium text-black"
//                    htmlFor="author"
//                  >
//                    Your Name
//                  </label>
//                  <input
//                    type="text"
//                    id="author"
//                    value={formData.author}
//                    onChange={handleChange}
//                    name="author"
//                    placeholder="Your Name"
//                    className="border-2 border-gray-600 rounded-lg py-3 px-4 w-full bg-gray-800 text-white placeholder-white-200 focus:outline-none focus:border-indigo-500 transition duration-300"
//                    required
//                  />
//                </div>

//                <div >
//                  <label
//                    className="block text-md font-medium text-black"
//                    htmlFor="authorImage"
//                  >
//                    {" "}
//                    Your Image <small>(optional)</small>
//                  </label>
//                  <input
//                    type="text"
//                    id="authorImage"
//                    name="authorImage"
//                    value={formData.authorImage}
//                    onChange={handleChange}
//                    placeholder="Your  Image"
//                    className="border-2 border-gray-600 rounded-lg py-3 px-4 w-full bg-gray-800 text-white placeholder-white-200 focus:outline-none focus:border-indigo-500 transition duration-300"
//                  />
//                </div>
//                <div className="flex-between">
//                  <button
//                    type="submit"
//                    className=" px-4 py-2 bg-primary text-white rounded-full hover:bg-secondary hover:transform hover:scale-105 transition duration-300 "
//                  >
//                    {mode === "edit" ? "Save Changes" : "Add Recipe"}
//                  </button>
//                  <button
//                    type="submit"
//                    className=" px-8 py-2 bg-red-700 text-white rounded-full hover:bg-red-800 hover:transform hover:scale-105 transition duration-300 "
//                    onClick={closeModal}
//                  >
//                    Cancel
//                  </button>
//                </div>
//              </div>
//            </form>
//          </div>
//        </div>
//      </div>
//    );
//  };

//  export default FormRecipeModal;


import  { useState, useEffect, useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

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
    views: selectedRecipe?.views || 1,
  });

  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        modalRef.current,
        { scale: 0.5, opacity: 0, y: -50 },  
        { scale: 1, opacity: 1, y: 0, duration: 0.6, ease: "elastic.out(1, 0.5)" }  
      );
    } else {
      gsap.to(modalRef.current, {
        scale: 0.5,
        opacity: 0,
        y: -50,
        duration: 0.5,
        ease: "back.in(1)",  
      });
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave(formData);
    closeModal();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      // views: mode === "edit" ? selectedRecipe.views : 111,
      [name]: name === "ingredients" ? value.split(/[\n,]+/).map((item) => item.trim())  : value,
    });
  };

  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4 } },
    exit: { opacity: 0, transition: { duration: 0.4 } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-gray-900 bg-opacity-70 flex justify-center items-center z-50 backdrop-blur-lg"  //Darker backdrop, more blur
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={closeModal}
        >
          <motion.div
            ref={modalRef}
            className="bg-gradient-to-r from-primary via-secondary to-orange-300 m-5 p-8 rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl relative scrollbar-hide" // Gradient background, larger max-width, more shadow
            onClick={(e) => e.stopPropagation()}
            style={{ fontFamily: "Montserrat, sans-serif" }}  Modern font
          >
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-white hover:text-gray-300 z-10"  
            >
              <FaTimes className="text-4xl" />
            </button>

            <h2 className="text-4xl font-extrabold mb-8 text-center text-white drop-shadow-lg"> {/* Larger, bolder title, white with shadow */}
              {mode === "edit" ? "Edit Recipe" : "Add Recipe"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6"> {/* More spacing */}
             
                <div>
                  <label htmlFor="title" className="block text-xl font-medium text-white mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Recipe Title"
                    className="border-2 border-green-300 rounded-lg py-3 px-4 w-full bg-transparent text-white placeholder-white-200 focus:outline-none focus:border-green-500 transition duration-300" 
                    required
                  />
                </div>
                <div >
                 <label
                   className="block text-md font-medium text-white"
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
                   className="border-2 border-green-300 rounded-lg py-3 px-4 w-full bg-transparent text-white placeholder-white-200 focus:outline-none focus:border-green-500 transition duration-300" 
                   required
                 />
               </div>
               <div >
                 <label
                   className="block text-md font-medium text-white"
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
                   className="border-2 border-green-300 rounded-lg py-3 px-4 w-full bg-transparent text-white placeholder-white-200 focus:outline-none focus:border-green-500 transition duration-300" 
                   required
                 />
               </div>

               <div >
                 <label
                   className="block text-md font-medium text-white"
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
                   className="border-2 border-green-300 rounded-lg py-3 px-4 w-full bg-transparent text-white placeholder-white-200 focus:outline-none focus:border-green-500 transition duration-300" 
                   required
                 />
               </div>

               <div >
                 <label
                   className="block text-md font-medium text-white"
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
                   className="border-2 border-green-300 rounded-lg py-3 px-4 w-full bg-transparent text-white placeholder-white-200 focus:outline-none focus:border-green-500 transition duration-300" 
                   required
                 />
               </div>

               <div >
                 <label
                   className="block text-md font-medium text-white"
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
                   className="border-2 border-green-300 rounded-lg py-3 px-4 w-full bg-transparent text-white placeholder-white-200 focus:outline-none focus:border-green-500 transition duration-300" 
                   required
                 />
               
               </div>

               <h2 className="text-left text-xl font-bold text-white">
                 Author Details :{" "}
               </h2>

               <div >
                 <label
                   className="block text-md font-medium text-white"
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
                   className="border-2 border-green-300 rounded-lg py-3 px-4 w-full bg-transparent text-white placeholder-white-200 focus:outline-none focus:border-green-500 transition duration-300" 
                   required
                 />
               </div>

               <div >
                 <label
                   className="block text-md font-medium text-white"
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
                   className="border-2 border-green-300 rounded-lg py-3 px-4 w-full bg-transparent text-white placeholder-white-200 focus:outline-none focus:border-green-500 transition duration-300" 
                 />
               </div>
               
             

              <div className="flex justify-center mt-8 space-x-6"> 
                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-green-700 font-bold rounded-xl hover:bg-indigo-100 hover:scale-105 transition duration-300 shadow-md" 
                >
                  {mode === "edit" ? "Save Changes" : "Add Recipe"}
                </button>
                <button
                  type="button"
                  className="px-6 py-3 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 hover:scale-105 transition duration-300 shadow-md"  
                  onClick={closeModal}
                >
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FormRecipeModal;