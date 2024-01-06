import React from "react";
import htmlImg from "../../images/html.webp";
import jsImg from "../../images/js.png";
import tailwindImg from "../../images/tailwindcss.png";
import reactImg from "../../images/reactlogo.png";
import bootstrapImg from "../../images/bootstrap.png";
import githubImg from "../../images/github-logo.png";
import Container from "../container/Container";
import Card from "./Card";

const Skill = () => {
  let skills = [
    {
      img: htmlImg,
      title: "HTML",
    },
    {
      img: jsImg,
      title: "JavaScript",
    },
    {
      img: tailwindImg,
      title: "Tailwind CSS",
    },
    {
      img: reactImg,
      title: "ReactJS",
    },
    {
      img: bootstrapImg,
      title: "Bootstrap",
    },
    {
      img:githubImg,
      title:"Github"
    }
  ];

  return (
    <div className="text-white bg-slate-900" id="skill">
      <Container>
        <h1 className="my-2 text-3xl font-bold text-center">Skills</h1>
        <p className="my-2 text-lg font-semibold text-center">
          I have a wide range of skills that I can bring to your project. Here
          are some examples:
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2 ">
          {skills.map((skill, index) => (
            <Card key={index} skill={skill}  />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Skill;
