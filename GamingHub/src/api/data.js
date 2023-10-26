import * as api from './api.js';


const host = 'http://localhost:3030';
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

// Implement application-specific requests
export async function getGame() {
    return await api.get(host + '/data/games');
}

export async function getItemById(id) {
    return await api.get(host + '/data/games/' + id);
}

export async function getMyGame() {
    const userId = sessionStorage.getItem('userId');
    return await api.get(host + `/data/games?where=_ownerId%3D%22${userId}%22`);
}

export async function createRecord(data) {
    return await api.post(host + '/data/games', data);
}

export async function editRecord(id, data) {
    return await api.put(host + '/data/games/' + id, data);
}

export async function deleteRecord(id) {
    return await api.del(host + '/data/games/' + id);
}