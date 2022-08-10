import Redirect, { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider/useAuth"
import { getTokenLocalStorage } from "../../context/AuthProvider/util";


export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
    const userLocal = getTokenLocalStorage();

    const auth = useAuth();

    if (!userLocal) {
        return <Navigate to="/login" />
    }

    return children;

}