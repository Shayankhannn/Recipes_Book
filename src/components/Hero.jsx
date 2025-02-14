import Search from "./Search"

const Hero = () => {
  return (
    <div className="bg-hero w-dvw h-dvh flex-hero">
          <div className="text-center">
            <h1 className="text-[60px] text-white/[0.7] font-extrabold ">Recipe Book</h1>
            <p className="text-white/[0.7] text-[20px] font-bold ">Find your favorite recipes or add your recipes all at one place</p>
            <Search/>
            </div>  
    </div>
  )
}

export default Hero