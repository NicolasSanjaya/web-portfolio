import React, { useEffect, useState, useRef, useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { DarkModeContext } from "../DarkMode/DarkMode";
import github from '../../assets/images/github.png'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const menuRef = useRef();
  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    const handle = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setNav(false);
      }
    };

    document.addEventListener("mousedown", handle);

    return () => {
      document.removeEventListener("mousedown", handle);
    };
  }, [nav]);

  return (
    <div>
      <div className={`flex justify-between items-center bg-gradient-to-r ${isDarkMode ? "from-cyan-900 to-blue-900" : "from-cyan-500 to-blue-500"} p-8 fixed w-full z-50 border-opacity-40 border-b-2 border-black`}>
        <div>
          <h1 className="text-2xl text-white font-bold hover:text-slate-300">
            <Link to="/">Nicolas Sanjaya</Link>
          </h1>
        </div>
        <div>
          <button onClick={() => setIsDarkMode((prev) => !prev)} className="px-8 py-3 bg-white rounded-full relative">
            <span
              className={`${isDarkMode ? "` bg-slate-800 absolute top-0 right-0 translate-y-0.5 -translate-x-0.5 `" : `bg-yellow-300 absolute left-0 top-0 translate-y-0.5 translate-x-0.5`} w-5 h-5 rounded-full transition-all duration-1000`}
            ></span>
          </button>
        </div>
        <div className="hidden md:block">
          <ul className="flex text-white">
            <li className="mx-6 hover:border-b-2 text-xl">
              <Link to="/" className={`focus:hover:border-none ${isDarkMode ? "focus:text-slate-400 focus:border-b-2 focus:border-slate-400" : "focus:text-slate-600 focus:border-b-2 focus:border-slate-600"}`}>
                Home
              </Link>
            </li>
            <li className="mx-6 hover:border-b-2 text-xl">
              <Link to="/about" className={`focus:hover:border-none ${isDarkMode ? "focus:text-slate-400 focus:border-b-2 focus:border-slate-400" : "focus:text-slate-600 focus:border-b-2 focus:border-slate-600"}`}>
                About
              </Link>
            </li>
            <li className="mx-6 hover:border-b-2 text-xl">
              <Link to="/skills" className={`focus:hover:border-none ${isDarkMode ? "focus:text-slate-400 focus:border-b-2 focus:border-slate-400" : "focus:text-slate-600 focus:border-b-2 focus:border-slate-600"}`}>
                Skills
              </Link>
            </li>
            <li className="mx-6 hover:border-b-2 text-xl">
              <Link to="/project" className={`focus:hover:border-none ${isDarkMode ? "focus:text-slate-400 focus:border-b-2 focus:border-slate-400" : "focus:text-slate-600 focus:border-b-2 focus:border-slate-600"}`}>
                Projects
              </Link>
            </li>
            <li className="mx-6 hover:border-b-2 text-xl">
              <Link to="/contact" className={`focus:hover:border-none ${isDarkMode ? "focus:text-slate-400 focus:border-b-2 focus:border-slate-400" : "focus:text-slate-600 focus:border-b-2 focus:border-slate-600"}`}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden transition-all duration-300 ease-in-out">
          {!nav && (
            <div className="text-white scale-150">
              <button onClick={() => setNav(!nav)}>
                <GiHamburgerMenu />
              </button>
            </div>
          )}
          {nav && (
            <div className="text-white scale-150">
              <button onClick={() => setNav(!nav)}>
                <AiOutlineClose />
              </button>
            </div>
          )}
        </div>
      </div>
      {nav && (
        <div className={`w-48 h-30 bg-blue-600 fixed right-0 flex justify-center md:hidden mt-24 z-50 navbar rounded-b-md`} ref={menuRef}>
          <ul className="flex text-white flex-col w-full px-4">
            <li className="my-4 hover:underline text-xl text-center ">
              <Link to="/" onClick={() => setNav(!nav)} className={`focus:hover:border-none ${isDarkMode ? "focus:text-slate-400 focus:border-b-2 focus:border-slate-400" : "focus:text-slate-600 focus:border-b-2 focus:border-slate-600"}`}>
                Home
              </Link>
            </li>
            <li className="my-4 hover:underline text-xl text-center">
              <Link to="/about" onClick={() => setNav(!nav)} className={`focus:hover:border-none ${isDarkMode ? "focus:text-slate-400 focus:border-b-2 focus:border-slate-400" : "focus:text-slate-600 focus:border-b-2 focus:border-slate-600"}`}>
                About
              </Link>
            </li>
            <li className="my-4 hover:underline text-xl text-center">
              <Link to="/skills" onClick={() => setNav(!nav)} className={`focus:hover:border-none ${isDarkMode ? "focus:text-slate-400 focus:border-b-2 focus:border-slate-400" : "focus:text-slate-600 focus:border-b-2 focus:border-slate-600"}`}>
                Skills
              </Link>
            </li>
            <li className="my-4 hover:underline text-xl text-center">
              <Link to="/project" onClick={() => setNav(!nav)} className={`focus:hover:border-none ${isDarkMode ? "focus:text-slate-400 focus:border-b-2 focus:border-slate-400" : "focus:text-slate-600 focus:border-b-2 focus:border-slate-600"}`}>
                Projects
              </Link>
            </li>
            <li className="my-4 hover:underline text-xl text-center">
              <Link to="/contact" onClick={() => setNav(!nav)} className={`focus:hover:border-none ${isDarkMode ? "focus:text-slate-400 focus:border-b-2 focus:border-slate-400" : "focus:text-slate-600 focus:border-b-2 focus:border-slate-600"}`}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
      <div className="fixed bottom-32 right-9 flex justify-center items-center z-50 translate-x-1">{/* <DarkMode /> */}</div>
      <div className="bg-slate-200 rounded-full w-20 h-20 fixed bottom-6 right-6 flex justify-center items-center z-50 animate-pulse">
        <button>
          <Link to="https://github.com/NicolasSanjaya" target="_blank">
            <img src={github} alt="Linked In" className="rounded-full" />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
