import { get,post,put,del } from './requester';

const baseUrl = 'http://localhost:3030/data/comments';

export const commentServiceFactory = (token) => {
    // const request = requester(token);

    const getAllForGame = async (gameId) => {
        const result = await get(`${baseUrl}/${gameId}`);
        return result;
    };

    const create = async (text, gameId, _ownerId, commentDate) => {
        const result = await post(`${baseUrl}/${gameId}`, {text, _ownerId, gameId, commentDate});
        return result;
    };

    // const getAllById = async (userId) => {
    //     const result = await get(`${baseUrl}/my-added-games/${userId}`);
    //     return result;
    // }
    
    // const getOne = async (gameId) => {
    //     const result = await get(`${baseUrl}/${gameId}`);
    
    //     return result;
    // };

    // const searchGame = async (params) => {
    //     console.log(params);
    //     try {
    //         const result = await get(`${baseUrl}/search?q=${encodeURIComponent(params)}`);
    //         const data = await result.json();
    //         return data;
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // };
    

    
    // const edit = async (gameId, data) => await put(`${baseUrl}/${gameId}`, data);

    // const deleteGame = async (gameId) => await del(`${baseUrl}/${gameId}`);


    return {
        getAllForGame,
        create
    };
}