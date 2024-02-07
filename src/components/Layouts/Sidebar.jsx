/* eslint-disable */
import React from "react";
import Switcher from "../utils/Switcher";
import NavLink from "../Fragments/NavLink";
import { VscVerifiedFilled } from "react-icons/vsc";
import { RiHome3Line } from "react-icons/ri";
import { LuPencilLine } from "react-icons/lu";
import { HiOutlineInboxStack } from "react-icons/hi2";
import { TbRouteSquare2 } from "react-icons/tb";
import { PiCertificate } from "react-icons/pi";

const Sidebar = () => {
  return (
    <div className="relative w-56 dark:text-white ">
      <img src="/img/mario-wall.jpg" className="w-full h-24 rounded-lg" alt="" />
      <div className="flex flex-col justify-center items-center border-b border-secondary">
        <img
          src="/img/profile.png"
          alt="bg"
          width={100}
          className="shadow rounded-full align-middle border-none absolute top-10 duration-700 ease-in-out scale-100 blur-0 grayscale-0 hover:scale-105"
        />
        <h3 className="flex items-center text-xl gap-1 font-medium mt-14 dark:text-white">
          Irsyad Nata <span className="point"><VscVerifiedFilled className=" text-blue-500" /></span>
        </h3>
        <p className=" text-md text-gray-500 mb-4">@isadsnat_</p>
        <Switcher className={'px-1 py-1 border border-gray-200 rounded-md mb-3 dark:bg-secondary dark:border-none'}></Switcher>
      </div>
      <div className="mt-3 border-b border-secondary">
        <div className="mb-3">
          <NavLink to="/" title="Home" icon={RiHome3Line} />
          <NavLink to="/project" title="Projects" icon={HiOutlineInboxStack} />
          <NavLink to="/blog" title="Blog" icon={LuPencilLine} />
          <NavLink to="/roadmap" title="Roadmap" icon={TbRouteSquare2} />
          <NavLink to="/certificate" title="Certificate" icon={PiCertificate} />
        </div>
      </div>
      <p className="text-sm mt-3 text-gray-500 text-center">© 2023 🔥 Irsyad Nata</p>
    </div>
  );
};

export default Sidebar;
