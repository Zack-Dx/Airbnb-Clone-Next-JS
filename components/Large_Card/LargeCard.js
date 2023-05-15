import React from "react";
import Image from "next/image";
const LargeCard = ({ img, title, description, buttonText }) => {
  return (
    <>
      <div className="relative h-96 min-w-[300px] cursor-pointer">
        <Image
          className="rounded-2xl"
          src={img}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <p>{description}</p>
        <button className="text-sm text-white bg-gray-900 mt-5 py-3 px-6 rounded-lg">
          {buttonText}
        </button>
      </div>
    </>
  );
};

export default LargeCard;
