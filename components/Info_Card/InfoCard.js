import React from "react";
import Image from "next/image";
const InfoCard = ({
  item: { img, location, title, description, star, price, total, long, lat },
}) => {
  return (
    <>
      <div className="flex py-7 px-4 mt-3 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-100 ease-out first:border-t ">
        <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
          {
            <Image
              className="rounded-2xl"
              src={img}
              fill
              alt={title}
              style={{ objectFit: "cover" }}
            />
          }
        </div>
        <div className="flex flex-grow flex-col  pl-5">
          <div className="flex justify-between items-end pt-5 ">
            <p>{location}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </div>
          <h4 className="text-xl">{title}</h4>
          <div className="border-b pt-2 w-12" />
          <p className="pt-2 text-sm text-gray-500">{description}</p>
          <div className="flex justify-between">
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-red-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>{" "}
              {star}
            </p>
            <div>
              <p className="text-lg lg:text-2xl">{price}</p>
              <p className="text-right font-extralight">{total}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoCard;
