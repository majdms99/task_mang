import { Navigate } from "react-router-dom";

export const AuthRoute = ({ children }) => {
    const token = localStorage.getItem('api_token');

    if (token) {
        return <Navigate to="/" replace />;
    }

    return children;
};
