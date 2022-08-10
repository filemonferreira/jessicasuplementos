import { createContext, useContext, useState } from 'react'

interface IUserContext {
    name: string;
}

const AuthContext = createContext<IUserContext | undefined>(undefined);

type AuthProviderProps = {
    children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState({
        name: "Filemon"
    });

    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);



    return context;
}