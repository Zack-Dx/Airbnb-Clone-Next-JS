import Image from "next/image";
import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoofGuests] = useState(1);
  const router = useRouter();

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  // Handle Selected Date
  const handleSelect = (ranges) => {
    console.log(ranges);
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  // Handle Cancel Button
  const resetInput = () => {
    setSearchInput("");
  };

  // Handle Search Function
  const search = () => {
    router.push({
      pathname: "/search",
    });
  };
  return (
    <>
      <header className="sticky items-center top-0 z-50 grid grid-cols-3 space-x-2 bg-white shadow-md p-3 md:px-6">
        {/* Left  */}
        <div
          onClick={() => router.push("/")} // To redirect to previous page
          className="relative flex items-center h-10 cursor-pointer"
        >
          <Image
            src={"https://links.papareact.com/qd3"}
            fill
            style={{ objectFit: "contain", objectPosition: "left" }}
            alt="airbnb_logo"
          />
        </div>

        {/* Mid Search */}
        <div className="flex items-center justify-center md:border-2 p-2 rounded-full  md:shadow-sm">
          <div className="relative flex-grow py-1 ">
            <input
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="outline-none w-full placeholder:text-sm text-left bg-transparent md:pl-5"
              type="text"
              placeholder="Start your search"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="absolute top-0 right-0 w-8 h-8 hidden md:inline-flex  text-white rounded-full p-2 mx-2 bg-red-500 cursor-pointer"
            >
              <path
                fillRule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center justify-end space-x-4 text-gray-600 text-sm font-semibold">
          <span className="hidden md:inline-flex cursor-pointer  hover:bg-gray-100 py-2 px-4 rounded-full">
            Airbnb your home
          </span>
          <div className="px-3 py-2 cursor-pointer hover:bg-gray-100 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>
          </div>

          <div className="flex space-x-2 border-2 p-1 md:p-2 rounded-full hover:shadow-md cursor-pointer ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 "
            >
              <path
                fillRule="evenodd"
                d="M3 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 5.25zm0 4.5A.75.75 0 013.75 9h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        {searchInput && (
          <div className="flex flex-col col-span-3 md:items-center mt-5">
            <DateRangePicker
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={["#FD5B61"]}
              onChange={handleSelect}
            />
            <div className="flex  items-center border-b mb-4">
              <h2 className="flex-grow font-semibold text-2xl pl-3">
                Number of Guests
              </h2>
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
                  d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                />
              </svg>
              <input
                value={noOfGuests}
                onChange={(e) => setNoofGuests(e.target.value)}
                min={1}
                className="w-12 pl-3 text-lg outline-none text-red-400"
                type="number"
              />
            </div>
            <div className="flex">
              <button onClick={resetInput} className="flex-grow text-gray-500">
                Cancel
              </button>
              <button onClick={search} className="flex-grow text-red-500">
                Search
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
