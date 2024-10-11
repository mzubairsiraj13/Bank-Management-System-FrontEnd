import React from "react";

const CustomerExperienceCard = ({
  ImgUri = "",
  title = "title",
  cardDescription = "Description",
}) => {
    
  return (
    <div className="h-44 w-[256px] flex flex-col p-5 shadow-lg border">
      <div className="size-8">
        <img src={ImgUri} alt=""  />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="font-semibold text-sm">{title}</h2>
        <p className="text-xs w-40 text-gray-400 leading-4">{cardDescription}</p>
      </div>
    </div>
  );
};

export default CustomerExperienceCard;
