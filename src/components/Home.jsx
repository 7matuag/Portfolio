import React from "react";
import myImage from "../assets/myimage.jpg";
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name="Home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className="flex flex-col max-w-screen-lg mx-auto h-full px-4 justify-center items-center md:flex-row">
        <div className="flex flex-col justify-center = h-full">
          <h2 className="text-4xl font-bold sm:text-7xl text-white">Hi, I'm Gautam Tomar</h2>
          <p className="text-gray-500 py-4 max-w-md">
            I am a Final year Student at Maulana Azad National Institute of
            Technology, Bhopal pursuing Bachelors in Electronics and
            Communication Engineering.
          </p>

          <div>
            <Link to='Portfolio' smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex rounded-md items-center cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500">Portfolio 
                <span className="group-hover:rotate-90 duration-300">
                    <FaArrowRight className="ml-1"/>
                </span>
            </Link>
          </div>
        </div>

        <div>
            <img src={myImage} alt="My Profile" className="mx-auto rounded-2xl w-2/3 md:w-full"></img>
        </div>

      </div>
    </div>
  );
};

export default Home;
