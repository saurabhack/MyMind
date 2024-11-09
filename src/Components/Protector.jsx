// src/Components/Protector.jsx
import { useAuth } from "./AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const Protector = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        // Return a loading spinner or message while Firebase checks the auth state
        return <div>Loading...</div>;
    }
    console.log("children ======", children)
    if (!user) {
        // If the user is not logged in, redirect to login page and preserve the intended location
        return <Navigate to="/"  />
    }
    // If user is logged in, return the protected content
    return children;
};

export default Protector;
