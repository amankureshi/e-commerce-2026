import { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";

const Cart = () => {
  const { cartItems } = useContext(ProductContext);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th>No</th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>

        <tbody>
          {cartItems.map((item, index) => (
            <tr key={item.id} className="text-center border-t">
              <td>{index + 1}</td>

              <td className="p-2">
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt=""
                    className="w-12 h-12 object-contain"
                  />
                  {item.title}
                </div>
              </td>

              <td>${item.price}</td>

              <td>{item.quantity}</td>

              <td>${item.price * item.quantity}</td>

              <td>❌</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
