import { FaEye } from "react-icons/fa"
import { formatDate } from "../lib/data"


const RecipeCard = ({handleDetailModal,defaultAuthorImage,defaultRecipeImage,recipe:{description, image, title, author, authorImage, date, views,category}}) => {
   
    return (
    <li className="featured-card group " >
<div className="flex-between">
    <p className="featured_card_date">
        {formatDate(date)}
    </p>
    
    <div className="flex gap-1.5">
        <FaEye className="size-6 text-primary" />
        <span className="font-medium text-[16px] text-black">{views}</span>
    </div>
</div>
<div className="flex-between mt-5 gap-5">
    <div className="flex-1">
        <div>
        <p className="text-16-medium line-clamp-1"><strong>By:</strong> {author}</p>
        </div>
        <div>
        <h3 className=" font-semibold text-[26px] text-black line-clamp-1">{title}</h3>
        </div>
    </div>
    <div>
    <img src={authorImage || defaultAuthorImage}   onError={(e) => (e.target.src = defaultAuthorImage)}
            alt="author" width={48} height={48} className="rounded-full" />
    </div>
</div>
<div   >
<p className="featured-card_desc">{description}</p>
<img src={image || defaultRecipeImage}    onError={(e) => (e.target.src = defaultRecipeImage)} alt="image" className="featured-card_img" />
</div>
<div className="flex-between gap-3 mt-5">
    <div className="">
    <span >
    <p className=" text-primary font-medium text-[16px] ">{category}</p>
    </span>
    </div>
    <button className="featured-card_btn " onClick={handleDetailModal}>
    
    Details
    

    </button>
</div>
    </li>
  )
}

export default RecipeCard