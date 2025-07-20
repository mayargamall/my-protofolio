import React from "react";

const skills = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
 
  "API Integration",
  "Responsive Design",
  "UI/UX",
];

export default function Toolkit() {
  return (
    <section className="bg-primary py-16 px-8">
      <div className="container mx-auto w-[95%]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="hero-font text-2xl font-bold text-black mb-8">
            My Toolkit
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-pink-200 text-black hero-font2 font-semibold px-6 py-3 rounded-full text-sm shadow  hover:text-white hover:bg-pink-500 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
