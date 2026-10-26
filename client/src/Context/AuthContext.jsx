
import { createContext, useContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext(null);

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }

    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const register = async (name, email, password) => {
        const response = await axios.post(
            "http://localhost:5000/api/auth/register",
            { name, email, password }
        );

        if (response.data.user) {
            setUser(response.data.user);
        }

        return response.data;
    };

    return (
        <AuthContext.Provider value={{ user, setUser, register }}>
            {children}
        </AuthContext.Provider>
    );
};
