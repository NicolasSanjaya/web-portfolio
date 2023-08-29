import React from "react";
import wa from "../../assets/images/wa.png";
import fb from "../../assets/images/fb.png";
import ig from "../../assets/images/ig.png";
import linkedin from "../../assets/images/linkedin.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../DarkMode/DarkMode";

const Contact = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);
  return (
    <div className={`${isDarkMode ? "bg-slate-900 text-white" : ""} p-6 min-h-screen`}>
      <div className="mt-28">
        <h1 className="text-center font-bold text-4xl">Get In Touch</h1>

        <div className="flex flex-wrap mt-12 p-12 items-center justify-evenly">
          <div className="w-40 mb-8">
            <button>
              <Link to="https://wa.me/6281282778619" target="_blank">
                <img src={wa} alt="Whatsapp" className="drop-shadow-md hover:-translate-y-4 transition-all" />
              </Link>
            </button>
          </div>
          <div className="w-40 m-8">
            <button>
              <Link to="https://www.instagram.com/nicolasan3/" target="_blank">
                <img src={ig} alt="Whatsapp" className="drop-shadow-md hover:-translate-y-4 transition-all" />
              </Link>
            </button>
          </div>
          <div className="w-40 m-8">
            <button>
              <Link to="https://www.facebook.com/nicolas.sanjaya.73" target="_blank">
                <img src={fb} alt="Whatsapp" className="drop-shadow-md hover:-translate-y-4 transition-all" />
              </Link>
            </button>
          </div>
          <div className="w-40 m-8">
            <button>
              <Link to="https://www.linkedin.com/in/nicolassanjaya" target="_blank">
                <img src={linkedin} alt="Whatsapp" className="drop-shadow-md hover:-translate-y-4 transition-all" />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
