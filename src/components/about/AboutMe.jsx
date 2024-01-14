import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row pb-6">
      <div className="w-full md:w-1/2 text-zinc-400 px-6 border-r-[1px] border-r-zinc-800 flex items-center">
        <div className="py-6">
          <h2 className="font-semibold mb-1">Hello! I'm Aditya Jena </h2>
          <p className="leading-6 text-sm">
          I thrive on solving complex problems and bringing ideas to life through innovative solutions. Specializing in React.js for dynamic front-end experiences and Node.js for robust back-end development, I am passionate about crafting seamless, user-focused applications. With a commitment to clean code and continuous learning.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6">
        <ul className="flex flex-col gap-1">
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Age:</span>
            22
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Email:</span>
            aditya23jena@gmail.com
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Address:</span>
            Bhubaneswar, Odisha
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
