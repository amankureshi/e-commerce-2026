import { FaStar, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { image, category, title, description, price, rating } = product;

  return (
    <div className="bg-white flexCenter m-1.5 py-6 ring-1 ring-slate-200/20 shadow-sm rounded-xl border border-gray-200 p-4 relative group hover:shadow-lg transition-all duration-300">
      {/* Rating */}
      <div className="absolute top-3 left-3 bg-green-50 px-2 py-1 rounded-full flex items-center gap-1">
        <FaStar className="text-yellow-500 text-xs" />
        <span className="text-xs font-semibold text-gray-700">
          {rating?.rate}
        </span>
      </div>

      {/* IMAGE WRAPPER WITH BORDER */}
      <div className="relative w-full h-44 border-b-[0.5px] border-[#edb4ad] flex items-center justify-center  mb-4 group">
        <img
          src={image}
          alt={title}
          className="h-32 object-contain group-hover:scale-105 transition duration-300"
        />

        {/* PLUS ICON bottom-left inside image border */}
        <Link className="absolute bottom-0 right-0 w-7 h-7 bg-[#f58a7b] rounded-full flex items-center justify-center text-white hover:scale-110 transition">
          <FaPlus size={10} />
        </Link>
      </div>

      {/* Category */}
      <p className="text-[11px] text-gray-400 capitalize">{category}</p>

      {/* Title */}
      <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 mt-1">
        {title}
      </h3>

      {/* Description */}
      <p className="text-xs text-gray-400 mt-2 line-clamp-2">{description}</p>

      {/* Price */}
      <h4 className="text-red-400 font-bold mt-3">${price}</h4>
    </div>
  );
};

export default Product;
