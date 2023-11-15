import { get,post,put,del } from './requester';

const baseUrl = 'http://localhost:3030/data/games';

export const gameServiceFactory = (token) => {
    // const request = requester(token);

    const getAll = async () => {
        const result = await get(baseUrl);
        return result;
    };

    const getAllById = async (userId) => {
        const result = await get(`${baseUrl}/my-added-games/${userId}`);
        return result;
    }

    // const searchGame = async (data) => {
    //     const {title} = data;
    //     console.log(title);
    //     const result = await get(`${baseUrl}/${title}`);
    //     console.log(result);
    //     return result;
    // }
    
    const getOne = async (gameId) => {
        const result = await get(`${baseUrl}/${gameId}`);
    
        return result;
    };
    
    const create = async (gameData) => {
        const result = await post(`${baseUrl}/create-game`, gameData);
        return result;
    };
    
    const edit = (gameId, data) => put(`${baseUrl}/${gameId}`, data);

    const deleteGame = (gameId) => del(`${baseUrl}/${gameId}`);


    return {
        getAll,
        getAllById,
        getOne,
        create,
        edit,
        delete: deleteGame,
    };
}