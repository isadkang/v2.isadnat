import React from "react";
import { experienceData } from "../../service/_data";

const ExperienceCard = () => {
  return (
    <div className="mt-6">
        <div className="flex flex-row items-center justify-center bg-white dark:bg-secondary lg:w-96 py-10 rounded-md border dark:border-none">
          <div className="flex items-end gap-5 flex-row">
            <img src={experienceData.image} alt="logo" width={70} />
            <div className="flex flex-col">
              <h1 className="text-xl font-bold dark:text-white">{experienceData.job}</h1>
              <p className=" text-gray-500 text-sm font-semibold">{experienceData.company}</p>
              <p className="text-gray-500 text-sm italic">{experienceData.date}</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ExperienceCard;
