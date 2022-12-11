import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const isUserLogined = localStorage.getItem("isLogined");

    if (!isUserLogined) {
        return <Navigate to="/login" />;
    }

    return children;
}

export default ProtectedRoute;