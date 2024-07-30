import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <FaFacebook size={24} className="cursor-pointer" />
              <FaTwitter size={24} className="cursor-pointer" />
              <a href="https://www.instagram.com/__shubham__chavhan__/" target="_blank"><FaInstagram size={24} /></a>
              <FaLinkedinIn size={24} className="cursor-pointer" />
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2024 Shubham . All rights reserved.
              </p>
              <p className="text-sm">Supportive person ❤️ Manohar Chavhan</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
