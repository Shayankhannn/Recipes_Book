import { FaSearch } from "react-icons/fa"

const Search = () => {
  return (
    <div className="flex-hero gap-2 relative border rounded-full px-5 py-2 mt-10 mx-4">
        
      <input type="text" placeholder="Search for recipes" className="w-full h-[33px] rounded-full bg-transparent outline-none text-gray-300 text-lg     "/>
      <FaSearch className="absolute right-5 text-[20px] text-gray-300"/>
    </div>
  )
}

export default Search