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
    const [errors, setErrors] = useState([]);

    const signUp = async (user) => {
        try {
            const res = await registerRequest(user);
            setUser(res.data);
            setIsAuthenticated(true);
            console.log(res.data);     
        } catch (error) {
            console.log(error.response.data.errors);
            //console.log(error.response.data['errors']);
            setErrors(error.response.data.errors);
        }
    }
    return (
        <AuthContext.Provider value={{
            signUp, 
            user,
            isAuthenticated,
            errors
        }}>
            { children }
        </AuthContext.Provider>
    )
}