import React from "react";
import Image from "next/image";
const InfoCard = ({
  item: { img, location, title, description, star, price, total, long, lat },
}) => {
  return (
    <>
      <div>
        <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
          {<Image src={img} fill alt={title} style={{ objectFit: "cover" }} />}
        </div>
        <div>
          <div>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoCard;
