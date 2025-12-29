import React, { useState } from 'react';
import * as authService from '../services/authService';
import AuthContext from './useAuth';

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem('user');
        try {
            return storedUser ? JSON.parse(storedUser) : null;
        } catch (e) {
            console.error("Failed to parse stored user", e);
            localStorage.removeItem('user');
            return null;
        }
    });

    const login = async (email, password) => {
        try {
            const userData = await authService.login(email, password);
            setUser(userData);
            localStorage.setItem('user', JSON.stringify(userData));
            return { success: true };
        } catch (error) {
            return { success: false, message: error.message };
        }
    };

    const register = async (name, email, password) => {
        try {
            const userData = await authService.register(name, email, password);
            setUser(userData);
            localStorage.setItem('user', JSON.stringify(userData));
            return { success: true };
        } catch (error) {
            return { success: false, message: error.message };
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
        // Optional: Clear cart logic here if needed, but keeping it simple for now as requested
    };

    const updateUser = async (name, email, address) => {
        if (!user) return { success: false, message: "No user logged in" };
        try {
            const updatedUser = await authService.updateUser(user.id, name, email, address);
            setUser(updatedUser);
            localStorage.setItem('user', JSON.stringify(updatedUser));
            return { success: true };
        } catch (error) {
            return { success: false, message: error.message };
        }
    };

    const value = {
        user,
        login,
        register,
        logout,
        updateUser
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
