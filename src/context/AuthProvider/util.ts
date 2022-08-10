
import { api } from "../../services/api";
import { Itoken, IUser } from "./types";


export function setUserLocalStorage(user: IUser | null) {
    localStorage.setItem('@jessicasuplementos:user', JSON.stringify(user));
}

export function setTokenLocalStorage(token: Itoken | null) {
    localStorage.setItem('@jessicasuplementos:token', `${token}`);
}

export function removeLocalStorage() {
    localStorage.removeItem('@jessicasuplementos:user')
    localStorage.removeItem('@jessicasuplementos:token')
}

export function getUserLocalStorage() {
    const json = localStorage.getItem('@jessicasuplementos:user');

    if (!json) {
        return null;
    }

    const user = JSON.parse(json);

    return user ?? null;
}

export function getTokenLocalStorage() {
    const json = localStorage.getItem('@jessicasuplementos:token');

    if (!json) {
        return null;
    }

    return json ?? null;
}

export async function LoginRequest(email: string, password: string) {
    try {
        const request = await api.post('/login', { email, password });

        if (request.data.token == undefined) {

            return
        }

        return request.data;
    } catch (error) {
        return null;

    }
}