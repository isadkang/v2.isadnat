import React, { useState } from "react";
import { VscVerifiedFilled } from "react-icons/vsc";
import { GrClose } from "react-icons/gr";
import { RiHome3Line } from "react-icons/ri";
import { LuPencilLine } from "react-icons/lu";
import { HiOutlineInboxStack } from "react-icons/hi2";
import Switcher from "../utils/Switcher";
import { RxHamburgerMenu } from "react-icons/rx";
import NavLink from "../Fragments/NavLink";
import { Link } from "react-router-dom";
import { TbRouteSquare2 } from "react-icons/tb";
import { PiCertificate } from "react-icons/pi";

const Navbar = () => {

  const [toggleNavbar, setToggleNavbar] = useState(false);

  return (
    <div className="dark:text-white border-b border-gray-600">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-4">
          <img
            src="/img/sidebar-img.jpg"
            alt="bg"
            width={50}
            className="shadow rounded-full align-middle border-none duration-700 ease-in-out scale-100 blur-0 grayscale-0 hover:scale-105"
          />
          <Link to={'/'} className="text-lg font-semibold flex items-center gap-2">
            Irsyad Nata
            <span className="point">
              <VscVerifiedFilled className="text-blue-500" />
            </span>
          </Link>
        </div>
        <div className="mt-3 lg:hidden flex items-center gap-3">
          <Switcher className={'border dark:bg-secondary dark:border-none py-1 px-1 rounded-md'}></Switcher>
          <div onClick={() => setToggleNavbar(!toggleNavbar)} >
            { toggleNavbar ? (
              <GrClose size={25}/>
            ) : (
              <RxHamburgerMenu size={25}/>
            )}
          </div>
        </div>
      </div>
      <div className={`${toggleNavbar ? 'block opacity-100' : 'hidden opacity-0'}  `}>
        <NavLink to="/" title="Home" icon={RiHome3Line} />
        <NavLink to="/project" title="Projects" icon={HiOutlineInboxStack} />
        <NavLink to="/blog" title="Blog" icon={LuPencilLine} />
        <NavLink to="/roadmap" title="Roadmap" icon={TbRouteSquare2} />
        <NavLink to="/certificate" title="Certificate" icon={PiCertificate} />

      </div>
    </div>
  );
};

export default Navbar;
