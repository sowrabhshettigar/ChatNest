import React, { createContext, useState, useEffect } from "react";
import { registerUser, userLogin,getUserProfile, setAuthToken } from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //load user if token exist
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setAuthToken(token);
            getUserProfile().then((userData) => {
                setUser(userData);
            }).catch(() => {
                localStorage.removeItem('token');
                setUser(null);
            })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

const login = async (userData) => {
    setLoading(true);
    try {
        const { token } = await userLogin(userData);
        localStorage.setItem('token', token);
        setAuthToken(token);
        const user = await getUserProfile();
        setUser(user);
    } catch (error) {
        console.error("Login failed:", error);
    } finally {
        setLoading(false);
    }
}
const register = async (userData) => {
    setLoading(true);
    try {
        const { token } = await registerUser(userData);
        localStorage.setItem('token', token);
        setAuthToken(token);
        const user = await getUserProfile();
        setUser(user);
    } catch (error) {
        console.error("Registration failed:", error);
    } finally {
        setLoading(false);
    }
}

const logout = () => {
    localStorage.removeItem('token');
    setAuthToken(null);
    setUser(null);
};
return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
        {children}
    </AuthContext.Provider>
);
}