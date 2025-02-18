import { FaSearch } from "react-icons/fa"

const Search = ({setSearchQuery}) => {


  return (
    <div  className="">
        <label  className="flex-hero gap-2 relative border border-black-200 rounded-full px-8 py-2  mx-4">

      <input type="text" onChange={(e) => setSearchQuery(e.target.value)}  placeholder="Search By Title or Author" className="w-full h-[33px] rounded-md bg-transparent outline-none text-primary text-lg     "/>
      <FaSearch className=" text-[20px] text-primary"/>
        </label>
    </div>
  )
}

export default Search