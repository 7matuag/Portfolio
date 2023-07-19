import React from "react";

export const About = () => {
  return (
    <div
      name="About"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="w-full h-full justify-center mx-auto p-4 flex flex-col max-w-screen-lg">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 inline border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-10">
          For more than a year, I've been passionately engaged in solving
          problems related to data structures and algorithms (DSA) on various
          coding platforms such as LeetCode and GeeksforGeeks. Participating in
          programming contests on platforms like Leetcode, Codeforces, CodeChef
          has become a regular and exciting part of my journey. Alongside my
          love for problem-solving, I find great joy in creating web
          applications and exploring cutting-edge technologies to embark on new
          projects and see them through to completion.
        </p>
        <br />
        <p className="text-xl">
          Currently, I am actively seeking opportunities where I can apply my
          skills and training to contribute to the company's growth. I am eager
          to take on roles that will allow me to explore and develop my
          potential in various aspects of this field. I look forward to finding
          a position that will enable me to make a meaningful impact and advance
          my professional growth.
        </p>
      </div>
    </div>
  );
};
