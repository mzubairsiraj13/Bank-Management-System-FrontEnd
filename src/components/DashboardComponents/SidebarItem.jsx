import { useEffect } from "react";
import { Link } from "react-router-dom";

const SidebarItem = ({ icon, title, isActive = false, slug = "" }) => {
 
    return (
      <Link className={`flex items-center justify-center md:justify-start space-x-4 text-white hover:bg-blue-700 rounded-md p-2 w-full md:pl-6 font-medium ${isActive && "bg-blue-800"}`} to={slug}>
        <span className="justify-self-start">{icon}</span>
        <span className="hidden md:block text-white">{title}</span>
      </Link>
    );
  };


  export default SidebarItem;