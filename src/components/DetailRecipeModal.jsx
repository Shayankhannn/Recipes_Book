

import  { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { FaTimes } from 'react-icons/fa';
import { formatDate } from '../lib/data';

const RecipeModal = ({  closeModal,isOpen,openEditModal,defaultRecipeImage,defaultAuthorImage,recipe:{description, image, title, author, authorImage, date, views,category,ingredients,instructions} }) => {
  const modalRef = useRef(null);
  const imageRef = useRef(null);
  const [activeSection, setActiveSection] = useState('ingredients');

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(modalRef.current, { scale: 0.7, opacity: 0, y: 50 }, { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "power3.out" });
      gsap.fromTo(imageRef.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out", delay: 0.2 });
    } else {
      gsap.to(modalRef.current, { scale: 0.7, opacity: 0, y: 50, duration: 0.3, ease: "power2.in" });
      gsap.to(imageRef.current, { opacity: 0, scale: 0.8, duration: 0.3, ease: "power1.in" });
    }
  }, [isOpen]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const ingredientEmojis = {
    'flour': '🌾',
    'sugar': '🍚',
    'butter': '🧈',
    'egg': '🥚',
    'baking soda': '🥄',
    'chocolate': '🍫',
    'salt': '🧂',
    'milk': '🥛',
    'vanilla extract': '🍦',
    'onion': '🧅',
    'garlic': '🧄',
    'oil': '🫙',
    'water': '💧',
    'yeast': '🍄',
    'baking powder': '🧪',
    'cinnamon': '🌿',
    'nutmeg': '🌰',
    'cloves': '🌱',
    'ginger': '🫚',
    'honey': '🍯',
    'maple syrup': '🍁',
    'lemon': '🍋',
    'lime': '🍈',
    'orange': '🍊',
    'apple': '🍎',
    'banana': '🍌',
    'strawberry': '🍓',
    'blueberry': '🫐',
    'raspberry': '🍒',
    'mango': '🥭',
    'bread': '🍞',
    'rice': '🍚',
    'avocado': '🥑',
    'tomato': '🍅',
    'lettuce': '🥬',
    'pepper': '🫑',
    'carrot': '🥕',
    'cheese': '🧀',
    'chicken': '🍗',
    'cucumber': '🥒',
    // ... add more as needed
  };

  const defaultEmoji = '🍽️';

  const getEmoji = (ingredient) => {
    const lowerCaseIngredient = ingredient.toLowerCase();
    for (const key in ingredientEmojis) {
      if (lowerCaseIngredient.includes(key)) {
        return ingredientEmojis[key];
      }
    }
    return defaultEmoji;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.3 } }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
          onClick={closeModal}
        >
          <div
          onClick={(e) => e.stopPropagation()}
            ref={modalRef}
            className="relative bg-[#e6eedc] m-4 rounded-3xl shadow-lg w-full max-w-5xl overflow-hidden flex flex-col md:flex-row max-h-[75vh] lg:max-h-[90vh] overflow-y-auto"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <button onClick={closeModal} className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 text-3xl   z-10">
              <FaTimes/>

              
              
            </button>

            <div className="md:w-1/2 w-full" ref={imageRef}>
              <img
                src={image || defaultRecipeImage}    onError={(e) => (e.target.src = defaultRecipeImage)}
                alt={title}
                className="w-full h-[200px] lg:h-full md:h-full object-cover rounded-t-3xl md:rounded-l-3xl md:rounded-t-none" // object-cover for full width
              />
            </div>

            <div className="md:w-1/2 w-full p-6 md:p-8 overflow-y-scroll scrollbar-hide">
              <h2 className="text-4xl font-bold mb-4 text-gray-800">{title}</h2>
              <div className="flex items-center mb-6 text-sm text-gray-600">
                <img src={authorImage || defaultAuthorImage}   onError={(e) => (e.target.src = defaultAuthorImage)} alt={author} className="w-10 h-10 rounded-full mr-3" />
                <span>By {author} | {formatDate(date) } | {views} views</span>
              </div>
              <p className="text-gray-700 mb-6">{description}</p>

              <div className="flex space-x-4 mb-4">
                <button
                  className={`px-6 py-3 rounded-lg ${activeSection === 'ingredients' ? 'bg-[#c1dbbd] text-gray-800 font-semibold' : 'text-gray-600 hover:bg-[#c1dbbd] hover:text-gray-800 transition-colors'}`}
                  onClick={() => setActiveSection('ingredients')}
                >
                  Ingredients
                </button>
                <button
                  className={`px-6 py-3 rounded-lg ${activeSection === 'instructions' ? 'bg-[#c1dbbd] text-gray-800 font-semibold' : 'text-gray-600 hover:bg-[#c1dbbd] hover:text-gray-800 transition-colors'}`}
                  onClick={() => setActiveSection('instructions')}
                >
                  Instructions
                </button>
              </div>

              <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit">
                {activeSection === 'ingredients' && (
                  <motion.div className="flex flex-wrap gap-2" variants={itemVariants}>
                    {ingredients.map((ingredient, index) => (
                      <motion.div key={index} className="bg-[#c1dbbd] rounded-full px-3 py-1 text-sm text-gray-800 flex items-center hover:scale-105 transition-transform cursor-pointer" whileTap={{ scale: 0.95 }}>
                        <span className="text-lg">{getEmoji(ingredient)}</span> {/* Larger emoji */}
                        <span className="ml-2">{ingredient}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
                {activeSection === 'instructions' && (
                  <motion.div className="text-gray-700 whitespace-pre-line" variants={itemVariants}>
                    {instructions}
                  </motion.div>
                )}
              </motion.div>

              <div className="mt-4 flex justify-end space-x-2">
                <motion.button
                  onClick={openEditModal}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-transform hover:scale-105 active:scale-100"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Update
                </motion.button>
                <motion.button
                //   onClick={onDelete}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-transform hover:scale-105 active:scale-100"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Delete
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RecipeModal;
