"use client"
import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);

    if (currentUser && !sessionStorage.getItem('token')) {
        sessionStorage.setItem('token', JSON.stringify({
            token: currentUser.token,
            id: currentUser.id,
        }));
    }

    return(
        <AuthContext.Provider value={{currentUser, setCurrentUser}}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => useContext(AuthContext);