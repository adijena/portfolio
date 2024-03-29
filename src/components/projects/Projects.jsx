import React from "react";
import {
  amazon,
  shoe,
  watch,
} from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <ProjectsCard
        image={amazon}
        pname="IdeaCentral"
        place=" (amazon)"
        ptech="ReactJs, AWS-UI component"
        pdesc="Designed and developed frontend for IdeaCentral project using ReactJs and AWS-UI components, creating a user-friendly platform enabling internal employees to submit ideas for managerial approval, optimizing workflow and idea processing."
      />
      <ProjectsCard
        image={shoe}
        pname="ShoeMate"
        ptech="React, Tailwind CSS, Redux"
        pdesc="Built a dynamic React.js shoe eCommerce web app with a responsive design, elevating the UI using Tailwind CSS. Incorporated Redux for efficient state management and data flow, ensuring optimal performance and seamless user interactions."
      />
      <ProjectsCard
        image={watch}
        pname="BingeWatch"
        ptech="React, NodeJs, Express, JWT, MongoDB, Firebase"
        pdesc="Designed and developed a React-based video streaming app with Node.js for robust APIs, MongoDB for user and movie data, and Firebase for file storage. Integrated JWT authentication for security, and leveraged React Hooks and Context API for smooth frontend interactions."
      />

    </div>
  );
};

export default Projects;
