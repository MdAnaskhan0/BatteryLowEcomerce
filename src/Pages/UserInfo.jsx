import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { Navigate } from "react-router-dom";

const UserInfo = () => {
  const [user, setUser] = useState(null); 
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");

   
    setTimeout(() => {
      if (storedUser) {
        setUser(JSON.parse(storedUser)); 
      } else {
        setUser(null); 
      }
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

  // If no user found in localStorage, redirect to login page
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="container  mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">User Information</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <FaUser className="text-8xl text-indigo-600 mb-4" />
        <h2 className="text-xl font-semibold mb-4">Personal Details</h2>
        <p className="text-lg">Name: {user.name}</p>
        <p className="text-lg">Email: {user.email}</p>
        <p className="text-lg">Phone: {user.phone || "N/A"}</p>
        <p className="text-lg">Address: {user.address || "N/A"}</p>
      </div>
    </div>
  );
};

export default UserInfo;
