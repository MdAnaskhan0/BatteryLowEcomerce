import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    setTimeout(() => {
      setIsLoggedIn(!!user);
      setIsLoading(false);
    }, 500);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="spinner-border animate-spin w-16 h-16 border-4 border-indigo-200 border-t-indigo-500 rounded-full"></div>
        <p className="ml-4 text-lg">Loading user information...</p>
      </div>
    );
  }

  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
