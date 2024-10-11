import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ serviceImg = "", title = "Title" }) => {
  return (
    <div className="w-[254px] h-[420px] rounded-t-lg bg-white border  shadow-lg">
      <div>
        <div className="">
          <img src={serviceImg} alt={title + "Image"} />
        </div>
        <div className="flex justify-between items-center p-3 flex-row">
          <h2 className="uppercase w-1/2 font-semibold text-sm">{title}</h2>
          <Link
            to={"#"}
            className={` self-end  px-3 py-2 text-base  hover:text-blue-700  ease-in-out`}
          >
            <FaArrowRight size={15} color="blue" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
