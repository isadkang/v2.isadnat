import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const ProjectCard = ({ image, title, description, icons, slug }) => {

  return (
    <Link
      to={`/project/${slug}`}
      className=" max-w-sm rounded-xl overflow-hidden mt-2 border border-gray-200 dark:bg-secondary dark:border-none scale-100 hover:scale-105 transition duration-300"
    >
      <img src={image} alt="image" />
      <div className="px-6 py-4 ">
        <div className="font-medium text-xl mb-3 hover:text-indigo-500 transition-all duration-500 hover:cursor-pointer">
          {title}
        </div>
        <p className="text-gray-500 text-md line-clamp-2 mb-3">{description}</p>
      </div>
      <div className="flex px-4 py-2 mb-2 gap-5">
        {icons.map((icon, index) => (
          <div key={index}>
            <Icon icon={icon} fontSize={25}></Icon>
          </div>
        ))}
      </div>
    </Link>
  );
};

export default ProjectCard;
