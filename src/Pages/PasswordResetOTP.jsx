import React, { useState } from 'react'
import Container from '../components/Container'
import CustomButton from '../components/CustomButton'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import axios from 'axios';
import { baseUrl } from '../constants/constants';
import { useNavigate } from 'react-router-dom';

const PasswordResetOTP = () => {
    const [resetPasswordOTP, setResetPasswordOTP] = useState("");
    const [isLoading, setisLoading] = useState(false);
    const [isPasswordReset, setIsPasswordReset] = useState(false);
    const [passwordData, setpasswordData] = useState({
        password: '',
        confirmPassword: ''
    })
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };
    

    const  handleResetPasswordOtpChange = (e) =>
        {
         setResetPasswordOTP(e.target.value)
        }

    const  handlePasswordChange = (e) => {
        e.preventDefault();
         let password = {...passwordData, [e.target.name]: e.target.value}
         setpasswordData(password)
        console.log(passwordData);
        
    }
    const handleVerifyOTP = async (e)=> {

      console.log(resetPasswordOTP);
      
        e.preventDefault();
        try {
          setisLoading(true)
          const resetOtpResponse = await axios.post(`${baseUrl}/user/verify_password_reset_otp`,{passwordResetOtp: resetPasswordOTP}, 
            {
              withCredentials: true
            }
          )
  
          if (resetOtpResponse?.data?.statusCode === 200) {
            setIsPasswordReset(true)
            toast.success(resetOtpResponse?.data?.message)
          }
        } catch (error) {
          console.log(error);
          
          toast.error(error.response?.data?.message || "An error occured!");
        } 
        finally{
          setisLoading(false);
      } }
   const handleResetPasswordSubmit = async (e)=> {
    e.preventDefault();
    if (passwordData.password !== passwordData.confirmPassword) {
      return toast.warn("Both Password Must be same!");
    }

    try {
      setisLoading(true);
      const passwordResetResponse = await axios.post(`${baseUrl}/user/change_password`,{password: passwordData.password},
        {
          withCredentials: true
        }
      )

      if (passwordResetResponse?.data?.statusCode === 200) {
        toast.success(passwordResetResponse?.data?.message)
        navigate("/login")
      }
    } catch (error) {
     
      
      toast.error(error.response?.data?.message || "An error occured!");
    } 
    finally{
      setisLoading(false);
  }
   }
  return (
    <Container>
    <div className="flex justify-center items-center flex-col gap-6 py-8 z-10">
      <div className="w-full max-w-sm">
        <form
          method='post'
          className="w-full py-8 px-6 flex flex-col gap-6 shadow-xl rounded-lg border bg-white"
        >
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
             {isPasswordReset ? "Confirm Password " : "Verify OTP to Reset Password"} 
            </h2>
            <p className="text-gray-600 text-sm mt-2">
            {isPasswordReset ? "Set New Password" : "Enter The OTP sent to your email"} 

            </p>
          </div>
  
          
            {isPasswordReset ? <>
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Choose a Strong Password"
                className="w-full outline-none bg-gray-100 border border-gray-300 focus:border-blue-500 placeholder:text-gray-400 py-2 px-4 rounded-lg shadow-sm"
                value={passwordData.password}
                onChange={handlePasswordChange}
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
            <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Enter Again"
                className="w-full outline-none bg-gray-100 border border-gray-300 focus:border-blue-500 placeholder:text-gray-400 py-2 px-4 rounded-lg shadow-sm"
                value={passwordData.confirmPassword}
                onChange={handlePasswordChange}
              />
          <CustomButton
            className="mt-4"
            isLoading={isLoading}
            BtnText="Submit"
            OnClick={handleResetPasswordSubmit}
          /></>:<><div className="w-full"><input
              type="text"
              name="emailVerificationOTP"
              placeholder="Enter OTP"
              className="w-full outline-none bg-gray-100 border border-gray-300 focus:border-blue-500 placeholder:text-gray-400 py-2 px-4 rounded-lg shadow-sm"
              value={resetPasswordOTP}
              onChange={handleResetPasswordOtpChange}
            />
          </div>
          <CustomButton
            className="mt-4"
            isLoading={isLoading}
            BtnText="Verify OTP"
            OnClick={handleVerifyOTP}
          /></> }
        </form>
      </div>
    </div>
  </Container>
  )
}

export default PasswordResetOTP