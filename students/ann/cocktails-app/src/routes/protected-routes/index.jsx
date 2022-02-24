import { Navigate, useLocation } from "react-router-dom";

function ProtectedRoutes({children}) {
    const location= useLocation();

    
    const isOverAge = localStorage.getItem('over18');
    if (isOverAge === null || !isOverAge) {
        return <Navigate to={`/accept-conditions?redirect=${location.pathname+location.search}`} state={{from : location}} replace></Navigate>;
    }
    return children;
}

export default ProtectedRoutes;