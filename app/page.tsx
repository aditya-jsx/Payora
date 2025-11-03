"use client"

import Banner from "./components/banner";
import Hero from "./components/hero";
import NavBar from "./components/navbar";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Banner />
    </>
  );
}
