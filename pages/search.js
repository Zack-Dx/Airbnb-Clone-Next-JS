import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { useRouter } from "next/router";
import { format } from "date-fns";
const Search = ({ searchResults }) => {
  const router = useRouter();

  const { location, startDate, endDate, noOfGuests } = router.query;

  // Formatting Dates
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate}- ${formattedEndDate}`;

  return (
    <>
      <div>
        <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />
        <main className="flex">
          <section className="flex-grow px-12 pt-14">
            <p className="text-sm">
              300+ Stays - {range} - for {noOfGuests} guests
            </p>
            <h1 className="text-3xl font-semibold mt-2 mb-6">
              Stays in {location}
            </h1>
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

export default Search;

export async function getServerSideProps() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/location`);
    const searchResults = await res.json();
    return {
      props: {
        searchResults,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        searchResults: null,
      },
    };
  }
}
