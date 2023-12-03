import { createContext, useContext, useEffect, useState } from 'react';
import { registerRequest, loginRequest, verifyTokenRequest } from '../api/auth';
import Cookies from 'js-cookie';

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
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
            setUser(res.data.user);
            setIsAuthenticated(true);
            setToken(res.data.token);
            console.log(res);
        } catch (error) {
            console.log(error.response.data);
            if (error.response.data.errors) {
                setErrors(error.response.data.errors)
            } else {
                setErrors([error.response.data]);
            }
        }
    }

    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([]);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [errors]);

    useEffect(() => {
        async function checkLogin() {
            const cookies = Cookies.get();

            if (cookies.rs_token) {
                try {
                    const res = await verifyTokenRequest(cookies.rs_token);
                    console.log(res);
                    if (res.data) {
                        setIsAuthenticated(true);
                        setUser(res.data.user);
                    } else {
                        setIsAuthenticated(false);
                        setUser(null);
                    }
                } catch (error) {
                    setIsAuthenticated(false);
                    setUser(null);
                }
            }
        }
        checkLogin();
    }, [])



    return (
        <AuthContext.Provider value={{
            signUp,
            signIn,
            user,
            isAuthenticated,
            errors
        }}>
            {children}
        </AuthContext.Provider>
    )
}