import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import { baseUrl } from "../constants/constants";
import { toast } from "react-toastify";
import { logOut } from "../features/AuthSlice";
import { LuLogOut } from "react-icons/lu";
import { Link } from "react-router-dom";

function LogoutBtn({isDashBoard = false}) {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [isDashboardVisible, setIsDashboardVisible] = useState(false);
  const user = useSelector((state)=> state.auth.user);
  const dispatch = useDispatch();
  
  
  
  
  
  const getInitials = (name = '') => {
    
    const [firstName = "", lastName = ""] = name.trim().split(" ");
    
    
    return `${firstName?.charAt(0)}${lastName?.charAt(0)}`.toUpperCase();
  };
  const lougoutHandler = async (e) => {
    e.preventDefault();
    try {
      const logout = await axios.get(`${baseUrl}/user/logout`, {
        withCredentials: true,
        credentials: "include",
      });
      if (logout.data.statusCode === 200) {
        dispatch(logOut());
        toast.success(logout.data.message);
      }
    } catch (error) {
      if(error?.response?.status)
      {
        toast.success("Session Expired! Logout successed!");
        dispatch(logOut());
      }

      
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div
  className={`flex items-center ${
    isDashBoard
      ? 'justify-center flex-col gap-6 p-0' 
      : 'space-x-4' 
  }`}
>
  
  <div
    className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full relative"
    onMouseOver={() => setIsDashboardVisible(true)}
    onMouseOut={() => setIsDashboardVisible(false)}
  >
    {user?.avatar ? (
      <img
        src={user.avatar}
        alt="User Avatar"
        className="w-full h-full rounded-full"
      />
    ) : (
      <span className="text-lg font-semibold text-blue-600 p-1">
        {getInitials(`${user?.firstName} ${user?.lastName}`)}
      </span>
    )}
    {isDashboardVisible && (
      <div
        className="absolute top-full mt-0 px-2 py-1 text-sm text-blue-700 bg-gray-200 rounded shadow-md z-[9000]"
        onMouseEnter={() => setIsDashboardVisible(true)}
        onMouseLeave={() => setIsDashboardVisible(false)}
      >
        <Link to={'/dashboard'}>Dashboard</Link>
      </div>
    )}
  </div>

 
  <button
    onClick={lougoutHandler}
    onMouseEnter={() => setIsTooltipVisible(true)}
    onMouseLeave={() => setIsTooltipVisible(false)}
    className={`size-10 flex items-center justify-center space-x-2 text-blue-700 hover:bg-gray-200 rounded-full relative }`}
  >
    <LuLogOut size={25} color="blue" />
    {isTooltipVisible && (
      <div className="absolute top-full mt-0 px-2 py-1 text-sm text-blue-700 bg-gray-200 rounded shadow-md z-[9000]">
        Logout
      </div>
    )}
  </button>
</div>

   
    // <div className={`flex items-center space-x-4 ${isDashBoard && 'justify-center flex-col gap-6 space-x- p-0'}`}>
    //   <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full relative"
    //   onMouseOver={()=>setIsDashboardVisible(true)}
    //   onMouseOut={()=>setIsDashboardVisible(false)}>
    //     {user?.avatar ? (
    //       <img
    //         src={user.avatar}
    //         alt="User Avatar"
    //         className="w-full h-full rounded-full"
    //       />
    //     ) : (
    //       <span className="text-lg font-semibold text-blue-600 p-1">
    //         {getInitials(`${user?.firstName} ${user.lastName}`)}
    //       </span>
    //     )}
    //     {isDashboardVisible && (
    //         <div className="absolute top-full mb-2 px-2 py-1 text-sm text-blue-700 bg-gray-200 rounded shadow-md z-[9000]"
    //         onMouseEnter={()=>setIsDashboardVisible(true)}
      
    //   onMouseLeave={()=>setIsDashboardVisible(false)}>
              
    //           <Link to={'/dashboard'}>Dashboard</Link>

    //         </div>)}

    //   </div>
    //   <button
    //     onClick={lougoutHandler}
    //     onMouseEnter={() => {setIsTooltipVisible(true);
    //     }}
    //     onMouseLeave={() => {
    //       setIsTooltipVisible(false);
    //     }}
    //     className={`size-10 flex items-center justify-center space-x-2 text-blue-700 hover:bg-gray-200 rounded-full relative ${isDashBoard && 'p-0'}`}
    //   >
    //     <LuLogOut  size={25} color="blue" 
    //     />
    //       {isTooltipVisible && (
    //         <div className="absolute top-full mb-2 px-2 py-1 text-sm text-blue-700 bg-gray-200 rounded shadow-md z-[9000]">
    //           Logout

    //         </div>
    //       )}
        
    //   </button>
    // </div>
  );
}

export default LogoutBtn;
