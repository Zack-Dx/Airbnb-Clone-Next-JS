import React from "react";
import Image from "next/image";
const ExploreCard = ({ img, location, distance }) => {
  return (
    <>
      <div className="flex items-center m-3 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-150 ease-out">
        {/* Left */}
        <div className="relative h-16 w-16 ">
          <Image className="rounded-lg" src={img} alt={location} fill />
        </div>
        {/* Right */}
        <div>
          <h2 className="font-medium">{location}</h2>
          <h3 className="text-gray-500">{distance}</h3>
        </div>
      </div>
    </>
  );
};

export default ExploreCard;
