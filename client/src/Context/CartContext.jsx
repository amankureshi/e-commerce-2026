import { createContext, useContext, useEffect, useState } from "react";
import API from "../api/axios";
import { useAuth } from "./AuthContext";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const { user } = useAuth();
    const [cart, setCart] = useState([]);

    // user login ho to uska cart laao, logout ho to khali karo
    useEffect(() => {
        if (user) API.get("/cart").then((res) => setCart(res.data));
        else setCart([]);
    }, [user]);

    const addToCart = async (product, quantity = 1) => {
        const { data } = await API.post("/cart/add", {
            productId: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity,
        });
        setCart(data);
    };

    const updateQuantity = async (productId, quantity) => {
        const { data } = await API.put("/cart/update", { productId, quantity });
        setCart(data);
    };

    const removeFromCart = async (productId) => {
        const { data } = await API.delete(`/cart/remove/${productId}`);
        setCart(data);
    };

    const clearCart = async () => {
        await API.delete("/cart/clear");
        setCart([]);
    };

    const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
    const count = cart.reduce((sum, i) => sum + i.quantity, 0);

    return (
        <CartContext.Provider
            value={{ cart, addToCart, updateQuantity, removeFromCart, clearCart, total, count }}
        >
            {children}
        </CartContext.Provider>
    );
};