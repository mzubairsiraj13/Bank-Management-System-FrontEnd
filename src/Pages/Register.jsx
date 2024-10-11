import React, { useState } from "react";
import Container from "../components/Container";
import Logo from "../components/Logo";
import CustomButton from "../components/CustomButton";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import { baseUrl } from "../constants/constants";
import { toast } from "react-toastify";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const RegisterPage = () => {
  const [userFormData, setUserFormData] = useState({
    firstName: "",
    lastName: "",
    cnicNumber: "",
    dateOfBirth: "",
    phoneNumber: "",
    userAddress: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const userData = { ...userFormData, [e.target.name]: e.target.value };
    setUserFormData(userData);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (
      !userFormData.firstName ||
      !userFormData.lastName ||
      !userFormData.cnicNumber ||
      !userFormData.dateOfBirth ||
      !userFormData.email ||
      !userFormData.phoneNumber ||
      !userFormData.userAddress ||
      !userFormData.password
    ) {
      toast.error("All Flieds are required!");

      return;
    }
    if (userFormData.password !== userFormData.confirmPassword) {
      toast.error("Password and confirm must be same!");

      return;
    }
    setIsLoading(true);
    try {
      const user = await axios.post(`${baseUrl}/user/register`, userFormData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (user.data.statusCode == 200) {
        toast.success(user?.data?.message);
        navigate("/login");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occured!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <div className="flex justify-center items-center flex-col gap-8 my-8 px-4 py-6">
        <div className="w-full max-w-lg">
          <form
            method="POST"
            className="flex flex-col p-6 gap-6 shadow-xl rounded-lg border bg-white"
          >
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Welcome to <Logo />
              </h2>
              <p className="text-gray-600 text-sm mt-2">
                Enter correct details to process your account registration
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                <div>
                <input
                  onChange={handleChange}
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="w-full outline-none bg-gray-100 border border-gray-300 focus:border-blue-500 placeholder:text-gray-400 py-2 px-4 rounded-lg shadow-sm "
                  value={userFormData.firstName}
                  required
                /></div>
                <div>
                <input
                  onChange={handleChange}
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="w-full outline-none bg-gray-100 border border-gray-300 focus:border-blue-500 placeholder:text-gray-400 py-2 px-4 rounded-lg shadow-sm"
                  value={userFormData.lastName}

                /></div>
              </div>

              <input
                onChange={handleChange}
                type="text"
                name="cnicNumber"
                placeholder="CNIC Number (14 digits)"
                className="w-full outline-none bg-gray-100 border border-gray-300 focus:border-blue-500 placeholder:text-gray-400 py-2 px-4 rounded-lg shadow-sm"
                value={userFormData.cnicNumber}

              />

              <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                <input
                  onChange={handleChange}
                  type="date"
                  name="dateOfBirth"
                  placeholder="Date of Birth"
                  className="flex-1 outline-none bg-gray-100 border border-gray-300 focus:border-blue-500 placeholder:text-gray-400 py-2 px-4 rounded-lg shadow-sm"
                  value={userFormData.dateOfBirth}

                />
                <input
                  onChange={handleChange}
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  className="flex-1 outline-none bg-gray-100 border border-gray-300 focus:border-blue-500 placeholder:text-gray-400 py-2 px-4 rounded-lg shadow-sm"
                  value={userFormData.phoneNumber}

                />
              </div>

              <input
                onChange={handleChange}
                type="text"
                name="userAddress"
                placeholder="Address as per CNIC"
                className="w-full outline-none bg-gray-100 border border-gray-300 focus:border-blue-500 placeholder:text-gray-400 py-2 px-4 rounded-lg shadow-sm"
                value={userFormData.userAddress}

              />

              <input
                onChange={handleChange}
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full outline-none bg-gray-100 border border-gray-300 focus:border-blue-500 placeholder:text-gray-400 py-2 px-4 rounded-lg shadow-sm"
                value={userFormData.email}

              />

              <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
              <div className="w-1/2 relative">
              <input
                  onChange={handleChange}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="w-full outline-none bg-gray-100 border border-gray-300 focus:border-blue-500 placeholder:text-gray-400 py-2 px-4 rounded-lg shadow-sm"
                  value={userFormData.password}

                />
                 <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? (
                      <FaRegEyeSlash size={20} color="blue" />
                    ) : (
                      <FaRegEye size={20} color="blue" />
                    )}
                  </button>
                  </div>
                <div className="w-1/2 relative mr-5">
                  <input
                    onChange={handleChange}
                    type={showPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className="w-full outline-none bg-gray-100 border border-gray-300 focus:border-blue-500 placeholder:text-gray-400 py-2 px-4 rounded-lg shadow-sm"
                  value={userFormData.confirmPassword}

                  />
                 
                </div>
              </div>

              <CustomButton
                className="mt-4"
                isLoading={isLoading}
                BtnText="Register Now"
                OnClick={handleFormSubmit}
              />

              <div className="text-xs text-gray-600 text-center mt-4">
                Already have an account?{" "}
                <Link
                  className="font-semibold text-blue-600 hover:underline"
                  to="/login"
                >
                  Log in
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default RegisterPage;
