import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Zod schema for Signup validation
const signupSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.find((user) => user.email === data.email);

    if (userExists) {
      alert("User with this email already exists!");
      return;
    }

    localStorage.setItem("users", JSON.stringify([...users, data]));
    toast.success("Signup successful!", {position:"top-right",autoClose:1000});
    navigate("/login");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-lg rounded-md">
      <h2 className="text-2xl font-bold mb-4 capitalize">Create an account</h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium">
            Name
          </label>
          <input
            id="name"
            type="text"
            {...register("name")}
            className="mt-1 p-2 w-full border rounded-md"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="mt-1 p-2 w-full border rounded-md"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-medium">
            Password
          </label>
          <input
            id="password"
            type="password"
            {...register("password")}
            className="mt-1 p-2 w-full border rounded-md"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <button 
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-500 to-indigo-600 text-white py-2 px-4 rounded-md hover:bg-gradient-to-r hover:from-indigo-600 hover:to-indigo-500 transition ease-in-out duration-300"
        >
          Signup
        </button>
        <div className="flex items-center mt-4 gap-2 justify-start text-sm">
          <input type="checkbox" />
          <p>By signing up, you agree to our terms and conditions.</p>
        </div>

        <div className="flex items-center mt-4 gap-2 justify-start text-sm">
          <p>Already have an account?</p>
          <Link
            to="/login"
            className="text-indigo-500 hover:text-indigo-600 transition ease-in-out duration-300"
          >
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
