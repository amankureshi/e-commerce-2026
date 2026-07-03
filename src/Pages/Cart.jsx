import { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";

const Cart = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeItem } =
    useContext(ProductContext);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      <table className="w-full overflow-hidden rounded-3xl shadow-2xl bg-white">
        <thead>
          <tr className="bg-gradient-to-r from-pink-600 to-pink-400 text-white">
            <th className="py-4">#</th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr
              key={item.id}
              className="border-b hover:bg-slate-50 transition-all duration-300 text-center"
            >
              {/* Number */}
              <td className="py-6 font-semibold text-gray-500">{index + 1}</td>

              {/* Product */}
              <td className="py-4 px-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-xl shadow p-2 border flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="text-left">
                    <h3 className="font-semibold text-gray-800 line-clamp-1">
                      {item.title}
                    </h3>

                    <div className="flex items-center gap-2 mt-1">
                      <p className="text-xs text-gray-500">
                        Premium Collection
                      </p>

                      <span className="px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-600 text-[10px] font-semibold">
                        In Stock
                      </span>
                    </div>
                  </div>
                </div>
              </td>

              {/* Price */}
              <td>
                <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold">
                  ${item.price.toFixed(2)}
                </span>
              </td>

              {/* Quantity */}
              <td>
                <div className="flex justify-center">
                  <div className="flex items-center bg-gray-100 rounded-full p-1 shadow">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="w-9 h-9 rounded-full bg-white shadow hover:bg-red-500 hover:text-white transition"
                    >
                      −
                    </button>

                    <span className="w-10 font-bold">{item.quantity}</span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="w-9 h-9 rounded-full bg-white shadow hover:bg-green-500 hover:text-white transition"
                    >
                      +
                    </button>
                  </div>
                </div>
              </td>

              {/* Total */}
              <td>
                <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 font-bold">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </td>

              {/* Remove */}
              <td>
                <button
                  onClick={() => removeItem(item.id)}
                  className="w-11 h-11 rounded-full bg-red-100 hover:bg-red-500 hover:text-white transition duration-300 shadow"
                >
                  🗑
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
