import React from "react";
import Navbar from "../../navbar/Navbar";
import "../../index.css";
import user from "../../images/user4.png";
import { Link, animateScroll as scroll } from "react-scroll";

const Home = () => {
  return (
    <div
      id="home "
      className="relative w-full h-full overflow-hidden bg-slate-900"
    >
      <Navbar />
      <div className="flex flex-col items-center md:flex-row lg:flex-row ">
        <div className="flex flex-col items-center w-full gap-4 px-5 py-10 overflow-hidden text-white md:w-1/2 lg:w-1/2 lg:px-5 lg:py-20">
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center justify-center w-8 h-8 border-2 border-red-500 rounded-full hover:border-cyan-400 hover:scale-110">
              <a
                href="https://github.com/BijayKumarNayak"
                target="_blank"
                rel="noreferrer"
              >
                <i className="text-lg fa-brands fa-github "></i>
              </a>
            </div>

            <div className="flex items-center justify-center w-8 h-8 border-2 border-red-500 rounded-full hover:border-cyan-400 hover:scale-110">
              {" "}
              <a
                href="https://www.linkedin.com/in/bijay-nayak-3994b2213/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
            <div className="flex items-center justify-center w-8 h-8 border-2 border-red-500 rounded-full hover:border-cyan-400 hover:scale-110">
              {" "}
              <i className="fa-brands fa-facebook"></i>
            </div>
            <div className="flex items-center justify-center w-8 h-8 border-2 border-red-500 rounded-full hover:border-cyan-400 hover:scale-110">
              {" "}
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
          <div className="flex flex-col gap-3 text-center ">
            <h1 className="text-3xl font-bold text-orange-600">
              Hi I am Bijay
            </h1>
            <h2 className="text-2xl font-bold text-white styled">
              Frontend Developer & Designer
            </h2>
            <div className="z-50 flex items-center justify-center gap-4 ">
              <a href="https://drive.google.com/file/d/1cvnH0UY3qxhmCVCrWO5XmWvuSd7EcdCF/view?usp=drive_link" target="_blank" >
                <button className="p-2 bg-indigo-600 rounded-md cursor-pointer hover:bg-indigo-800">
                  Resume
                </button>
              </a>

              <Link to="contact" smooth={true} duration={500}>
                <button className="p-2 bg-indigo-600 rounded-md cursor-pointer hover:bg-indigo-800">
                  Contact Me
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2 lg:px-5 lg:py-20 ">
          <div className="w-full h-96">
            <img
              src={user}
              alt=""
              className="object-contain object-center w-full h-full"
            />
          </div>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute bottom-0"
      >
        <path
          fill="#f3f4f5"
          fill-opacity="1"
          d="M0,96L48,112C96,128,192,160,288,181.3C384,203,480,213,576,192C672,171,768,117,864,128C960,139,1056,213,1152,245.3C1248,277,1344,267,1392,261.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Home;
