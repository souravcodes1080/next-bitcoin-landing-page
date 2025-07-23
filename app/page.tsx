import FirstSection from "@/components/FirstSection";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SecondSection from "@/components/SecondSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FirstSection />
      <SecondSection />
    </>
  );
}
