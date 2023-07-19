import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import github from "../assets/github.png";
import node from "../assets/node.png";
import reactImage from "../assets/reactImage.png";
import tailwind from "../assets/tailwind.png";
import mongoDB from "../assets/mongoDB.png";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 5,
      src: node,
      title: "NodeJS",
      style: "shadow-green-500",
    },
    {
      id: 6,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 7,
      src: mongoDB,
      title: "MongoDB",
      style: "shadow-green-500",
    },
    {
      id: 8,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    }
  ];

  return (
    <div
      name="Skills"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black"
    >
      <div className="flex flex-col h-full w-full text-white max-w-screen-lg mx-auto p-4 justify-center">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline p-2">
            Skills
          </p>
          <p className="py-6">These are the Technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 text-center py-8 px-12 gap-8 sm:p-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={
                "py-2 shadow-md hover:scale-105 duration-500 rounded-lg " +
                style
              }
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
