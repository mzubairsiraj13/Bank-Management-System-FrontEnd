import React, { useState } from "react";
import Container from "./Container";

import { Link } from "react-router-dom";
import LogoutBtn from "./LogoutBtn";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "./Logo";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Contact Us",
      slug: "/contact",
      active: false,
    },
    {
      name: "About Us",
      slug: "/about",
      active: false,
    },
  ];

  return (
    <header className="pb-3 shadow bg-white mb-4 h-14">
      <Container>
        <nav className="relative flex items-center justify-between sm:h-10 md:justify-center md:py-6 px-4 mt-2">
          <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <Link to="/" aria-label="Home">
                <Logo />
              </Link>
              <div className="-mr-2 flex items-center md:hidden">
                <button
                  type="button"
                  id="main-menu"
                  aria-label="Main menu"
                  aria-haspopup="true"
                  onClick={toggleMenu}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                >
                  <svg
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div
            className={`w-64 absolute right-11 top-14 shadow-md border border-blue-100 rounded-md   md:hidden z-40 ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <div className="rounded-lg shadow-md ring-1 ring-black ring-opacity-5 bg-white">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <Link
                    to={item.slug}
                    className={`block px-3 py-2 text-base font-medium text-gray-900 hover:bg-blue-500 rounded-md w-full `}
                    key={item.name}
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="px-2 pt-2 pb-3">
                {isLoggedIn ? <LogoutBtn/> : <><Link
                  to="/login"
                  className="block px-4 py-2 text-base font-medium text-blue-600 hover:text-blue-500"
                  onClick={toggleMenu}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block px-4 py-2 text-base font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-md text-center"
                  onClick={toggleMenu}
                >
                  Create Account
                </Link> </>}
              </div>
            </div>
          </div>
          <div className="hidden md:flex md:space-x-10">
          {navItems.map((item) => (
                  <Link
                    to={item.slug}
                    className={`block px-3 py-2 text-base font-medium text-gray-900 hover:scale-105 hover:text-blue-700  ease-in-out`}
                    key={item.name}
                  >
                    {item.name}
                  </Link>
                ))}
          </div>
          <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
          {isLoggedIn ? <LogoutBtn/> : <><span className="inline-flex">
              <Link
                to="/login"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium text-blue-600 hover:text-blue-500 focus:outline-none transition duration-150 ease-in-out"
              >
                Login
              </Link>
            </span>
            <span className="inline-flex rounded-md shadow ml-2">
              <Link
                to="/register"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 transition duration-150 ease-in-out"
              >
                Create Account
              </Link>
            </span> </>}
            
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;

