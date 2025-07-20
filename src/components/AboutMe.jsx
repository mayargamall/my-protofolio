import React from "react";
import { FaHeart } from "react-icons/fa";
import { GiStarsStack } from "react-icons/gi";
import { RiCodeView } from "react-icons/ri";
import { WiStars } from "react-icons/wi";

export default function AboutMe() {
  return (
    <section className="bg-primary py-20 px-8">
      <div className="container mx-auto w-[95%]">
      <div className="max-w-5xl mx-auto">
        {/* Title with pink line */}
        <div className="text-center mb-16">
          <h2 className=" hero-font text-5xl font-bold text-black mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto "></div>
        </div>

        {/* Content divided into two sections */}
        <div className="grid md:grid-cols-2 gap-16">
          {/* Personal Information Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-black mb-6 hero-font2">Who I Am</h3>
            <p className="text-lg text-body-text mb-6 leading-relaxed hero-font2">
              Hello, I'm Mayar Gamal — a passionate frontend developer who
              believes beautiful code creates beautiful experiences. I
              specialize in crafting digital interfaces that are not only
              visually stunning but also intuitive and user-centered.
            </p>
            <p className="text-lg text-body-text mb-6 leading-relaxed hero-font2">
              My expertise lies in React.js and Next.js development, where I
              bring designs to life with pixel-perfect precision and seamless
              functionality. I'm deeply passionate about responsive design,
              modern UI/UX practices, and writing clean, maintainable code.
            </p>
            <p className="text-lg text-body-text leading-relaxed hero-font2">
              I thrive on the details — from micro-interactions to accessibility
              considerations — because I believe great user experiences are
              built on thoughtful craftsmanship.
            </p>
          </div>

          {/* Skills/Features Section */}
          <div className="space-y-6">
           
            <div className="space-y-6">
              <div className="bg-light rounded-xl p-6 flex items-start gap-4 shadow-xl shadow-pink-100 hover:scale-105 transition-all ">
                <div className="w-12 h-12 bg-light-pink rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-accent text-4xl font-bold"><RiCodeView />
                  </span>
                </div>
                <div>
                  <h4 className=" font-medium text-headline text-lg mb-2 hero-font2">
                    Clean Code
                  </h4>
                  <p className="text-medium-gray leading-relaxed hero-font2">
                    Writing maintainable, scalable code that stands the test of
                    time
                  </p>
                </div>
              </div>

              <div className="bg-light rounded-xl p-6 flex items-start gap-4 shadow-xl shadow-pink-100 hover:scale-105 transition-all ">
                <div className="w-12 h-12 bg-light-pink rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-accent text-xl"><FaHeart />
                  </span>
                </div>
                <div>
                  <h4 className=" font-medium text-headline text-lg mb-2 hero-font2">
                    User-Centered Design
                  </h4>
                  <p className="text-medium-gray leading-relaxed hero-font2">
                    Creating experiences that users love and find intuitive
                  </p>
                </div>
              </div>

              <div className="bg-light rounded-xl p-6 flex items-start gap-4 shadow-xl shadow-pink-100 hover:scale-105 transition-all ">
                <div className="w-12 h-12 bg-light-pink rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-accent text-4xl"><WiStars /></span>
                </div>
                <div>
                    <h4 className=" font-medium text-headline text-lg mb-2 hero-font2">
                    Attention to Detail
                  </h4>
                  <p className="text-medium-gray leading-relaxed hero-font2">
                    Perfecting every pixel and interaction for flawless results
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
