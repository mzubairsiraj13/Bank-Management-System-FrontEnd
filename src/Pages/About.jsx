import React from "react";
import Container from "../components/Container";
import CustomerExperience from "../components/CustomerExperience";

const About = () => {
  return (
    <Container>
      <div className="flex items-center justify-center min-h-screen  w-full ">
        <div className="bg-white  rounded-lg shadow-lg w-full px-4 py-4">
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">
            About Us
          </h2>

          
          <p className="text-lg text-gray-500 mb-6 text-center ">
            Welcome to <span className="font-semibold text-blue-600">SBL</span>,
            where we’ve been dedicated to building trust and providing
            exceptional financial services for our customers. We strive to meet
            your financial needs with the highest level of integrity and
            professionalism.
          </p>

        
          <div className="mb-6 text-center">
            <h3 className="text-2xl font-bold text-blue-600 mb-4 ">
              Our Mission
            </h3>
            <p className="text-gray-500 text-base">
              Our mission is to empower individuals, businesses, and communities
              by providing secure, reliable, and innovative banking solutions.
              We aim to help you achieve financial success through personalized
              and accessible banking services, backed by a commitment to
              transparency and trust.
            </p>
          </div>

          
          <div className="mb-6 text-center">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-500 text-base">
              We envision a world where financial services are accessible to
              everyone, empowering individuals and businesses to thrive in a
              secure and inclusive economy. We aspire to be your trusted
              financial partner, fostering growth, innovation, and
              sustainability in everything we do.
            </p>
          </div>

          <div className="flex justify-center items-center flex-col">
            <h3 className="text-2xl font-bold text-blue-500 mb-4 text-center">
              Our Core Values
            </h3>
            <CustomerExperience />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
