import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";



const Register = () => {
  const { loginUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);


  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.phone || !/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Valid 10-digit phone number is required";
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
      loginUser(formData);

      toast.success("Registration successful!", {
        position: "top-center",
        autoClose: 2000,
      });
      setSubmitted(true);
      setTimeout(() => {
        navigate("/login");
      }, 2000);
      console.log(formData);
    } else {
      setErrors(formErrors);
    }
  };


  let redDot = <span className="text-red-500">*</span>;

  return (
    <>
      <div className="container  mx-auto mt-10">
        <div className="flex flex-col">
          <span className="font-semibold text-4xl">Registration Form</span>
          <span>
            Register to apply for jobs of your choice all over the world
          </span>
        </div>

        {/* Register Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-lg shadow-lg p-8 bg-white mt-10"
        >
          <div className="mt-3">
            <label htmlFor="name" className="block text-gray-700">
              Full Name{redDot}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Your Full Name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg ${
                errors.name && "border-red-500"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          <div className="mt-7">
            <label htmlFor="email" className="block text-gray-700">
              Email ID{redDot}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your Email Id"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg ${
                errors.email && "border-red-500"
              }`}
            />
            <span className="text-[#717B9E] text-md">
              Job notifications will be sent to this email id
            </span>
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div className="mt-7">
            <label htmlFor="password" className="block text-gray-700">
              Password{redDot}
            </label>
            <input
              type={ "password"}
              id="password"
              name="password"
              placeholder="Minmum 6 Charcters"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg ${
                errors.password && "border-red-500"
              }`}
            />
            <span className="text-[#717B9E] text-md">
              Remember your password
            </span>
          
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>

          <div className="mt-7">
            <label htmlFor="phone" className="block text-gray-700">
              Mobile number{redDot}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter Your Mobile"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg ${
                errors.phone && "border-red-500"
              }`}
            />
            <span className="text-[#717B9E] text-md">
              Recruiters will contact you on this number
            </span>

            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>
          <div className="flex flex-col mt-20">
            <span className="text-[#717B9E]">
              By clicking Register, you agree to the
              <span className="text-[#275DF5]">Terms and Conditions</span>&
              &nbsp;
              <span className="text-[#275DF5]">Privacy Policy</span>
              &nbsp; of AlwaysApply.com
            </span>

            <button
              type="submit"
              className="bg-[#6300B3] mt-4 text-white px-4 font-semibold py-2 rounded-lg w-[200px]"
            >
              Register now
            </button>
          </div>
        </form>

        <ToastContainer />
      </div>
    </>
  );
};

export default Register;
