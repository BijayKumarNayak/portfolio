import React from "react";
import Container from "../container/Container";
import ProjectCard from "./ProjectCard";
import moviex from "../../images/moviex.png";
import landingPageImg from "../../images/Business Landing.png";
import passwordGeneratorImg from "../../images/random Passowrd Generator.png"
const Project = () => {
  let projects = [
    {
      img: moviex,
      title: "Movie searching app",
      url: "https://moviex-sigma.vercel.app/",
    },
    {
      img: landingPageImg,
      title: "Service Provider Landing Page",
      url: "https://incredible-rugelach-044202.netlify.app",
    },
    {
      img: passwordGeneratorImg,
      title: "Random Password Generator",
      url: "https://password-generator-ten-beige.vercel.app/",
    },
  ];
  return (
    <div className="w-full h-full text-white bg-gray-800" id="project">
      <Container>
        <h1 className="my-2 text-3xl font-bold text-center">Projects</h1>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {projects.map((item, index) => (
            <ProjectCard item={item} key={index} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Project;
