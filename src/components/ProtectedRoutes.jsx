import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Protected({ children, authentication = true }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn) ;
  
 
  

  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);

  const pathName = window.location.pathname;

  useEffect(() => {
    if (
      isLoggedIn && (pathName === "/register" || pathName === "/login" || pathName === "/verify_email" || pathName === "/reset_password"  || pathName === "/password_reset_otp") 
      
    ) {
      
      navigate("/");
    }else if (!isLoggedIn && pathName === "/dashboard") {
      navigate("/");

    }
    setLoader(false);
  }, [ isLoggedIn, authentication, navigate]);

  return loader ? null : <>{children}</>;
}

export default Protected;
