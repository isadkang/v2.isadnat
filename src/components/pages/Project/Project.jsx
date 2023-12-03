import React from "react";
import Header from "../../Fragments/Home/Header";
import { project, projectData } from "../../../service/_data";
import ProjectCard from "../../Card/ProjectCard";

const Project = () => {
  return (
    <div className="dark:text-white mb-10 ">
      <div className="border-b border-gray-600 border-dashed">
        <Header title={project.title} description={project.description} />
      </div>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectData.map((data, index) => (
          <ProjectCard
            key={index}
            image={data.image}
            title={data.title}
            description={data.description}
            icons={data.icons}
            slug={data.slug}
          ></ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default Project;
