import * as requester from './requester';

const baseUrl = `http://localhost:3030`;
// const baseUrl = `https://gaming-hub-mongodb-server.onrender.com`;

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

export const editProfile = async (profileInfo) => {
    const result = await requester.patch(`${baseUrl}/users/my-profile/edit`, profileInfo);
    return result;
};

export const getProfile = async (userId) => {
    const result = await requester.get(`${baseUrl}/users/${userId}/profile`);

    return result;
};
