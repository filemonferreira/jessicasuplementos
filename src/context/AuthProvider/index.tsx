import React, { createContext, useEffect, useState } from 'react'
import { api } from '../../services/api'
import { IAuthProvider, IContext, IUser } from './types'
import { getTokenLocalStorage, LoginRequest, removeLocalStorage, setTokenLocalStorage } from './util'

export const AuthContext = createContext<IContext>({} as IContext)


export const AuthProvider = ({ children }: IAuthProvider) => {
    const [user, setUser] = useState<IUser | null>();
    const [loading, setLoading] = useState(false)

    async function handleAuth(token: string) {
        setLoading(true);
        const response = await api.post('/auth', { token });

        try {

            if (response.data.error) {
                setUser(null);
                removeLocalStorage()
                setLoading(false)
                return;
            }

            setUser(response.data.user[0]);
            setLoading(false)
            return;

        } catch (error) {
            setUser(null);
            removeLocalStorage()
            setLoading(false)
        }
    }

    useEffect(() => {
        const token = getTokenLocalStorage();
        if (token) {

            handleAuth(token);
        }


    }, []);

    async function authenticate(email: string, password: string) {
        setLoading(true)
        const response = await LoginRequest(email, password);
        console.log(response)


        setUser(response.user[0]);
        setTokenLocalStorage(response.token);
        setLoading(false)
    }

    function logout() {
        setUser(null);
        removeLocalStorage()
    }

    return (
        <AuthContext.Provider value={{ ...user, authenticate, logout, loading }}>
            {children}
        </AuthContext.Provider>
    )
}