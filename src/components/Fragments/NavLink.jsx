import { Link } from "react-router-dom";

const NavLink = ({ to, title, icon: Icon }) => {
  return (
    <>
      <Link
        className="flex items-center text-md scale-100 hover:scale-105 mx-2 text-black py-2 px-3 gap-2 hover:bg-gray-100 dark:hover:bg-secondary rounded-lg dark:text-white transition duration-500 "
        to={to}
      >
        {Icon && <Icon />}
        <p>{title}</p>
      </Link>
    </>
  );
};

export default NavLink;
