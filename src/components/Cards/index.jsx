import React from "react";
import Button from "../Button";
import onprogress from '../../assets/images/onprogress.png'

const Card = (props) => {
  const { title = "Project Name", desc = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ratione quidem harum optio placeat cupiditate. Consequatur distinctio expedita quam cum.", img = onprogress } = props;
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
      <a href="#">
        <img className="rounded-t-lg" src={img} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{desc}</p>
        <Button />
      </div>
    </div>
  );
};

export default Card;
