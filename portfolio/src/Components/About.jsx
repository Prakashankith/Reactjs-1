import React from "react";
import Navbar from "./NavBar";
import avatar from "../assets/avatar.webp";
import { service, testimonials } from "./data";

const About = () => {
  return (
    <div className="md:rounded-xl bg-gray-600 md:m-7 flex-1 p-7">
      <Navbar />
      <div className="mt-7">
        <h1 className="text-white font-bold text-3xl mb-2">About Me</h1>
        <hr className="border-3 text-yellow-500 w-12 rounded-4xl" />
        <div className="mt-5 md:hidden">
          <img src={avatar} alt="" className="bg-gray-700 rounded-2xl" />
        </div>
        <p className="mt-4 text-gray-300 text-xl font-semibold">
          Hi! I'm Rohit Singh, a passionate Full-Stack Developer with expertise
          in the MERN stack, WordPress, and SEO. With a strong foundation in
          modern web development and an eye for detail, I create elegant,
          user-friendly web solutions tailored to meet client needs.
        </p>
        <p className="mt-2 text-gray-300 text-xl font-semibold">
          My journey into tech began from a non-IT background, and I've embraced
          every challenge to hone my skills in development, problem-solving, and
          teamwork. I’m always eager to learn and explore new technologies to
          deliver cutting-edge web experiences.When I’m not coding, I enjoy
          sharing my knowledge through my YouTube channel, where I teach
          JavaScript, MERN stack, and WordPress concepts. Let’s connect and
          build something amazing together!
        </p>
        {/* service section */}
        <h1 className="text-2xl text-white font-bold mt-7">What I'm Doing</h1>
        <div className="grid md:grid-cols-2 gap-6 mt-7">
          {service.map((item, index) => {
            return (
              <div
                className="bg-gray-700 border shadow p-5 text-white flex gap-5 items-start rounded-xl"
                key={index}
              >
                <div className="text-6xl text-yellow-500">{item.logo}</div>
                <div>
                  <h1 className="font-bold text-2xl">{item.title}</h1>
                  <p className="text-xl text-gray-300">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        {/* testimonial section */}
        <h1 className="text-2xl text-white font-bold mt-7">Testimonials</h1>
        <div className="flex flex-col md:flex-row gap-14 md:gap-7 mt-14">
          {testimonials.map((item, index) => {
            return (
              <div
                className="bg-gray-700 border border-white rounded-xl shadow py-4 px-6"
                key={index}
              >
                <div className="flex gap-5">
                  <img
                    src={item.img}
                    alt=""
                    className="h-20 w-20 bg-gray-800 rounded-2xl -mt-14 border-2 shadow-2xl border-gray-600"
                  />
                  <div>
                    <h1 className="text-white font-bold text-xl">
                      {item.name}
                    </h1>
                    <p>⭐⭐⭐⭐⭐</p>
                  </div>
                </div>
                <p className="text-gray-300 text-lg pr-6 mt-2">{item.para}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
