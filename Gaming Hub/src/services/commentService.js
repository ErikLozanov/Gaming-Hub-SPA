import { get,post,put,del } from './requester';

// const baseUrl = 'http://localhost:3030/data/comments';
const baseUrl = 'https://gaming-hub-mongodb-server.onrender.com//data/comments';

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

    const edit = async (text, gameId, commentId, commentDate) => {
        const result = await put(`${baseUrl}/${gameId}/${commentId}`, {text, gameId, commentDate});
        return result;
    }

    const delComment = async (gameId, commentId) => await del(`${baseUrl}/${gameId}/${commentId}`);


    return {
        getAllForGame,
        create,
        edit,
        delComment
    };
}