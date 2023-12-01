import { createContext, useContext, useState } from 'react';
import { registerRequest } from '../api/auth'

export const AuthContext =  createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const signUp = async (user) => {
        const res = await registerRequest(user);
        setUser(res.data);
        console.log(res.data);
    }
    return (
        <AuthContext.Provider value={{
            signUp, 
            user
        }}>
            { children }
        </AuthContext.Provider>
    )
}