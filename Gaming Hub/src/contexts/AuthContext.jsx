import { useNavigate } from 'react-router-dom';
import { createContext, useContext, useState } from 'react';

import useSessionStorage from '../hooks/useSessionStorage';
import {login, register, logout} from '../services/authService';

export const AuthContext = createContext();

export default function AuthProvider ({children}) {

    const [loginError, setLoginError] = useState('');
    const [registerError, setRegisterError] = useState('');
    const [auth,setAuth] = useSessionStorage('auth' , {});
    const navigate = useNavigate();

    const onLoginSubmit = async (data) => {
        try {
            const result = await login(data);

            setAuth(result);
            
            navigate('/');
        } catch (error) {
            setLoginError(error.message);
        }
    };

    const onRegisterSubmit = async (values) => {
        const {repeatPassword, ...registerData} = values;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const isValidEmail = emailRegex.test(registerData.email);

        if(!isValidEmail) {
            setRegisterError('Invalid email!')
            return;
        }
        if(repeatPassword !== registerData.password) {
            setRegisterError('Passwords mismatch!');
            return;
        }

        try {
            const result = await register(registerData);

            setAuth(result);

            navigate('/');
        } catch (error) {
            setRegisterError(error.message);
        }
    };


    const onLogout = async () => {
        await logout();

        setAuth({});
    };

    const contextValues = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        username: auth.username,
        isAuthenticated: !!auth.accessToken,
        loginError,
        setLoginError,
        registerError,
        setRegisterError,
    };

    return (
        <>
        <AuthContext.Provider value={contextValues}>
            {children}
        </AuthContext.Provider>
        </>
    );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    return context;
}