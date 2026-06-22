import { FaStar, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { image, category, title, description, price, rating, id } = product;

  return (
    <div className="bg-white flexCenter m-1.5 py-6 ring-1 ring-slate-200/20 shadow-sm rounded-xl border border-gray-200 p-4 relative group hover:shadow-lg transition-all duration-300">
      {/* Rating */}
      <div className="absolute top-3 left-0 right-0 px-3 flex justify-between items-center">
        {id === 1 || id === 2 || id === 3 ? (
          <span className="text-xs font-bold bg-green-100 px-2 py-1 rounded-full">
            New
          </span>
        ) : (
          <div />
        )}

        <div className="bg-green-100 px-2 py-1 rounded-full flex items-center gap-1">
          <FaStar className="text-yellow-500 text-xs" />
          <span className="text-xs font-semibold text-gray-700">
            {rating?.rate}
          </span>
        </div>
      </div>

      {/* IMAGE WRAPPER WITH BORDER */}
      <div className="relative w-full h-44 border-b-[0.5px] border-[#edb4ad] flex items-center justify-center  mb-4 group">
        <img
          src={image}
          alt={title}
          className="h-32 object-contain group-hover:scale-105 transition duration-300"
        />

        {/* PLUS ICON bottom-left inside image border */}
        <Link
          to={`/product/${id}`}
          className="absolute bottom-0 right-0 w-7 h-7 bg-[#f58a7b] rounded-full flex items-center justify-center text-white hover:scale-110 transition"
        >
          <FaPlus size={10} />
        </Link>
      </div>

      <div>
        {/* Category */}
        <p className="text-[11px] text-gray-400 capitalize">{category}</p>

        {/* Title */}
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 mt-1">
          {title}
        </h3>

        {/* Description */}
        <p className="text-xs text-gray-400 mt-2 line-clamp-2">{description}</p>
      </div>
      {/* Price */}
      <div className="flex justify-between items-center gap-4">
        <h4 className="text-red-400 font-bold">${price}</h4>
        <h6 className="text-xs">Sales ({rating.count})</h6>
      </div>
    </div>
  );
};

export default Product;
