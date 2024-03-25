import React, { createContext, useState } from 'react';
import { login as apiLogin, logout as apiLogout } from '../utils/api';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = async(formData) => {
        try {

            const response = await apiLogin(formData);

            setUser(response.user);
            localStorage.setItem('token', response.token);
        } catch (error) {

            console.error('Login error:', error.message);

        }
    };

    const logout = async() => {
        try {

            await apiLogout();

            setUser(null);
            localStorage.removeItem('token');
        } catch (error) {

            console.error('Logout error:', error.message);

        }
    };

    return ( <
        AuthContext.Provider value = {
            { user, login, logout } } > { children } <
        /AuthContext.Provider>
    );
};