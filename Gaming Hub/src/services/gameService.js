import { get,post,put,del } from './requester';

const baseUrl = 'http://localhost:3030/data/games';

export const gameServiceFactory = (token) => {
    // const request = requester(token);

    const getAll = async () => {
        const result = await get(baseUrl);
        const games = Object.values(result);
    
        return games;
    };
    
    const getOne = async (gameId) => {
        const result = await get(`${baseUrl}/${gameId}`);
    
        return result;
    };
    
    const create = async (gameData) => {
        const result = await post(baseUrl, gameData);
    
        console.log(result);
    
        return result;
    };
    
    const edit = (gameId, data) => put(`${baseUrl}/${gameId}`, data);

    const deleteGame = (gameId) => del(`${baseUrl}/${gameId}`);


    return {
        getAll,
        getOne,
        create,
        edit,
        delete: deleteGame,
    };
}