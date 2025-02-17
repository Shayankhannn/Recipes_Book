
import {  useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Button = ({ onClick }) => {
  const buttonRef = useRef(null);
  const burstRef = useRef(null);

  useGSAP(() => {
    const btn = buttonRef.current;

    // Hover Effect
    btn.addEventListener("mouseenter", () => {
      gsap.to(btn, { scale: 1.1, duration: 0.2, ease: "power1.out" });
    });

    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, { scale: 1, duration: 0.2, ease: "power1.out" });
    });
  }, []);

  const handleClick = () => {
    // Button Click Burst Effect
    gsap.fromTo(
      burstRef.current,
      { scale: 0, opacity: 1 },
      { scale: 3, opacity: 0, duration: 0.6, ease: "power2.out" }
    );

    if (onClick) onClick();
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className="relative px-6 py-3 text-lg font-bold text-white rounded-lg shadow-lg bg-gradient-to-r from-green-500 to-green-700 transition-all duration-300 ease-out hover:shadow-2xl hover:brightness-110"
    >
      Add Recipe
      {/* Burst Effect */}
      <span
        ref={burstRef}
        className="absolute inset-0 w-full h-full bg-green-400 opacity-30 rounded-full blur-2xl"
      ></span>
    </button>
  );
};

export default Button;
