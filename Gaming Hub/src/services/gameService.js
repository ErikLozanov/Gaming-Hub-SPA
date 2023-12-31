import { get,post,put,del } from './requester';

// const baseUrl = 'https://gaming-hub-mongodb-server.onrender.com/data/games';
const baseUrl = 'http://localhost:3030/data/games';

export const gameServiceFactory = (token) => {
    // const request = requester(token);

    const getAll = async () => {
        const result = await get(baseUrl);
        return result;
    };

    const getTrending = async () => {
        const result = await get(`${baseUrl}/trending`);
        return result;
    }

    const getAllById = async (userId) => {
        const result = await get(`${baseUrl}/my-added-games/${userId}`);
        return result;
    }
    
    const getOne = async (gameId) => {
        const result = await get(`${baseUrl}/${gameId}`);
    
        return result;
    };

    const searchGame = async (params) => {
        try {
            const result = await get(`${baseUrl}/search?query=${encodeURIComponent(params)}`);
            return result;
        } catch (error) {
            console.log(error.message);
        }
    };
    
    const create = async (gameData) => {
        const result = await post(`${baseUrl}/create-game`, gameData);
        return result;
    };
    
    const edit = async (gameId, data) => await put(`${baseUrl}/${gameId}`, data);

    const deleteGame = async (gameId) => await del(`${baseUrl}/${gameId}`);


    return {
        getAll,
        getTrending,
        getAllById,
        getOne,
        create,
        edit,
        delete: deleteGame,
        searchGame
    };
}