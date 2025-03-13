import React from "react";
import image1 from "../assets/image1.png"; // import image1 from the assets folder
import image2 from "../assets/image2.png"; // import image2 from the assets folder

const Home = () => {
  return (
    <div className="home-container py-20 text-center">
      <h1 className="text-4xl font-bold text-blue-600">
        Welcome to Our Website
      </h1>
      <p className="mt-4 text-lg">
        We are glad to have you here. Check out our services and learn more
        about what we do!
      </p>

      {/* Flexbox container to display images side by side */}
      <div className="flex justify-center items-center mt-10 gap-8">
        <img
          src={image1}
          alt="Service Image 1"
          className="rounded-lg shadow-md max-w-sm h-auto"
        />
        <img
          src={image2}
          alt="Service Image 2"
          className="rounded-lg shadow-md max-w-sm h-auto"
        />
      </div>
    </div>
  );
};

export default Home;
