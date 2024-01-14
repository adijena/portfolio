import React from "react";

const ProjectsCard = ({pname, ptech, pdesc, image, place}) => {
  return (
    // 353839
    <div className="bg-[#353839] rounded-2xl h-52 flex group p-2 m-2">
      <div className="w-[20%] h-full rounded-l-2xl mb-2 overflow-hidden relative">
        <img
          src={image}
          alt="project"
          className="w-full h-full group-hover:scale-110"
        />
      </div>
      <div className="m-2 w-[70%]">
        <div className="ml-4">
          <p className="text-2xl font-bold">{pname}<span className="font-light">{place}</span></p>
          <p className="text-sm italic font-medium">{ptech}</p>
        </div>
        <div className="border-b-2 mx-auto mt-2"></div>
        <p className="ml-4 mt-2 text-xs text-justify">{pdesc}
        </p>
      </div>
    </div>
  );
};

export default ProjectsCard;
