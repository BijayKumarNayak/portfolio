import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between px-4 py-2 bg-slate-800">
        <div className="font-semibold text-white cursor-pointer text-lg">
          <span className="text-orange-600">C</span>oder
        </div>
        <div onClick={() => setMenuOpen(!menuOpen)}>
          <i className="block text-white fa-solid fa-bars md:hidden lg:hidden"></i>
        </div>

        <div className="hidden md:block lg:block">
          <ul className="flex items-center gap-4 ">
            <li className="font-semibold text-white cursor-pointer hover:text-orange-600 ">
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className="font-semibold text-white cursor-pointer hover:text-orange-600">
              <Link to="about" smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li className="font-semibold text-white cursor-pointer hover:text-orange-600">
              <Link to="skill" smooth={true} duration={500}>
                Skill
              </Link>
            </li>
            <li className="font-semibold text-white cursor-pointer hover:text-orange-600">
              <Link to="project" smooth={true} duration={500}>
                Project
              </Link>
            </li>
            <li className="font-semibold text-white cursor-pointer hover:text-orange-600">
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {menuOpen ? (
        <div className="flex items-center justify-center px-4 py-2 bg-slate-800">
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="font-semibold text-white cursor-pointer hover:text-orange-600"
              >
                Home
              </Link>
            </li>
            <li className="font-semibold text-white cursor-pointer hover:text-orange-600">
              <Link to="about" smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li className="font-semibold text-white cursor-pointer hover:text-orange-600">
              <Link to="skill" smooth={true} duration={500}>
                Skill
              </Link>
            </li>
            <li className="font-semibold text-white cursor-pointer hover:text-orange-600">
              <Link to="project" smooth={true} duration={500}>
                Project
              </Link>
            </li>
            <li className="font-semibold text-white cursor-pointer hover:text-orange-600">
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
