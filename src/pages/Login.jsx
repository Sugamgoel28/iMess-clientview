import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import nitrLogo from "../assets/nitrlogo.png";
import { useNavigate } from "react-router-dom";
// Import your logos with a relative path

function Login() {
  const navigate = useNavigate();

  const [role, setRole] = React.useState("Student");

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., validate credentials, make API calls, etc.)
    // You can use state or context to manage user authentication
    if (role === "Admin") navigate("/admin/dashboard");
    else navigate("/homepage");
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic here (e.g., show a modal, navigate to a reset password page, etc.)
    console.log("User clicked forgot password!");
  };

  const handleRole = () => {
    if (role === "Student") setRole("Admin");
    else setRole("Student");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 flex-col">
      <div>
        <p className="font-semibold bg-purple-500 p-3 border-black rounded-md text-white">
          {role} Login
        </p>
      </div>
      <div className="p-8 text-left bg-white rounded shadow-md w-96">
        <div className="flex items-center mb-4">
          {/* Display the resized logo on the left */}
          <img src={nitrLogo} alt="NIT Logo" className="w-16 h-16" />

          {/* Text on the right side of the logo */}
          <div className="ml-4">
            <p className="text-lg font-bold">NIT Rourkela</p>
            <p className="text-sm">Sign in to Mess portal</p>
          </div>
        </div>

        {/* Line and background for icons */}
        <div className="p-4 mb-4 bg-gray-200 rounded">
          <div className="flex items-center justify-center pb-2 mb-2 border-b border-gray-300">
            <PersonIcon />
            <input
              type="text"
              placeholder="Roll Number"
              className="w-full px-4 py-2 ml-2 focus:outline-none"
            />
          </div>
          <div className="flex items-center justify-center">
            <LockIcon />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 ml-2 focus:outline-none"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none"
          onClick={handleLogin}
        >
          Sign In
        </button>
        <p
          className="mt-4 text-right text-blue-500 cursor-pointer hover:underline"
          onClick={handleForgotPassword}
        >
          Forgot Password?
        </p>
      </div>
      <button
        className="p-4 font-sans text-lg font-bold text-gray-600 bg-gray-200 rounded hover:bg-gray-400 mt-1"
        onClick={handleRole}
      >
        {role} Login
      </button>
    </div>
  );
}

export default Login;
