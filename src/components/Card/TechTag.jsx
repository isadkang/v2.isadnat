import React from "react";

const TechTag = ({ icon, title }) => {
  return (
    <div className="mt-6">
      <div className="flex w-52 justify-center border rounded-full bg-white dark:bg-secondary dark:border-none">
        <div className="px-8 py-1 flex gap-2">
          <img src={icon} alt="Icon" width={30} />
          <p className="font-semibold text-lg dark:text-white">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TechTag;
