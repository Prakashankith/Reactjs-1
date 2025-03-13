import React from "react";

const About = () => {
  return (
    <div className="container mx-auto py-20 text-center">
      <h1 className="text-4xl font-bold text-blue-600">About Us</h1>
      <p className="mt-4 text-lg">
        We are a passionate team working to deliver the best solutions. Here’s a
        little about us:
      </p>

      {/* Mission Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-blue-600">Our Mission</h2>
        <p className="mt-4 text-lg">
          Our mission is to help businesses thrive by providing innovative and
          user-friendly digital solutions.
        </p>
      </div>

      {/* Vision Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-blue-600">Our Vision</h2>
        <p className="mt-4 text-lg">
          We envision a world where technology simplifies life and business
          through seamless digital experiences.
        </p>
      </div>

      {/* Team Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-blue-600">Our Team</h2>
        <p className="mt-4 text-lg">
          We are a team of dedicated professionals with expertise in
          development, design, and marketing.
        </p>
      </div>
    </div>
  );
};

export default About;
