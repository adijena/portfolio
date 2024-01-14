import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { PiCertificateBold } from "react-icons/pi";
import { BsTelephonePlusFill, BsNewspaper } from "react-icons/bs";
import Left from "./components/home/Left";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Cert from "./components/cert/Cert";
import Contact from "./components/contact/Contact";
import Work from "./components/work/Work"

const Home = () => {

  const [about, setAbout] = useState(true);
  const [work, setWork] = useState(false);
  const [projects, setProjects] = useState(false);
  const [cert, setCert] = useState(false);
  const [contact, setContact] = useState(false);


  return (
    // <div></div>
    <div className="w-[90%] h-[90%] bg-transparent text-white z-50 flex p-4">
      <div className="w-16 h-96 bg-transparent absolute left-0 top-[25%]">
        <div className="w-full h-80 bg-bodyColor rounded-r-3xl flex flex-col items-center justify-between py-6">
          {/* About Icon */}
          <span
            onClick={() =>
              setAbout(true) &
              setWork(false) &
              setProjects(false) &
              setCert(false) &
              setContact(false)
            }
            className={`${
              about
                ? "text-designColor"
                : "w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"
            } w-full h-6 text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group`}
          >
            <FaUser />
            <span className="text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl absolute left-0 translate-x-8 group-hover:translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
              About
            </span>
          </span>
          {/* work Icon */}
          <span
            onClick={() =>
              setAbout(false) &
              setWork(true) &
              setProjects(false) &
              setCert(false) &
              setContact(false)
            }
            className={`${
              work
                ? "text-designColor"
                : "w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"
            } w-full h-6 text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group`}
          >
            <MdWork />
            <span className="text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl absolute left-0 translate-x-8 group-hover:translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
              work
            </span>
          </span>
          {/* Project Icon */}
          <span
            onClick={() =>
              setAbout(false) &
              setWork(false) &
              setProjects(true) &
              setCert(false) &
              setContact(false)
            }
            className={`${
              projects
                ? "text-designColor"
                : "w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"
            } w-full h-6 text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group`}
          >
            <BsNewspaper />
            <span className="text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl absolute left-0 translate-x-8 group-hover:translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
              Projects
            </span>
          </span>
           {/* Cert Icon */}
           <span
            onClick={() =>
              setAbout(false) &
              setWork(false) &
              setProjects(false) &
              setCert(true) &
              setContact(false)
            }
            className={`${
              cert
                ? "text-designColor"
                : "w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"
            } w-full h-6 text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group`}
          >
            <PiCertificateBold />
            <span className="text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl absolute left-0 translate-x-8 group-hover:translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
              Certificates
            </span>
          </span>
          {/* Contact Icon */}
          <span
            onClick={() =>
              setAbout(false) &
              setWork(false) &
              setProjects(false) &
              setCert(false) &
              setContact(true)
            }
            className={`${
              contact
                ? "text-designColor"
                : "w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"
            } w-full h-6 text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group`}
          >
            <FaEnvelope />
            <span className="text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl absolute left-0 translate-x-8 group-hover:translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
              Contact
            </span>
          </span>
          <span className="w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group">
            <BsTelephonePlusFill />
            <span className="text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl absolute left-0 translate-x-8 group-hover:translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
              Call
            </span>
          </span>
        </div>
      </div>


      <div className="w-full h-full bg-transparent flex items-center">
        {/* left */}
        <Left />
        {/* right */}
        <div className="w-8/12 h-[95%] bg-bodyColor justify-center overflow-y-scroll scrollbar-thin scrollbar-rounded-full scrollbar-thumb-[#646464] rounded-r-2xl">
        {about && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <About />
              </motion.div>
            )}

            {work && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Work />
              </motion.div>
            )}

            {projects && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Projects />
              </motion.div>
            )}

            {cert && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Cert />
              </motion.div>
            )}

            {contact && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Contact />
              </motion.div>
            )}
        </div>
      </div>
    </div>
  );
};

export default Home;
