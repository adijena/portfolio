import React from "react";


const SkillCard = ({ image, title}) => {
  return (
    <div className="m-2 flex flex-col items-center  p-2 w-[110px] h-[110px] bg-[#606b6e] rounded-xl">
      <img src={image} alt={title} className="w-[64px] h-[64px] rounded-full" />
      <p className="font-titleFont text-sm font-semibold">{title}</p>
    </div>
  );
};

export default SkillCard;
