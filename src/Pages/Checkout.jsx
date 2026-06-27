import { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";

const Checkout = () => {
  const { cartItems } = useContext(ProductContext);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Shipping Details */}
        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-6">Shipping Details</h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#f58a7b]"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#f58a7b]"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#f58a7b]"
            />

            <textarea
              rows="4"
              placeholder="Address"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#f58a7b]"
            ></textarea>

            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="City"
                className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#f58a7b]"
              />

              <input
                type="text"
                placeholder="Pincode"
                className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#f58a7b]"
              />
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>

          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-4"
              >
                <div className="flex gap-4 items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-contain"
                  />

                  <div>
                    <h3 className="font-medium line-clamp-1">{item.title}</h3>

                    <p className="text-gray-500 text-sm">
                      Qty : {item.quantity}
                    </p>
                  </div>
                </div>

                <p className="font-bold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t pt-6">
            <div className="flex justify-between text-lg">
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-lg mt-2">
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <div className="flex justify-between text-2xl font-bold mt-5">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>

            <button className="w-full mt-8 bg-[#f58a7b] hover:bg-[#ef7767] text-white py-3 rounded-lg font-semibold transition">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
