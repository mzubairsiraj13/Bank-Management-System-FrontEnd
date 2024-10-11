import React, { useEffect } from "react";
import { useState } from "react";
import { AiFillHome, AiFillSetting } from "react-icons/ai"; // Example icons
import { FaChartPie } from "react-icons/fa";
import SidebarItem from "../../components/DashboardComponents/SidebarItem";
import { Link, Outlet, useLocation } from "react-router-dom";
import Logo from "../../components/Logo";
import LogoutBtn from "../../components/LogoutBtn";


const DashboardLayout = () => {
let pathName = useLocation().pathname;


  const dashboardLinks =[
    {
        icon: <AiFillHome size={24}/>,
        title: "Home",
        slug: "/dashboard",
       
    },
    {
        icon: <FaChartPie size={24} />,
        title: "Analytics",
        slug: "/dashboard/analytics",
        
    },
    {
        icon: <AiFillSetting size={24} />,
        title: "Settings",
        slug: "/dashboard/settings",
       
    },

];


  return (
    <div className="flex min-h-screen h-screen">
      <div
        className="w-[12%] md:w-2/12
        bg-gradient-to-b from-blue-600 to-blue-400 flex flex-col items-center justify-between md:items-start py-8 px-2 space-y-6 fixed md:relative h-full transition-all duration-300 min-h-full"
      >
        
        <div className="w-full">
          <Link
            to={"/dashboard"}
            className="w-full flex justify-center items-center border-b-2 border-blue-400 p-2"
          >
            <Logo isDasboard={true}/>
          </Link>
          <div className="w-full py-6 space-y-1">
            {dashboardLinks.map((item)=>(
              <SidebarItem key={item.slug} icon={item.icon} title={item.title} slug={item.slug} isActive={pathName === item.slug} />
            ))}
          </div>
        </div>
        <div className="w-full">
          <LogoutBtn isDashBoard={true} />
        </div>
      </div>

      <div className="flex-1 ml-[8.888%] md:ml-0 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
