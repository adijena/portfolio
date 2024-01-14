import React from "react";
import Title from "../home/Title";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Education from "./Education";


const About = () => {
  return (
    <section id="about" className="w-full">
      <Title title="About" subTitle="Me" />
      <AboutMe />
      <Title title="Education" subTitle="" />
      <Education />
      <Title title="Skills" subTitle="" />
      <Skills />
    </section>
  );
};

export default About;
