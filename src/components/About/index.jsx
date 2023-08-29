import React from "react";
import profile from "../../assets/images/profile.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useContext } from "react";
import { DarkModeContext } from "../DarkMode/DarkMode";

const About = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);
  return (
    <div className={`${isDarkMode? "bg-slate-900 text-white" : ""} min-h-screen px-6 pb-12 flex flex-wrap justify-center items-center overflow-hidden`}>
      <div className="lg:w-1/2 mt-28">
        <motion.div initial={{ opacity: 0, scale: 0.5, y: "-100%" }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
          <div className="md:flex md:justify-center">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width={250} className="absolute -z-20 top-16 translate-y-2 left-20 scale-150 md:left-24 md:top-16 md:w-96 lg:left-24 lg:top-16">
              <path
                fill="#3B82F6"
                d="M59.9,-47.6C73.7,-30.4,78.4,-5.7,71.4,12.7C64.3,31.1,45.5,43.2,27.9,47.7C10.4,52.2,-5.9,49.1,-22.3,42.6C-38.7,36.1,-55.3,26.3,-61.7,10.5C-68.2,-5.3,-64.6,-27,-52.7,-43.8C-40.7,-60.6,-20.3,-72.5,1.3,-73.6C23,-74.6,46,-64.9,59.9,-47.6Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
          <div>
            <img src={profile} alt="Profile Picture" className="border-b-2 border-blue-600 -z-10" />
          </div>
        </motion.div>
      </div>
      <div className="flex justify-center items-center flex-col lg:w-1/2 mt-24">
        <motion.div initial={{ opacity: 0, scale: 0.5, y: "100%" }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
          <h1 className="text-center text-xl font-semibold">
            Hello my name is <span className="text-2xl font-bold text-blue-500">Nicolas Sanjaya</span>
          </h1>
          <p className="text-center mt-4 text-lg">I am Front End Developer and 5th semester student and currently studying web development. Here are some personal projects I&apos;ve. <span className="text-xl font-semibold text-blue-400">Keep learning on new technology.</span></p>
          <div className="flex justify-center">
            <button className="px-6 py-2 bg-blue-500 text-white rounded-md mt-6 text-lg font-semibold hover:bg-blue-800 flex justify-center">
              <Link to="/project">See Project</Link>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
