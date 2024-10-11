import React, { useState } from "react";
import CustomButton from "../components/CustomButton";

import Container from "../components/Container";
import Logo from "../components/Logo";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { baseUrl } from "../constants/constants";
import { logIn } from "../features/AuthSlice";
import { useDispatch } from "react-redux";

import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const LoginPage = () => {
  const [userFormData, setuserFormData] = useState({
    cnicNumber: "",
    password: "",
  });
  const [isLoading, setisLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const userData = { ...userFormData, [e.target.name]: e.target.value };
    setuserFormData(userData);
  };

  const handleLoginForm = async (e) => {
    e.preventDefault();
    if (!userFormData.cnicNumber || !userFormData.password) {
      toast.error("All Flieds are required!");
      return;
    }
    setisLoading(true);

    try {
      const user = await axios.post(`${baseUrl}/user/login`, userFormData, {
        withCredentials: true,
        credentials: "include",
      });


     
      
       if (user?.data?.statusCode === 403) {

        toast.error(user?.data?.message);
        navigate("/verify_email");
       }

      if (user?.data?.statusCode === 200) {
        const plainUser = JSON.parse(JSON.stringify(user?.data?.data?.user));
        dispatch(logIn({ user: plainUser }));
        toast.success(user?.data?.message);
      }
    } catch (error) {
  
   

      toast.error(error.response?.data?.message || "An error occured!");
    } finally {
      setisLoading(false);
    }
  };
  return (
    <Container>
      <div className="flex justify-center items-center flex-col gap-6 py-8 z-10">
        <div className="w-full max-w-sm">
          <form
            action=""
            className="w-full py-8 px-6 flex flex-col gap-6 shadow-xl rounded-lg border bg-white"
          >
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Welcome Back to <Logo />
              </h2>
              <p className="text-gray-600 text-sm mt-2">
                Log in to your account
              </p>
            </div>

            <div className="w-full">
              <input
                type="text"
                name="cnicNumber"
                placeholder="Enter Your 14-digit CNIC Number"
                className="w-full outline-none bg-gray-100 border border-gray-300 focus:border-blue-500 placeholder:text-gray-400 py-2 px-4 rounded-lg shadow-sm"
                value={userFormData.cnicNumber}
                onChange={handleChange}
              />
            </div>

            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter Your Password"
                className="w-full outline-none bg-gray-100 border border-gray-300 focus:border-blue-500 placeholder:text-gray-400 py-2 px-4 rounded-lg shadow-sm"
                value={userFormData.password}
                onChange={handleChange}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center justify-center"
              >
                {showPassword ? (
                  <FaRegEyeSlash size={20} color="blue" />
                ) : (
                  <FaRegEye size={20} color="blue" />
                )}
              </button>
            </div>
              <div className="mt-2 text-gray-400 text-xs">Forgotten Password? <Link to={"/reset_password"} className="text-blue-600">Reset Now</Link></div>

            <CustomButton
              className="mt-2"
              isLoading={isLoading}
              BtnText="Log In"
              OnClick={handleLoginForm}
            />

            <div className="text-xs text-gray-600 text-center mt-4">
              Don't have an account?{" "}
              <Link
                className="font-semibold text-blue-600 hover:underline"
                to="/register"
              >
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default LoginPage;
