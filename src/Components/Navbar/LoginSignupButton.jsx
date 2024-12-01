
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
const LoginSignupButton = () => {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const userInformation = localStorage.getItem("currentUser");
  const user = userInformation ? JSON.parse(userInformation) : null;

  if (user) {
    return (
      <div className="flex gap-5 items-center text-md font-medium">
        <span className="text-gray-600"><Link to={'/user'}>{user.name}</Link></span>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="flex gap-5 items-center text-md font-medium">
      {isLoggedIn ? (
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Logout
        </button>
      ) : (
        <>
          <Link
            to="/login"
            className="px-4 py-2 bg-gray-200 rounded-md text-gray-600 hover:text-gray-800"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 bg-gray-200 rounded-md text-gray-600 hover:text-gray-800"
          >
            Signup
          </Link>
        </>
      )}
    </div>
  );
};

export default LoginSignupButton;
