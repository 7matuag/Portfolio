import React from "react";
import tinDog from "../assets/portfolio/tinDog.png";
import toDoList from "../assets/portfolio/toDoList.png";
import blogSite from "../assets/portfolio/blogSite.png";
import simonGame from "../assets/portfolio/simonGame.png";
import keeperApp from "../assets/portfolio/keeperApp.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: blogSite,
      title: 'Blog Site',
      hrefDemo: 'https://blogsite-ro7w.onrender.com/', 
      hrefCode: 'https://github.com/7matuag/Blog-Site/tree/master'
    },
    {
      id: 2,
      src: toDoList,
      title: 'To-Do List',
      hrefDemo: 'https://todo-list-1d6v.onrender.com/', 
      hrefCode: 'https://github.com/7matuag/To-Do-List/tree/master'
    },
    {
      id: 3,
      src: keeperApp,
      title: 'Keeper App',
      hrefDemo: 'https://bejewelled-choux-ddfab4.netlify.app/', 
      hrefCode: 'https://github.com/7matuag/Keeper-App/tree/master'
    },
    {
      id: 4,
      src: simonGame,
      title: 'Simon Game',
      hrefDemo: 'https://7matuag.github.io/Simon-Game/', 
      hrefCode: 'https://github.com/7matuag/Simon-Game'
    },
    {
      id: 5,
      src: tinDog,
      title: 'Tinder for Dog',
      hrefDemo: 'https://7matuag.github.io/TinDog/', 
      hrefCode: 'https://github.com/7matuag/TinDog'
    }
  ];

  return (
    <div
      name="Portfolio"
      className="w-full text-white bg-gradient-to-b from-black to-gray-800 md:h-screen"
    >
      <div className="w-full h-full justify-center mx-auto flex flex-col p-4 max-w-screen-lg">
        <div className="pb-8">
          <p className="text-4xl inline border-b-4 border-gray-500 font-bold">
            Portfolio
          </p>
          <p className="py-6">Checkout some of my Projects right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, hrefDemo, hrefCode, title }) => (
            <div key={id} className="shadow-md rounded-lg shadow-gray-600">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="mt-4 text-center justify-center items-center">
                <h1>{title}</h1>
              </div>
              <div className="flex items-center text-center justify-center">
                <a href={hrefDemo} alt='Sorry' className="w-1/2 px-6 py-3 duration-200 hover:scale-110" target="_blank" rel="noreferrer">
                  Demo
                </a>
                <a href={hrefCode} alt='Sorry' className="w-1/2 px-6 py-3 duration-200 hover:scale-110" target="_blank" rel="noreferrer">
                  Code
                </a>
              </div>
            </div>
          ))}                   
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
