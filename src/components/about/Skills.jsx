import React from "react";
import { FaAppStoreIos } from "react-icons/fa";
import { AiTwotoneAppstore } from "react-icons/ai";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import SkillCard from "./SkillCard";
import { c, cplus, css, express, html, javascript, mongo, mysql, node, python, react } from "../../assets";

const Skills = () => {
  return (
    <div className="grid grid-cols-7 mx-2">
      <SkillCard title="C" image={c}/>
      <SkillCard title="C++" image={cplus}/>
      <SkillCard title="Python" image={python}/>
      <SkillCard title="Javascript" image={javascript}/>
      <SkillCard title="HTML" image={html}/>
      <SkillCard title="CSS" image={css}/>
      <SkillCard title="MySQL" image={mysql}/>
      <SkillCard title="mogoDB" image={mongo}/>
      <SkillCard title="ReactJs" image={react}/>
      <SkillCard title="NodeJs" image={node}/>
      <SkillCard title="ExpressJs" image={express}/>

    </div>
  );
};

export default Skills;
