import { useContext } from "react";
import { useLocation, Navigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";

function RequireAuth({ children }) {

  let {isAuthenticated} = useContext(AuthContext);
  let location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAuth;