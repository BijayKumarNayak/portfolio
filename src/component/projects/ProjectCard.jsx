import React from "react";

const ProjectCard = ({ item }) => {
  const { title, img, url } = item;
  return (
    <>
      <a href={url} target="_blank">
        <div className="flex flex-col items-center gap-3 p-3 w-50 border-2 border-pink-500 rounded-md hover:border-red-500 cursor-pointer ">
          <div className="w-full overflow-hidden object-center">
            <img src={img} alt="" className="w-60 h-32" />
          </div>

          <p className="font-semibold">{title}</p>
        </div>
      </a>
    </>
  );
};

export default ProjectCard;
