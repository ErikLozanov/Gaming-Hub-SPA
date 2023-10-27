import * as requester from './requester';

const baseUrl = `http://localhost:3030`;

export const login = requester.login;
export const register = requester.register;
export const logout = requester.logout;

// export const authServiceFactory = (token) => {
//     const request = requestFactory(token);

//     return {
//         login: (data) => request.post(`${baseUrl}/login`, data),
//         register: (data) => request.post(`${baseUrl}/register`, data),
//         logout: () => request.get(`${baseUrl}/logout`),
//     }
// };
