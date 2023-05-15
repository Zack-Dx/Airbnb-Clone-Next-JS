import React from "react";
import Image from "next/image";
const LiveCard = ({ img, title }) => {
  return (
    <>
      <div className="cursor-pointer hover:scale-105 transition transform duration-300 ease-out">
        <div className="relative h-80 w-80">
          <Image className="rounded-xl" src={img} alt={title} fill />
        </div>
        <h3 className="text-2xl mt-3">{title}</h3>
      </div>
    </>
  );
};

export default LiveCard;
