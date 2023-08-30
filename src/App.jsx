import Typed from "react-typed";
import profile from "./assets/images/profile.png";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { DarkModeContext } from "./components/DarkMode/DarkMode";

function App() {
  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);
  useEffect(() => {
    localStorage.setItem("theme", isDarkMode);
    console.log(isDarkMode);
  }, [isDarkMode]);
  return (
    <div className={`min-h-screen md:h-full flex flex-col justify-between home ${isDarkMode ? "dark" : ""}`}>
      <div className={`h-3/4 bg-gradient-to-r ${isDarkMode ? "from-violet-800 to-fuchsia-900" : "from-violet-500 to-fuchsia-500"}`}>
        <div className="pt-6">
          <div className="mt-28 flex flex-wrap justify-center">
            <div className="lg:w-1/2">
              <img src={profile} alt="" />
            </div>
            <div className="lg:w-1/2 text-4xl font-bold text-center flex justify-center items-center flex-col mt-16 ">
              <div className={`${isDarkMode ? "" : "text-slate-900"} mr-20 mb-8 stroke-2 stroke-black flex justify-center items-center flex-col text-center translate-x-8`}>
                <Typed strings={["Nicolas Sanjaya"]} typeSpeed={50} backSpeed={70} loop />
                <h4>
                  <span className="text-5xl bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-slate-400 ">Front End Web Developer</span>
                </h4>
                <button className={`${isDarkMode ? "text-white" : "text-slate-800"} px-12 py-6 border-4 border-blue-500 mt-8 rounded-md text-2xl font-semibold  hover:text-white animate-bounce`}>
                  <Link to="/project">See Project</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-0">
        <h4 className="font-semibold text-lg bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500 text-center">
          Made With{" "}
          <span className="text-sky-500 hover:cursor-pointer">
            <Link to="/">Tailwind CSS</Link>
          </span>{" "}
          and{" "}
          <span className="text-blue-500 hover:cursor-pointer">
            <Link to="/">React JS</Link>
          </span>{" "}
          using <span className="text-fuchsia-500">Vite</span>
        </h4>
      </div>
    </div>
  );
}

export default App;
