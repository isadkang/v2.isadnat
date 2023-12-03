import React from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../Fragments/Home/Header";
import { projectData } from "../../service/_data";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { Icon } from "@iconify/react";
import Button from "../utils/Button";

const ProjectDetail = () => {
  const { slug } = useParams();

  const project = projectData.find((proj) => proj.slug === slug)

  if (!project) {
    return <div>Proyek tidak ditemukan</div>;
  }

  return (
    <div className="dark:text-white mb-10">
      <Link
        to={"/project"}
        className="scale-100 hover:scale-105 transition duration-300 font-semibold inline-flex items-center gap-2"
      >
        <FaRegArrowAltCircleLeft />
        <h1>Back</h1>
      </Link>
      <div className="border-b border-gray-600 border-dashed mt-5">
        <Header
          title={project.title}
          description={project.description}
          showList={false}
        />
      </div>
      <div className="mt-5 justify-between">
        <div className="flex gap-5 justify-between">
          <div className="flex gap-2">
            <h1 className="font-semibold">Tech stack: </h1>
            {project.icons.map((icon, index) => (
              <div key={index}>
                <Icon icon={icon} fontSize={30}></Icon>
              </div>
            ))}
          </div>
          <div className="flex">
            {project.project_link && project.project_link !== "" ? (
              <Button to={project.project_link} isPrivate={project.isPrivate} text={'Source Code'}></Button>
            ) : (
              <div className="px-4 py-2 border rounded-md transition duration-300 cursor-not-allowed">
                Private
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="mt-5">
        <img src={project.image} alt="project" className="mb-4" />
        <div className="px-6 py-4">
          <div className="font-medium text-xl mb-3">{project.title}</div>
          <p className="text-gray-500 text-md mb-3">{project.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
