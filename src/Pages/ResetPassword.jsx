import React, { useState } from "react";
import Container from "../components/Container";
import CustomButton from "../components/CustomButton";
import axios from "axios";
import { baseUrl } from "../constants/constants";
import { toast } from "react-toastify";
import { logIn } from "../features/AuthSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const ResetPasword = () => {
  const [cnicNumber, setCnicNumber] = useState("");
  const [isLoading, setisLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleChange = (e) => {
    setCnicNumber(e.target.value);
  };

  console.log(cnicNumber);

  const handlePasswordResetOTP = async (e) => {
    e.preventDefault();
    try {
      setisLoading(true);
      const resetOtpResponse = await axios.post(
        `${baseUrl}/user/password_reset_otp`,
        { cnicNumber: cnicNumber },
        {
          withCredentials: true
        }
        
      );

      if (resetOtpResponse?.data?.statusCode === 200) {
        navigate('/password_reset_otp')
        toast.success(resetOtpResponse?.data?.message);
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
            method="post"
            className="w-full py-8 px-6 flex flex-col gap-6 shadow-xl rounded-lg border bg-white"
          >
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Reset Password
              </h2>
              <p className="text-gray-600 text-sm mt-2">
                Enter CNIC Number To get Password Reset OTP in email Linked with your account.
              </p>
            </div>

            <div className="w-full">
              <input
                type="text"
                name="cnicNumber"
                placeholder="Enter CNIC"
                className="w-full outline-none bg-gray-100 border border-gray-300 focus:border-blue-500 placeholder:text-gray-400 py-2 px-4 rounded-lg shadow-sm"
                value={cnicNumber}
                onChange={handleChange}
              />
            </div>
            <CustomButton
              className="mt-4"
              isLoading={isLoading}
              BtnText="Reset Now"
              OnClick={handlePasswordResetOTP}
            />
          </form>
        </div>
      </div>
    </Container>
  );
};

export default ResetPasword;
