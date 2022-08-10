export interface IUser {
    id?: string;
    id_indicated?: string;
    name?: string;
    email?: string;
    phone?: string;
    photo?: string;
    account_type?: string;
    sexo?: string
    indicated_code?: string
    active?: string
}

export interface Itoken {
    token?: string;
}

export interface IContext extends IUser {
    authenticate: (email: string, password: string) => Promise<void>
    logout: () => void;
    loading: boolean
}

export interface IAuthProvider {
    children: JSX.Element;
}