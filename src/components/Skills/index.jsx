import React from "react";
import html from "../../assets/images/html.png";
import css from "../../assets/images/css.png";
import js from "../../assets/images/js.png";
import tailwindcss from "../../assets/images/tailwindcss.png";
import reactjs from "../../assets/images/reactjs.png";
import nextjs from "../../assets/images/nextjs.png";
import git from "../../assets/images/git.png";
import ps from "../../assets/images/ps.png";
import figma from "../../assets/images/figma.png";
import redux from "../../assets/images/redux.png";
import { motion } from "framer-motion";
import { useContext } from "react";
import { DarkModeContext } from "../DarkMode/DarkMode";

const Skill = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);
  return (
    <div className={`${isDarkMode ? "bg-slate-900 text-white" : ""} p-6`}>
      <div className="mt-28">
        <h1 className="text-center text-4xl font-bold my-8">Here are some of the tech stack that I mastered</h1>
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }}>
          <div className="flex flex-wrap gap-10 justify-center mt-6 p-6 -z-10 overflow-hidden">
            <div className="w-40">
              <img src={html} alt="Html" className={`${isDarkMode ? "grayscale-0 hover:grayscale" : "grayscale hover:grayscale-0"}  cursor-pointer transition-all duration-300`} />
            </div>
            <div className="w-40">
              <img src={css} alt="Css" className={`${isDarkMode ? "grayscale-0 hover:grayscale" : "grayscale hover:grayscale-0"}  cursor-pointer transition-all duration-300`} />
            </div>
            <div className="w-40">
              <img src={js} alt="Javascript" className={`${isDarkMode ? "grayscale-0 hover:grayscale" : "grayscale hover:grayscale-0"}  cursor-pointer transition-all duration-300`} />
            </div>
            <div className="w-40">
              <img src={tailwindcss} alt="Tailwind Css" className={`${isDarkMode ? "grayscale-0 hover:grayscale" : "grayscale hover:grayscale-0"}  cursor-pointer transition-all duration-300 translate-y-6`} />
            </div>
            <div className="w-40">
              <img src={reactjs} alt="React Js" className={`${isDarkMode ? "grayscale-0 hover:grayscale" : "grayscale hover:grayscale-0"}  cursor-pointer transition-all duration-300`} />
            </div>
            <div className="w-40">
              <img src={nextjs} alt="Next Js" className={`${isDarkMode ? "grayscale-0 hover:grayscale bg-white" : "grayscale hover:grayscale-0"}  cursor-pointer transition-all duration-300 translate-y-6`} />
            </div>
            <div className="w-40">
              <img src={redux} alt="Redux" className={`${isDarkMode ? "grayscale-0 hover:grayscale" : "grayscale hover:grayscale-0"}  cursor-pointer transition-all duration-300`} />
            </div>
            <div className="w-40">
              <img src={git} alt="Git" className={`${isDarkMode ? "grayscale-0 hover:grayscale" : "grayscale hover:grayscale-0"}  cursor-pointer transition-all duration-300`} />
            </div>
            <div className="w-40">
              <img src={figma} alt="Figma" className={`${isDarkMode ? "grayscale-0 hover:grayscale" : "grayscale hover:grayscale-0"}  cursor-pointer transition-all duration-300`} />
            </div>
            <div className="w-40">
              <img src={ps} alt="Adobe Photoshop" className={`${isDarkMode ? "grayscale-0 hover:grayscale" : "grayscale hover:grayscale-0"}  cursor-pointer transition-all duration-300`} />
            </div>
          </div>
        </motion.div>
        <div>
          <h3 className="mt-6 text-xl font-semibold lg:text-2xl">More :</h3>
          <ul className="list-disc mx-6 my-4 lg:text-xl">
            <li>Knows Slightly About UI/UX</li>
            <li className="">Converting Figma Design To Code</li>
            <li>Fetching Data Using Axios or Fetch Javascript</li>
            <li>Making Single Page Application (SPA)</li>
            <li>Create CRUD App Using React JS</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skill;
