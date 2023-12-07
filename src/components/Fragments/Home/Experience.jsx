import React from "react";
import { PiToolboxFill } from "react-icons/pi";
import ExperienceCard from "../../Card/ExperienceCard";
import { RxDownload } from "react-icons/rx";
const Experience = () => {
  return (
    <div className="mt-6">
      <div className="text-xl font-semibold mb-3 flex justify-between">
        <div className="flex gap-2">
          <PiToolboxFill size={25} />
          <h1>Experience</h1>
        </div>
        <a href="/pdf/12209242_Muhammad Irsyad Nataprawira.pdf" target="_blank" className="font-semibold text-sm flex gap-2 hover:underline animate-bounce">
          <RxDownload size={20}/>
          <h1>Download Resume</h1>
        </a>
      </div>
      <p>My experience journey.</p>
      <ExperienceCard />
    </div>
  );
};

export default Experience;
