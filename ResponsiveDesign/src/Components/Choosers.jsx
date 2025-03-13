import React from "react";

const reasons = [
  {
    title: "Expert Team",
    description:
      "Our team is made up of industry experts who are passionate about delivering quality work. We focus on your success by leveraging the latest tools and trends.",
  },
  {
    title: "Customer-Centric Approach",
    description:
      "We prioritize your needs and make sure every project is tailor-made for your business goals. We’re always here to provide personalized support.",
  },
  {
    title: "Proven Results",
    description:
      "Our work speaks for itself. We have a track record of helping businesses grow through our innovative strategies and solutions.",
  },
  {
    title: "Innovative Solutions",
    description:
      "We thrive on creativity and innovation, offering unique solutions that help your business stand out from the competition and make an impact.",
  },
];

const Choosers = () => {
  return (
    <div className="bg-blue-600 text-white py-20">
      <h2 className="text-center text-3xl font-bold mb-8">Why Choose Us?</h2>
      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="bg-white text-blue-600 shadow-lg rounded-lg p-6 hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-xl font-semibold">{reason.title}</h3>
            <p className="mt-4 text-gray-700">{reason.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Choosers;
