import React from "react";
import Card from "../Cards/index";
import { motion } from "framer-motion";
import { useContext } from "react";
import { DarkModeContext } from "../DarkMode/DarkMode";
import movie from '../../assets/images/movie.png'

const Projects = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);
  return (
    <div className={`${isDarkMode ? "bg-slate-900 text-white" : ""} p-6`}>
      <div className="mt-28">
        <h1 className="text-4xl font-bold text-center">Project Page</h1>
        <div className="flex flex-wrap mt-12">
          <div className="md:w-1/2 lg:w-1/3 h-fit">
            <motion.div initial={{ opacity: 0, scale: 0.5, x: "-100%" }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <Card title="Movie App" desc="Making modern ui for movie app using public api" link="https://movie-app-next-5ea3vmcxw-nicolassanjaya.vercel.app/" img={movie} />
            </motion.div>
          </div>
          <div className="md:w-1/2 lg:w-1/3 h-fit">
            <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <Card title="E-Commerce" desc="Making ui components for product and integrated with dynamic routing using next-js" />
            </motion.div>
          </div>
          <div className="lg:w-1/3 h-fit">
            <motion.div initial={{ opacity: 0, scale: 0.5, x: "100%" }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <Card title="Dummy" desc="dummy" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
