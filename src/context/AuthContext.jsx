import { createContext, useContext, useEffect, useState } from 'react';
import { registerRequest, loginRequest } from '../api/auth'
import { set } from 'react-hook-form';

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
        } catch (error) {
            setErrors(error.response.data.errors);
        }
    }

    const signIn = async (user) => {
        try {
            const res = await loginRequest(user);
            console.log(res);     
        } catch (error) {
            console.log(error.response.data);
            if(error.response.data.errors) {
                setErrors(error.response.data.errors)
            } else {
                setErrors([error.response.data]);
            }
        }
    }

    useEffect(() => {
      if(errors.length > 0) {
        const timer = setTimeout(() => {
            setErrors([]);
        }, 5000);
        return () => clearTimeout(timer);
      }
    }, [errors]);
    

    return (
        <AuthContext.Provider value={{
            signUp, 
            signIn,
            user,
            isAuthenticated,
            errors
        }}>
            { children }
        </AuthContext.Provider>
    )
}