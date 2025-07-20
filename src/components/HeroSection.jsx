import React from "react";
import heroBg from "../assets/hero-bg.jpg";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { FaArrowDownLong } from "react-icons/fa6";

export default function HeroSection() {
  return (
    <section
      className="relative flex flex-col justify-center min-h-screen px-8 bg-primary"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for soft effect */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.4)",
          backgroundImage:
            "linear-gradient(to right, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0))",
        }}
      ></div>
      <div className="container  mx-auto w-[95%]">
        <div className="relative z-10 max-w-4xl ps-6  ">
          <p className="hero-intro pb-2 font-bolder text-5xl">Hello, I'm</p>
          <h1 className="mb-6  hero-font text-9xl font-bold text-black leading-tight">
            Mayar Gamal
          </h1>
          <h2 className="text-3xl hero-font2 text-gray-800 font-medium mt-2 mb-4 ">
            Frontend Developer
          </h2>
          <p className="text-gray-500 font-normal text-xl mb-8 hero-font2">
            Passionate about creating beautiful, responsive web experiences with
            React.js & Next.js
          </p>
          <div className="flex gap-4">
            <button className=" hover:scale-105 transition-all duration-300 text-white font-medium px-8 py-2 text-lg rounded-lg shadow bg-secondary-color  ">
              View My Work
            </button>
            <button className="border-2 border-pink-400/60    text-pink-400/60 text-lg   font-medium px-8 py-2 rounded-lg  hover:text-white  hover:bg-[#FF84B7] transition-all duration-300">
              Get In Touch
            </button>
          </div>
          <div className="flex gap-6 mt-8 text-2xl justify-start">
            <a
              className="text-gray-500"
              href="https://www.linkedin.com/in/mayar-gamal-67644b298/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              className="text-gray-500"
              href="https://github.com/mayargamall"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              className="text-gray-500"
              href="mailto:mayarrgamallz@gmail.com"
              aria-label="Gmail"
            >
              <FaEnvelope />
            </a>
          </div>
          <div className="flex gap-6 mt-8 ">
            <FaArrowDownLong className="bounce-arrow text-secondary-color text-2xl  " />
          </div>
        </div>
      </div>
    </section>
  );
}
