import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import ageRestriction from "../../context/restriction";


function ProtectedRoutes({ children }) {
    const location = useLocation();
    const [over18] = useContext(ageRestriction);
    if (!over18) {
        return <Navigate to={`/accept-conditions?redirect=${location.pathname + location.search}`} state={{ from: location }} replace></Navigate>;
    }
    return children;
}

export default ProtectedRoutes;