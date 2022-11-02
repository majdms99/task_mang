import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('api_token');

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    return children;
};
