import React from "react";
import pic from "../../public/photo.avif";
import { FaGithub, FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa6";
import { ReactTyped } from "react-typed";

import Resume from "../../public/shubhamResume.pdf";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl text-gray-700">Welcome To My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1 className="text-gray-800">Hello, I'm a</h1>
              <ReactTyped
                className="text-red-600 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify text-gray-600 leading-relaxed">
              I am a dedicated MERN stack developer and a BCA student with a keen interest in web development. My journey in programming has equipped me with skills in MongoDB, Express.js, React, and Node.js, allowing me to build robust and scalable applications. I thrive on challenges and enjoy problem-solving, always striving to create user-friendly interfaces that deliver a seamless experience. I am committed to continuous learning and innovation in technology, and I look forward to contributing to impactful projects in the tech industry!
            </p>
            <br />
            {/* Social Media Icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-bold text-center text-gray-700">Available on</h1>
                <ul className="flex space-x-5 justify-center">
                  <li>
                    <a
                      href="https://www.instagram.com/__shubham__chavhan__/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram className="text-2xl hover:text-red-600 cursor-pointer transition duration-300 transform hover:scale-125" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://in.linkedin.com/in/shubham-chavhan-047459247"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="text-2xl hover:text-blue-600 cursor-pointer transition duration-300 transform hover:scale-125" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/ShubhamChavhan1615"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="text-2xl hover:text-gray-800 cursor-pointer transition duration-300 transform hover:scale-125" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-bold text-center text-gray-700">Currently working on</h1>
                <div className="flex space-x-5 justify-center">
                  <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 cursor-pointer text-green-600" />
                  <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 cursor-pointer text-gray-800" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 cursor-pointer text-blue-600" />
                  <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 cursor-pointer text-green-500" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1 flex justify-center">
            <img
              src={pic}
              className="rounded-full md:w-[450px] md:h-[450px] border-4 border-gray-200 shadow-lg transition-transform duration-300 transform hover:scale-105"
              alt="Profile"
            />
          </div>
        </div>
        <div className="flex items-center justify-center gap-6 mt-8">
          <a href={Resume} target="_blank" rel="noopener noreferrer">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 shadow-lg hover:shadow-xl">
              Check Resume
            </button>
          </a>
          <a href={Resume} download>
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 shadow-lg hover:shadow-xl">
              Download Resume
            </button>
          </a>
        </div>
      </div>

      <hr className="my-8 border-gray-300" />
    </>
  );
}

export default Home;
