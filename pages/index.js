import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "@/components/Header/Header";
import Banner from "@/components/Banner/Banner";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Banner */}
      <Banner />
    </>
  );
}
