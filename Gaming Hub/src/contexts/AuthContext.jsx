import { useNavigate } from 'react-router-dom';
import { createContext, useContext } from 'react';

import {useSessionStorage} from '../hooks/useSessionStorage';
import {login, register, logout} from '../services/authService';


export const AuthContext = createContext();

export default function AuthProvider ({children}) {

    const [auth,setAuth] = useSessionStorage('auth' , {});
    const navigate = useNavigate();

    const onLoginSubmit = async (data) => {
        try {
            const result = await login(data);

            setAuth(result);

            navigate('/');
        } catch (error) {
            console.log('There is a problem');
        }
    };

    const onRegisterSubmit = async (values) => {
        const {repeatPassword, ...registerData} = values;
        if(repeatPassword !== registerData.password) {
            return;
        }

        try {
            const result = await register(registerData);

            setAuth(result);

            navigate('/');
        } catch (error) {
            console.log('There is a problem');
            
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
        isAuthenticated: !!auth.accessToken,
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