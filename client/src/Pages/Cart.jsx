import { useContext } from "react";
import {
  FaArrowLeft,
  FaCheckCircle,
  FaMinus,
  FaPlus,
  FaShoppingBag,
  FaTrash,
  FaTruck,
  FaShieldAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { ProductContext } from "../Context/ProductContext";

const Cart = () => {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
  } = useContext(ProductContext);

  const grandTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const shipping = grandTotal > 0 && grandTotal < 100 ? 10 : 0;
  const finalTotal = grandTotal + shipping;

  /* ================= EMPTY CART ================= */

  if (!cartItems || cartItems.length === 0) {
    return (
      <section className="min-h-[70vh] bg-[#fafafa] py-16 sm:py-20">
        <div className="mx-auto flex min-h-[55vh] max-w-2xl flex-col items-center justify-center px-4 text-center">

          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-50 text-blue-600 shadow-inner">
            <FaShoppingBag className="text-3xl" />
          </div>

          <h1 className="mt-6 text-2xl font-bold text-slate-900 sm:text-3xl">
            Your Cart is Empty
          </h1>

          <p className="mt-3 max-w-md text-sm leading-6 text-slate-500 sm:text-base">
            Looks like you haven't added anything to your cart yet.
            Explore our products and find something you love.
          </p>

          <Link
            to="/products"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:bg-slate-900 hover:shadow-xl"
          >
            <FaShoppingBag className="text-xs" />
            Continue Shopping
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#fafafa] py-10 sm:py-14 lg:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}

        <div className="mb-8 sm:mb-10">

          <Link
            to="/products"
            className="mb-5 inline-flex items-center gap-2 text-xs font-semibold text-slate-500 transition-colors hover:text-blue-600 sm:text-sm"
          >
            <FaArrowLeft className="text-[10px]" />
            Continue Shopping
          </Link>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">

            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                Your Cart
              </p>

              <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Shopping Cart
              </h1>
            </div>

            <p className="text-sm text-slate-500">
              {totalItems} {totalItems === 1 ? "item" : "items"} in your cart
            </p>

          </div>

          <div className="mt-4 h-[2px] w-16 rounded-full bg-slate-900" />
        </div>

        {/* ================= MAIN GRID ================= */}

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_360px] lg:items-start xl:grid-cols-[1fr_390px]">

          {/* ================= CART ITEMS ================= */}

          <div className="space-y-4">

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:border-blue-100 hover:shadow-lg sm:p-5"
              >
                <div className="flex gap-4 sm:gap-5">

                  {/* PRODUCT IMAGE */}

                  <Link
                    to={`/product/${item.id}`}
                    className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-slate-50 sm:h-28 sm:w-28"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-110"
                    />
                  </Link>

                  {/* PRODUCT DETAILS */}

                  <div className="min-w-0 flex-1">

                    <div className="flex items-start justify-between gap-3">

                      <div className="min-w-0">

                        <p className="text-[9px] font-semibold uppercase tracking-wider text-slate-400">
                          {item.category || "Premium Collection"}
                        </p>

                        <Link to={`/product/${item.id}`}>
                          <h2 className="mt-1 line-clamp-2 text-sm font-bold text-slate-800 transition-colors hover:text-blue-600 sm:text-base">
                            {item.title}
                          </h2>
                        </Link>

                        <div className="mt-2 flex items-center gap-2">
                          <FaCheckCircle className="text-[10px] text-green-500" />

                          <span className="text-[10px] font-medium text-slate-500 sm:text-xs">
                            In Stock
                          </span>
                        </div>

                      </div>

                      {/* REMOVE */}

                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        aria-label={`Remove ${item.title}`}
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition-all duration-300 hover:bg-red-50 hover:text-red-500 sm:h-9 sm:w-9"
                      >
                        <FaTrash className="text-[10px]" />
                      </button>

                    </div>

                    {/* PRICE + QUANTITY */}

                    <div className="mt-4 flex flex-wrap items-end justify-between gap-3">

                      <div>
                        <p className="text-[10px] text-slate-400">
                          Price
                        </p>

                        <p className="mt-0.5 text-base font-bold text-slate-900">
                          ${Number(item.price).toFixed(2)}
                        </p>
                      </div>

                      {/* QUANTITY */}

                      <div>
                        <p className="mb-1 text-[10px] text-slate-400">
                          Quantity
                        </p>

                        <div className="flex h-9 items-center rounded-full border border-slate-200 bg-slate-50 p-1">

                          <button
                            type="button"
                            onClick={() => decreaseQuantity(item.id)}
                            aria-label="Decrease quantity"
                            className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-slate-600 shadow-sm transition hover:bg-slate-900 hover:text-white"
                          >
                            <FaMinus className="text-[8px]" />
                          </button>

                          <span className="w-8 text-center text-xs font-bold text-slate-800">
                            {item.quantity}
                          </span>

                          <button
                            type="button"
                            onClick={() => increaseQuantity(item.id)}
                            aria-label="Increase quantity"
                            className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-slate-600 shadow-sm transition hover:bg-blue-600 hover:text-white"
                          >
                            <FaPlus className="text-[8px]" />
                          </button>

                        </div>
                      </div>

                      {/* ITEM TOTAL */}

                      <div className="text-right">
                        <p className="text-[10px] text-slate-400">
                          Total
                        </p>

                        <p className="mt-0.5 text-base font-extrabold text-blue-600">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* BENEFITS */}

            <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">

              <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <FaTruck className="text-sm" />
                </div>

                <div>
                  <p className="text-xs font-bold text-slate-800">
                    Free Shipping
                  </p>

                  <p className="mt-0.5 text-[10px] text-slate-500">
                    On orders over $100
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-600">
                  <FaShieldAlt className="text-sm" />
                </div>

                <div>
                  <p className="text-xs font-bold text-slate-800">
                    Secure Checkout
                  </p>

                  <p className="mt-0.5 text-[10px] text-slate-500">
                    100% secure payment
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* ================= ORDER SUMMARY ================= */}

          <div className="lg:sticky lg:top-24">

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

              {/* SUMMARY HEADER */}

              <div className="border-b border-slate-100 px-5 py-5 sm:px-6">
                <h2 className="text-lg font-bold text-slate-900">
                  Order Summary
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  Review your order before checkout
                </p>
              </div>

              {/* SUMMARY DETAILS */}

              <div className="space-y-4 px-5 py-5 sm:px-6">

                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">
                    Subtotal
                  </span>

                  <span className="font-semibold text-slate-800">
                    ${grandTotal.toFixed(2)}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">
                    Shipping
                  </span>

                  {shipping === 0 ? (
                    <span className="font-semibold text-green-600">
                      Free
                    </span>
                  ) : (
                    <span className="font-semibold text-slate-800">
                      ${shipping.toFixed(2)}
                    </span>
                  )}
                </div>

                <div className="border-t border-dashed border-slate-200 pt-4">
                  <div className="flex items-end justify-between">

                    <div>
                      <p className="text-sm font-semibold text-slate-700">
                        Total
                      </p>

                      <p className="mt-0.5 text-[10px] text-slate-400">
                        Including shipping
                      </p>
                    </div>

                    <span className="text-2xl font-extrabold text-slate-900">
                      ${finalTotal.toFixed(2)}
                    </span>

                  </div>
                </div>

                {/* FREE SHIPPING MESSAGE */}

                {grandTotal > 0 && grandTotal < 100 && (
                  <div className="rounded-xl bg-blue-50 p-3">
                    <p className="text-xs leading-5 text-blue-700">
                      Add{" "}
                      <span className="font-bold">
                        ${(100 - grandTotal).toFixed(2)}
                      </span>{" "}
                      more to get free shipping.
                    </p>
                  </div>
                )}

                {grandTotal >= 100 && (
                  <div className="flex items-center gap-2 rounded-xl bg-green-50 p-3 text-xs font-semibold text-green-700">
                    <FaCheckCircle />
                    You've unlocked free shipping!
                  </div>
                )}

                {/* CHECKOUT */}

                <Link
                  to="/checkout"
                  className="flex w-full items-center justify-center rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:bg-slate-900 hover:shadow-xl"
                >
                  Proceed to Checkout
                </Link>

                <Link
                  to="/products"
                  className="flex w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-600 transition-all duration-300 hover:border-blue-500 hover:text-blue-600"
                >
                  Continue Shopping
                </Link>

              </div>
            </div>

            {/* PAYMENT NOTE */}

            <p className="mt-4 text-center text-[10px] leading-5 text-slate-400">
              Secure payment • Easy returns • Customer support
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
