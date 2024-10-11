import React from "react";
import { CiFacebook, CiInstagram, CiLinkedin, CiYoutube } from "react-icons/ci";
import { IoIosPhonePortrait } from "react-icons/io";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse md:flex-row  items-center text-center">
          <div className="flex-1 p-10">
            {" "}
            <h1 className="text-2xl font-bold text-center mb-4">
              Your Financial Future Starts Here
            </h1>
            <p className="text-gray-500 mb-8">
              Secure, simple, and fast banking solutions tailored just for you.
            </p>
            <div className="flex flex-row items-center justify-center gap-4">
              <Link
                to="/login"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 transition duration-150 ease-in-out"
              >
                Get Started!
              </Link>
              <Link
                to="/register"
                className="inline-flex items-center px-4 py-2 border border-blue-700 text-base leading-6 font-medium rounded-md text-blue-700  hover:border-transparent hover:text-white hover:bg-blue-700 transition duration-150 ease-in-out"
              >
                Learn More
              </Link>
            </div>
            <div className="flex flex-row justify-center md:justify-start items-center py-4 mt-10">
              <div className="flex items-center border-r border-gray-300 px-4">
                <IoIosPhonePortrait size={25} color="blue" />
                <span>111 111 111</span>
              </div>
              <div className="flex items-center gap-2 ml-4">
                <CiFacebook size={25} color="blue" />
                <CiYoutube size={25} color="red" />
                <CiLinkedin size={25} color="blue" />
                <CiInstagram size={25} color="purple" />
              </div>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="/HeroImg.jpg"
              alt="Hero Section Image"
              className="mix-blend-multiply w-full h-full"
              
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
