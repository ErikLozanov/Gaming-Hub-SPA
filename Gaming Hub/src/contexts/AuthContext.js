import { useNavigate } from 'react-router-dom';
import {useSessionStorage} from '../hooks/useSessionStorage';

import {login, register, logout} from '../services/authService';

export default function AuthProvider ({children}) {

    const [auth,setAuth] = useSessionStorage('auth' , {});
    const navigate = useNavigate();

    const authService = auth
};