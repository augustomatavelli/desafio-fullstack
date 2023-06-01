import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
    const { loading } = useContext(UserContext);

    if (loading) {
        return null;
    }

    const token = localStorage.getItem("@TOKEN");

    return token ? <Outlet /> : <Navigate to="/login" />;
}