
import React, { useState } from "react";

const Carousel = ({ carouselItems = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  

  const changeCarouselItem = (index) => {
    setCurrentIndex(index);
  };
 
  

  

  return (
    <div className="relative w-full mx-auto overflow-hidden h-[400px]">
      <div
        className={`size-full carousel-inner flex transition-transform duration-500 ease-in-out `}  
        style={{ transform: `translateX(-${currentIndex * 100}%)`,  }}   
      >
        {carouselItems.map((item, index) => (
          <div
            className="flex-shrink-0 w-full h-full  flex justify-center items-center mb-2"
            key={index}
          >
            {item}
          </div>
        ))}
        
      </div>
      <div className="absolute bottom-2 left-0 right-0 flex justify-center items-center gap-2  rounded-full shadow-2xl border-2 border-blue-800 w-fit m-auto py-4 px-8 bg-gray-100">
        {carouselItems.map((_, index) => (
          <div
            className={`rounded-full cursor-pointer ${
              currentIndex === index ? "size-3 bg-blue-700" : "size-2 bg-gray-500"
            }`}
            key={index}
            onClick={() => changeCarouselItem(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

