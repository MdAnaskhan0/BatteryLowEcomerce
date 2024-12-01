import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(null); 

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    setIsLoggedIn(!!user);
  }, []);

  if (isLoggedIn === null) return null; 

  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
