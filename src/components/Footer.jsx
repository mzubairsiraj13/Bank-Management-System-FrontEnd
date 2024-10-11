import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="py-3 shadow bg-white">
    <Container>
      <footer className="text-gray-800 py-6 inline-block w-full">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link to="/" className="flex items-center">
               <Logo/>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-2">
              <div>
                <h5 className="text-lg font-semibold mb-2">Company</h5>
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/about"
                      className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="text-lg font-semibold mb-2">Legal</h5>
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/privacy"
                      className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/terms"
                      className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                    >
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} All rights reserved.  <span className="text-blue-700 cursor-pointer hover:underline font-medium">sbl.com </span>
            </p>
          </div>
        </div>
      </footer>
    </Container></div>
  );
};

export default Footer;
