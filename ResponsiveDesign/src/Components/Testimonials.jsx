import React, { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Alice Johnson",
    message:
      "Working with this team was a game-changer for my business! They truly understand customer needs and deliver results.",
    position: "CEO, Tech Solutions",
  },
  {
    name: "Michael Stevens",
    message:
      "An excellent experience from start to finish. The quality of service and attention to detail exceeded my expectations.",
    position: "Founder, Innovate Corp.",
  },
  {
    name: "Sarah Parker",
    message:
      "I highly recommend this service to anyone looking for reliable and professional work. They made everything so easy for us.",
    position: "Marketing Director, Creative Insights",
  },
  {
    name: "John Doe",
    message:
      "Incredible service, the team is highly skilled, and the project was completed on time and with excellent communication.",
    position: "Project Manager, BuildX",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000); // Change testimonial every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-200 py-10 text-center">
      <h2 className="text-2xl font-bold mb-4">What Our Clients Say</h2>
      <div className="max-w-2xl mx-auto">
        <p className="text-lg font-semibold italic text-gray-600 mb-2">
          "{testimonials[index].message}"
        </p>
        <p className="text-sm font-medium text-blue-600">
          {testimonials[index].name}
        </p>
        <p className="text-xs text-gray-500">{testimonials[index].position}</p>
      </div>
    </div>
  );
};

export default Testimonials;
