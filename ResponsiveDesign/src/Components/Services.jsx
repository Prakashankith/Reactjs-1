import React from "react";

const services = [
  {
    title: "Web Development",
    description:
      "We build responsive and user-friendly websites that help your business grow online. Our development process includes modern frameworks and top-notch technologies.",
  },
  {
    title: "App Development",
    description:
      "Our mobile apps are designed to give users a seamless experience on both Android and iOS. We focus on performance, design, and usability.",
  },
  {
    title: "Digital Marketing",
    description:
      "With our expertise in digital marketing, we help you increase online visibility, drive traffic, and convert visitors into loyal customers.",
  },
  {
    title: "UI/UX Design",
    description:
      "We craft beautiful and intuitive interfaces that prioritize user experience, helping your product stand out in a crowded marketplace.",
  },
];

const Services = () => {
  return (
    <div className="bg-gray-100 py-20">
      <h2 className="text-center text-3xl font-bold mb-6">Our Services</h2>
      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-blue-600">
              {service.title}
            </h3>
            <p className="mt-4 text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
