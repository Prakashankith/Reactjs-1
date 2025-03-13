import React from "react";
const clientsData = [
  {
    name: "Client 1",
    rating: 4.5,
    logo: "data:image/png;base64,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",
  },
  {
    name: "Client 2",
    rating: 3.8,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHqU969k9k4KGcDroWV0JqoCf2ze4mzgCajg&s",
  },
  {
    name: "Client 3",
    rating: 5.0,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFRJDXalFy-27gR84jHUu6BORB1LO77Kxyqw&",
  },
  {
    name: "Client 4",
    rating: 4.2,
    logo: "data:image/jpeg;base64,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",
  },
];

const StarRating = ({ rating }) => {
  const filledStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - filledStars - (halfStar ? 1 : 0);

  return (
    <div className="flex space-x-1">
      {Array(filledStars)
        .fill(0)
        .map((_, index) => (
          <span key={`filled-${index}`} className="text-yellow-400">
            ★
          </span>
        ))}
      {halfStar && <span className="text-yellow-400">☆</span>}
      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <span key={`empty-${index}`} className="text-gray-300">
            ★
          </span>
        ))}
    </div>
  );
};

const Clients = () => {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-center text-2xl font-bold mb-4">Our Clients</h2>
      <div className="flex justify-around space-x-8">
        {clientsData.map((client, index) => (
          <div key={index} className="p-4 bg-white shadow-md text-center">
            {/* Client Logo */}
            <img
              src={client.logo}
              alt={client.name}
              className="w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold">{client.name}</h3>
            {/* Star Rating */}
            <StarRating rating={client.rating} />
            <p className="mt-2 text-sm">Rating: {client.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
