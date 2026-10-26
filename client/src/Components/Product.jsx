import { FaStar, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { image, category, title, price, rating, id } = product;

  const isNew = id === 1 || id === 2 || id === 3;

  return (
    <div className="group relative mx-auto w-full max-w-[290px] overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60 sm:p-4">

      {/* ================= IMAGE ================= */}
      <div className="relative flex h-48 items-center justify-center overflow-hidden rounded-xl bg-slate-50 sm:h-52">

        {/* Soft Background Glow */}
        <div className="absolute h-32 w-32 rounded-full bg-blue-100/50 blur-2xl transition-all duration-500 group-hover:scale-125" />

        {/* Product Image */}
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="relative z-10 h-32 w-full object-contain px-5 transition-transform duration-500 group-hover:scale-110 sm:h-36"
        />

        {/* New Badge */}
        {isNew && (
          <span className="absolute left-3 top-3 z-20 rounded-full bg-slate-900 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-white">
            New
          </span>
        )}

        {/* Rating */}
        <div className="absolute right-3 top-3 z-20 flex items-center gap-1 rounded-full bg-white px-2 py-1 shadow-sm">
          <FaStar className="text-[9px] text-amber-400" />

          <span className="text-[10px] font-bold text-slate-700">
            {rating?.rate ?? "0.0"}
          </span>
        </div>

        {/* Add Button */}
        <Link
          to={`/product/${id}`}
          aria-label={`View ${title}`}
          className="absolute bottom-3 right-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-blue-700"
        >
          <FaPlus className="text-[9px]" />
        </Link>
      </div>

      {/* ================= PRODUCT INFO ================= */}
      <div className="px-1 pt-3">

        {/* Category */}
        <p className="text-[9px] font-medium uppercase tracking-wider text-slate-400">
          {category}
        </p>

        {/* Title */}
        <Link to={`/product/${id}`}>
          <h3 className="mt-1 truncate text-sm font-semibold text-slate-800 transition-colors duration-200 hover:text-blue-700">
            {title}
          </h3>
        </Link>

        {/* Price */}
        <div className="mt-2 flex items-center justify-between">
          <h4 className="text-base font-extrabold text-slate-900">
            ${price}
          </h4>

          <Link
            to={`/product/${id}`}
            className="text-[11px] font-semibold text-slate-400 transition-colors hover:text-blue-600"
          >
            View →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;