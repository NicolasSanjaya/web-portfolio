import React from "react";
import Button from "../Button";
import onprogress from "../../assets/images/onprogress.png";
import { useContext } from "react";
import { DarkModeContext } from "../DarkMode/DarkMode";

const Card = (props) => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);
  const { title = "Project Name", desc = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ratione quidem harum optio placeat cupiditate. Consequatur distinctio expedita quam cum.", img = onprogress } = props;
  return (
    <div className={`max-w-sm rounded-lg shadow m-4 ${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border border-gray-200"}`}>
      <a href="#">
        <img className="rounded-t-lg" src={img} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className={`mb-2 text-2xl font-bold tracking-tight ${isDarkMode ? "text-white" : "text-gray-900"}`}>{title}</h5>
        </a>
        <p className={`mb-3 font-normal ${isDarkMode ? "text-gray-400" : "text-gray-700"}`}>{desc}</p>
        <Button />
      </div>
    </div>
  );
};

export default Card;
