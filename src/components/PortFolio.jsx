import React, { useState } from "react";
import farmBlogs from "../../public/logo.jfif";
import StyleHubLogo from "../../public/StyleHubLogo.jfif";
import TripMateLogo from "../../public/TripMateLogo.jfif";

// Imported videos
import video1 from "../../public/20240728_093816.mp4"; // Farmblogs App
import video2 from "../../public/20240728_095818.mp4"; // E-commerce Site
import video3 from "../../public/20240728_100527.mp4"; // Trip & Travel Partner Site

function PortFolio() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

  const cardItem = [
    {
      id: 1,
      logo: farmBlogs,
      name: "Farmblogs App",
      video: video1,
      description: "A platform to share and discover farming blogs, tips, and resources.",
      codeLink: "https://github.com/ShubhamChavhan1615/FarmingBlog-app",
      btn1: "Watch Video",
      btn2: "Source Code",
      btn3: "Live Preview",
      liveLink: "https://farmblogs.netlify.app",
    },
    {
      id: 2,
      logo: StyleHubLogo,
      name: "E-commerce Site",
      video: video2,
      description: "An online shopping platform with user-friendly features and secure transactions.",
      codeLink: "https://github.com/ShubhamChavhan1615/StyleHubServer",
      btn1: "Watch Video",
      btn2: "Source Code",
      btn3: "Live Preview",
      liveLink: "https://stylehubshop.netlify.app",
    },
    {
      id: 3,
      logo: TripMateLogo,
      name: "Trip & Travel Partner",
      video: video3,
      description: "A website to find travel partners and share travel experiences.",
      codeLink: "https://github.com/ShubhamChavhan1615/TripMate-client-server",
      btn1: "Watch Video",
      btn2: "Source Code",
      btn3: "Live Preview",
      liveLink: "https://tripmatetraveling.netlify.app",
    },
    {
      id: 4,
      logo: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      name: "Weather Web",
      description: "Stay informed with our weather app, detailed insights for your location.",
      codeLink: "https://shubhamchavhan1615.github.io/WeatherApp/",
      btn2: "Live Preview",
    },
  ];

  const cardItem2 = [
    {
      id: 1,
      name: "Flipkart Clone",
      description: "Flipkart's UI is predominantly built using HTML for the structural elements of the webpage and CSS for styling and layout.",
      codeLink: "https://shubhamchavhan1615.github.io/FlipkartClone/",
    },
    {
      id: 2,
      name: "Food Web Clone",
      description: "Food UI is predominantly built using HTML for the structural elements of the webpage and CSS for styling and layout.",
      codeLink: "https://shubhamchavhan1615.github.io/foodpage/",
    },
    {
      id: 3,
      name: "PhoneShop Clone",
      description: "Phone shop user interface predominantly built using HTML for the structural elements of the webpage and CSS for styling and layout.",
      codeLink: "https://shubhamchavhan1615.github.io/Mobile/",
    },
  ];

  const openModal = (video) => {
    setCurrentVideo(video);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentVideo("");
  };

  return (
    <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 text-gray-800 bg-white">
      <div>
        <h1 className="text-4xl font-bold text-center mb-5 text-gray-900">Portfolio</h1>
        <span className="block text-center underline font-semibold mb-4 text-gray-600">Featured Projects</span>
        <span className="block text-center underline font-semibold mb-4 text-gray-600">MERN Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-5">
          {cardItem.map(({ id, logo, name, video, description, codeLink, btn1, btn2, btn3, liveLink }) => (
            <div
              className="relative bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:shadow-xl transform hover:scale-105 border border-gray-200"
              key={id}
            >
              <img
                src={logo}
                className="w-24 h-24 mx-auto p-2 rounded-full border-4 border-gray-300 transition-transform duration-300 transform hover:scale-110"
                alt={name}
              />
              <div className="text-center mt-4">
                <div className="font-bold text-xl text-gray-900 mb-1">{name}</div>
                <p className="text-gray-600 text-sm mb-4">{description}</p>
              </div>
              <div className="flex flex-wrap justify-center space-x-2 mb-4">
                {btn1 && (
                  <button
                    className="bg-gradient-to-r from-blue-500 to-green-400 text-white font-semibold py-2 px-4 rounded-full transition duration-300 shadow-md hover:shadow-lg hover:scale-105 hover:from-green-500 hover:to-blue-500 mb-2"
                    onClick={() => openModal(video)}
                  >
                    {btn1}
                  </button>
                )}
                {btn2 && (
                  <a
                    href={codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-500 to-green-400 text-white font-semibold py-2 px-4 rounded-full transition duration-300 shadow-md hover:shadow-lg hover:scale-105 hover:from-green-500 hover:to-blue-500 mb-2"
                  >
                    {btn2}
                  </a>
                )}
                {btn3 && liveLink && (
                  <a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-500 to-green-400 text-white font-semibold py-2 px-4 rounded-full transition duration-300 shadow-md hover:shadow-lg hover:scale-105 hover:from-green-500 hover:to-blue-500"
                  >
                    {btn3}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <span className="block text-center underline font-semibold mb-4 text-gray-600">HTML + CSS + JS Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-5">
          {cardItem2.map(({ id, name, description, codeLink }) => (
            <div
              className="relative bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:shadow-xl transform hover:scale-105 border border-gray-200"
              key={id}
            >
              <div className="text-center mt-4">
                <div className="font-bold text-xl text-gray-900 mb-1">{name}</div>
                <p className="text-gray-600 text-sm mb-4">{description}</p>
              </div>
              <div className="flex justify-center space-x-4 mb-4">
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-500 to-green-400 text-white font-semibold py-2 px-4 rounded-full transition duration-300 shadow-md hover:shadow-lg hover:scale-105 hover:from-green-500 hover:to-blue-500"
                >
                  Live Preview
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-4 w-11/12 md:w-2/3 lg:w-1/2 relative max-h-[80vh] overflow-hidden shadow-lg">
            <button
              className="absolute top-2 right-1 z-50 text-gray-700 hover:text-red-500"
              onClick={closeModal}
            >
              ✕
            </button>
            <video
              className="w-full h-auto rounded-lg"
              controls
              autoPlay
              onEnded={closeModal}
            >
              <source src={currentVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </div>
  );
}

export default PortFolio;
