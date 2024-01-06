import React, { useState } from "react";
import aboutme_img from "../../images/about.jpg";
import Container from "../container/Container";

const About = () => {
  let text =
    "  Hi I'm Bijay Kumay Nayak, a dynamic frontend developer on a mission to blend cutting-edge technology with captivating design.My toolkit includes mastery in HTML, CSS, Tailwind CSS, Bootstrap,JavaScript, React, and Redux. With a knack for problem-solving and an eye for detail, I am ready to contribute my skills to projects that demand innovation and excellence.";

  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="w-full h-full bg-gray-800 text-white" id="about">
      <Container>
        <div className="container flex flex-col items-center justify-center h-full mx-auto ">
          <h2 className=" text-3xl font-bold text-center">About Me </h2>
          <div className="w-32 h-32 overflow-hidden rounded-full my-3 border-2 border-pink-700">
            <img
              src={aboutme_img}
              alt=""
              className="object-center w-full h-full object-cover"
            />
          </div>

          <div className="md:px-40">
            <p className="font-semibold">{isExpanded ? text : text.slice(0, 200)}...</p>
            <button onClick={toggleExpansion} className="text-blue-500 font-semibold">
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
