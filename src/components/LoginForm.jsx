import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { loginUser, user } = useContext(UserContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    emailOrUsername: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.emailOrUsername)
      newErrors.emailOrUsername = "Email/Username is required";
    if (!formData.password) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (
        storedUser &&
        (storedUser.email === formData.emailOrUsername ||
          storedUser.name === formData.emailOrUsername) &&
        storedUser.password === formData.password
      ) {
        loginUser(formData);

        toast.success("Login successful!", {
          position: "top-center",
          autoClose: 2000,
        });

        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      } else {
        toast.error("Invalid email/username or password!", {
          position: "top-center",
          autoClose: 3000,
        });
      }
    } else {
      setErrors(formErrors);
    }
  };

  // Function to toggle the visibility of the password
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="container-max">
        <div className="w-full">
          <div className="w-1/2">
            <div className="">
              {/* Login Form */}
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-lg p-8 shadow-lg"
              >
                <div className="mt-3">
                  <label
                    htmlFor="emailOrUsername"
                    className="block text-gray-700"
                  >
                    Email/Username
                  </label>
                  <input
                    type="text"
                    id="emailOrUsername"
                    name="emailOrUsername"
                    placeholder="Enter your Email or Username"
                    value={formData.emailOrUsername}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg ${
                      errors.emailOrUsername && "border-red-500"
                    }`}
                  />
                  {errors.emailOrUsername && (
                    <p className="text-red-500 text-sm">
                      {errors.emailOrUsername}
                    </p>
                  )}
                </div>

                <div className="mt-7 relative">
                  <label htmlFor="password" className="block text-gray-700">
                    Password
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg ${
                      errors.password && "border-red-500"
                    }`}
                  />
                  {/* Eye icon to toggle password visibility */}
                  <div
                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-sm">{errors.password}</p>
                  )}
                </div>

                <div className="flex flex-col mt-10">
                  <button
                    type="submit"
                    className="bg-[#6300B3] text-white px-4 font-semibold py-2 rounded-lg w-[200px]"
                  >
                    Login
                  </button>
                </div>

                <div className="flex justify-end mt-4">
                  <a href="/forgot-password" className="text-[#275DF5]">
                    Forgot Password?
                  </a>
                </div>
              </form>
            </div>
          </div>
          <div className="w-1/2">
            <img
              src="https://source.unsplash.com/800x600/?coding,office"
              alt="Login illustration"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
