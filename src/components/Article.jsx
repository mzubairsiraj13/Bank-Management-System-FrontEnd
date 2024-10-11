import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Article = ({ articleImg = "", title = "", description = "" }) => {
  return (
    <div className="flex flex-co md:flex-row h-96">
      <div className="hidden md:block flex-1">
        <img
          className="h-[420px] w-full object-fit"
          src={articleImg}
          alt={title}
        />
      </div>
      <div className="flex-1 flex justify-center items-center md:justify-start gap-4 flex-col p-10 leading-5">
        <h1 className="uppercase text-xl font-bold text-blue-700 text-center md:text-start">{title}</h1>
        <p className="h-56 text-sm text-gray-500 text-center md:text-start overflow-hidden md:overflow-auto text-ellipsis">{description}</p>
        <div className=" mt-10 inline-flex items-center justify-center md:self-start">
          <Link
            to="/register"
            className="inline-flex  px-4 py-2  text-base leading-6 font-medium rounded-md text-blue-900  hover:border-transparent  transition duration-150 ease-in-out"
          >Learn More 
          </Link>
            <FaArrowRight color="blue"/>
        </div>
      </div>
    </div>
  );
};

export default Article;
