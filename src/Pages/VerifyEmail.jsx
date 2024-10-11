import React, { useState } from 'react'
import Container from '../components/Container'
import CustomButton from '../components/CustomButton'
import axios from 'axios'
import { baseUrl } from '../constants/constants'
import { toast } from 'react-toastify'
import { logIn } from '../features/AuthSlice'
import { useDispatch } from 'react-redux'

const VerifyEmail = () => {

    const [emailVerifyOTP, setEmailVerifyOTP] = useState("")
    const [isLoading,setisLoading] = useState(false);

    const dispatch = useDispatch();


   const  handleChange = (e) =>
   {
    setEmailVerifyOTP(e.target.value)
   }


    console.log(emailVerifyOTP);
    
    const handleVerifyOTP = async (e)=> {
      e.preventDefault();
      try {
        setisLoading(true)
        const emailVerificationResponse = await axios.post(`${baseUrl}/user/verify_email`,{emailVerificationOTP: emailVerifyOTP}, {
          withCredentials: true,
        credentials: "include",
        })

        if (emailVerificationResponse?.data?.statusCode === 200) {
          const user = JSON.parse(JSON.stringify(emailVerificationResponse?.data?.data?.user));
          dispatch(logIn({user}));
          toast.success(emailVerificationResponse?.data?.message)
        }
      } catch (error) {
        toast.error(error.response?.data?.message || "An error occured!");
      } 
      finally{
        setisLoading(false);
    } }
    const handleResendOTP = async (e)=> {
      e.preventDefault();
      try {
        const resendOtp = await axios.get(`${baseUrl}/user/resend_otp`, {
          withCredentials: true,
        credentials: "include",
        })
        console.log(resendOtp?.data);
        
        if (resendOtp?.data.statusCode) {
          toast.success(resendOtp?.data?.message)
          
        } 
      } catch (error) {
        toast.error(error.response?.data?.message || "An error occured!");
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
            Verify Your Email
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            Enter the OTP sent to your email
          </p>
        </div>

        <div className="w-full">
          <input
            type="text"
            name="emailVerificationOTP"
            placeholder="Enter OTP"
            className="w-full outline-none bg-gray-100 border border-gray-300 focus:border-blue-500 placeholder:text-gray-400 py-2 px-4 rounded-lg shadow-sm"
            value={emailVerifyOTP}
            onChange={handleChange}
          />
        </div>
        <CustomButton
          className="mt-4"
          isLoading={isLoading}
          BtnText="Verify OTP"
          OnClick={handleVerifyOTP}
        />

        <div className="text-xs text-gray-600 text-center mt-4">
          Didn't receive the OTP?{" "}
          <button
            type="button"
            className="font-semibold text-blue-600 hover:underline"
            onClick={handleResendOTP}
          >
            Resend
          </button>
        </div>
      </form>
    </div>
  </div>
</Container>

  )
}

export default VerifyEmail;