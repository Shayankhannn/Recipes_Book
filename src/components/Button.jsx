
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { BiPlus } from "react-icons/bi";


const Button = () => {
  const handleHover = () => {
    gsap.to(".glow-border", { opacity: 1, scale: 1.2, duration: 0.4, ease: "power3.out" });
  };

  const handleLeave = () => {
    gsap.to(".glow-border", { opacity: 0, scale: 1, duration: 0.4, ease: "power3.out" });
  };

  return (
    <motion.div 
      className="relative flex justify-center items-center"
      initial={{ y: 0 }}
      animate={{ y: [-2, 2, -2] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Glowing Effect */}
      <motion.div 
        className="absolute glow-border w-full h-full rounded-full border-[1px] border-[#508D4E] opacity-0"
      ></motion.div>

      <motion.button
        className="relative flex items-center gap-2 px-6 py-3 text-white bg-[#20591E] rounded-full shadow-lg transition-all duration-300 ease-in-out hover:bg-[#508D4E]"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
       
      >
        <motion.span
          className="plus-icon"
          initial={{ rotate: 0 }}
          whileHover={{ rotate: 90 }}
        >
          <BiPlus size={22} />
        </motion.span>
        Add Recipe
      </motion.button>
    </motion.div>
  );
};

export default Button;
