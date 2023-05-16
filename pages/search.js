import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
const search = () => {
  return (
    <>
      <div>
        <Header />
        <main className="flex">
          <section className="flex-grow px-12 pt-14">
            <p className="text-sm">300+ Stays for 5 number of guests</p>
            <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in Mars</h1>
            <div className="hidden lg:inline-flex space-x-3 mb-5 text-gray-800 whitespace-nowrap">
              <p className="button">Cancellation Flexibility</p>
              <p className="button">Type of Place</p>
              <p className="button">Price</p>
              <p className="button">Rooms and Beds</p>
              <p className="button">More Filters</p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default search;
