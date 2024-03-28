import { NavLink, useLocation } from "react-router-dom";
import { FaRegPenToSquare } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegRectangleList } from "react-icons/fa6";
import { PiHouseBold } from "react-icons/pi";

const NavBar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black p-4">
      <div className="flex justify-between mx-auto max-w-screen-lg">
        <NavLink
          to="/"
          className="text-white text-sm sm:text-base md:text-lg lg:text-xl flex flex-col items-center" // Added flex and items-center classes
          style={{ color: isActive("/") ? "#fbbf24" : "white" }}
        >
          <PiHouseBold />
          Home
        </NavLink>
        <NavLink
          to="/ha-edit"
          className="text-white text-sm sm:text-base md:text-lg lg:text-xl flex flex-col items-center" // Added flex and items-center classes
          style={{ color: isActive("/ha-edit") ? "#fbbf24" : "white" }}
        >
          <FaRegPenToSquare />
          Hausaufgaben
        </NavLink>
        <NavLink
          to="/st-edit"
          className="text-white text-sm sm:text-base md:text-lg lg:text-xl flex flex-col items-center" // Added flex and items-center classes
          style={{ color: isActive("/st-edit") ? "#fbbf24" : "white" }}
        >
          <FaRegRectangleList />
          Schulstunden
        </NavLink>
        <NavLink
          to="/te-edit"
          className="text-white text-sm sm:text-base md:text-lg lg:text-xl flex flex-col items-center" // Added flex and items-center classes
          style={{ color: isActive("/te-edit") ? "#fbbf24" : "white" }}
        >
          <FaRegCalendarAlt />
          Termine
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
