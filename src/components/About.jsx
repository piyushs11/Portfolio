import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-white-800 to-white-800 text-black"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-700 text-center">
            About
          </p>
        </div>
        <p className="text-xl mt-20 text-center">
        I am a software engineer, web developer and a tech enthusiast. I have experience with building software, websites.
        Also I'm quite interested in Data Science and Blockchain Technology.
        Currently, I love to work on web application using technologies like
        React and Tailwind.
        </p>

        <br />
      </div>
    </div>
  );
};

export default About;
