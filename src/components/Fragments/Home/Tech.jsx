import React from "react";
import { FaTools } from "react-icons/fa";
import TechTag from "../../Card/TechTag";
import { tech } from "../../../service/_data";

const Tech = () => {
  return (
    <div className="mt-6">
      <div className="text-xl font-semibold mb-3 flex gap-2">
        <FaTools size={25}></FaTools>
        <h1>Tech Stack</h1>
      </div>
      <p>Some Technologies what i used to build this project.</p>
      <div className="flex flex-col items-center lg:flex-row gap-2">
        {tech.map((item, index) => (
          <TechTag key={index} icon={item.icon} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default Tech;
