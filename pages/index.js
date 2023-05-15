import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "@/components/Header/Header";
import Banner from "@/components/Banner/Banner";
import ExploreCard from "@/components/Explore_Card/ExploreCard";
import LiveCard from "@/components/Live_Card/LiveCard";
import LargeCard from "@/components/Large_Card/LargeCard";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ exploreData, cardsData }) {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Banner */}
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        {/* Explore Nearby Section */}
        <section>
          <h2 className="text-4xl font-semibold py-8 ">Explore Nearby</h2>
          <div className="grid  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* Pulling data from Server */}
            {exploreData?.map(({ img, location, distance }) => {
              return (
                <ExploreCard
                  key={img}
                  img={img}
                  location={location}
                  distance={distance}
                />
              );
            })}
          </div>
        </section>

        {/* Live Anywhere Section */}
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-6 overflow-scroll scrollbar-hide p-3 -ml-5">
            {cardsData?.map(({ img, title }) => {
              return <LiveCard key={img} img={img} title={title} />;
            })}
          </div>
        </section>

        {/* Large Card Section */}
        <section className="relative py-16">
          <LargeCard
            img={"https://links.papareact.com/4cj"}
            title={"The Greatest Outdoors"}
            description={"Wishlists created by Airbnb."}
            buttonText={"Get Inspired"}
          />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

// Static Function to Fetch Data

export async function getStaticProps() {
  try {
    // Explore Data
    const exploreResponse = await fetch(`http://localhost:3000/api/explore`);
    const cardResponse = await fetch(`http://localhost:3000/api/live`);

    if (!exploreResponse.ok || !cardResponse.ok) {
      throw new Error(`Failed to fetch data.`);
    }

    const exploreData = await exploreResponse.json();
    const cardsData = await cardResponse.json();
    return {
      props: {
        exploreData,
        cardsData,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        exploreData: null,
        cardsData: null,
      },
    };
  }
}
