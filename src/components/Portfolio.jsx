import React from "react";
import airline from "../assets/portfolio/airline.jpg";
import hatespeech from "../assets/portfolio/hatespeech.jpg";
import crms from "../assets/portfolio/crms.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: airline,
    },
    {
      id: 2,
      src: crms,
    },
    {
      id: 3,
      src: hatespeech,
    },
  ];

  return (
    <div
      name="portfolio"
      className="pb-6 bg-gradient-to-r from-rose-900 to-rose-900 w-full md:h-screen text-white"
    >
      <div className="max-w-screen-lg p-1 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-200">
            Portfolio
          </p>
          <p className="py-6">Projects</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className=" shadow-md shadow-gray-100 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="px-6 py-3 w-1/2 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
