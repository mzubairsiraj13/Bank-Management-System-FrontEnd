import React from "react";

import { servicesData } from "../Data/SampleData";
import ServiceCard from "./ServiceCard";

const OurServices = () => {
  const services = servicesData;

  return (
    <section className="h-fit bg-white my-4 p-4">
      <h1 className="text-center text-2xl font-bold mb-2">Our Services</h1>
      <p className="text-xs text-center text-gray-400 px-5 w-[40%] self-center m-auto">
        Experience unparalleled banking services tailored to your needs,
        ensuring seamless, secure, and innovative solutions for your financial
        goals.
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center flex-wrap gap-10 my-4">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            serviceImg={service.imgUrl}
            title={service.title}
          />
        ))}
      </div>
    </section>
  );
};

export default OurServices;
