import React from "react";
import { FaRegHeart, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoChatbubbleOutline } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-light-pink2 py-8 text-center ">
      <div className="container mx-auto w-[95%]">
        <div className="flex justify-center flex-col  gap-6 mb-4">
          <div className="">
            <h2 className="hero-font text-5xl font-bold text-black text-center mb-8">
              Let's Create Together
              <span className="block w-24 h-1 bg-accent mt-4 mx-auto "></span>
            </h2>
          </div>
          <div className="flex flex-col gap-4 items-center bg-light max-w-4xl mx-auto p-8 rounded-lg">
            <span className="text-accent text-5xl mb-4">
              <FaRegHeart />
            </span>
            <p className="text-body-text text-xl hero-font2 text-center mb-4 ">
              I'm always looking for new opportunities to collaborate and grow.
              Whether you have a project in mind or just want to say hi, I'd
              love to hear from you.
            </p>
            <p className=" hero-font2 text-medium-gray text-lg text-center">
              Whether you're looking to build something from scratch or enhance
              an existing platform, I'd love to discuss how we can bring your
              vision to life.
            </p>
            <div className="flex justify-center gap-4 mt-4 hero-font2">
              <a
                href="mailto:mayarrgamallz@gmail.com"
                className="bg-accent text-white px-8 py-2 rounded-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <FaEnvelope className="text-xl me-2" /> Send Email
              </a>
              <a
                href="https://www.linkedin.com/in/mayar-gamal-67644b298/"
                className="bg-white text-pink-400 px-8 py-2 rounded-lg hover:bg-pink-400 hover:text-white border-2 border-pink-400 transition-all duration-300 flex items-center gap-2"
              >
                <IoChatbubbleOutline className="text-xl me-2" /> Let's Chat
              </a>
            </div>
            <p className="hero-intro  font-bolder">
              Let's create something beautiful together
            </p>
            <p className="hero-font2 text-medium-gray text-lg font-bolder flex items-center justify-center gap-2">
              <FaRegHeart className="text-pink-400" />Available for new opportunities <FaRegHeart className="text-pink-400" />

            </p>
            
          </div>
          <HiOutlineDotsHorizontal className="text-accent   text-5xl mx-auto" />
        </div>
       
      </div>
    </footer>
  );
}
