import React from "react";

const Card = ({ skill }) => {
  const { title, img } = skill;
  return (
    <div className="flex flex-col items-center justify-center w-40 gap-3 p-3 border rounded shadow-md md:w-1/4 shadow-slate-100">
      <img src={img} alt="" className="h-28 w-28" />
      <p>{title}</p>
    </div>
  );
};

export default Card;
