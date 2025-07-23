import FirstSection from "@/components/FirstSection";
import Hero from "@/components/Hero";
import MazeSection from "@/components/MazeSection";
import Navbar from "@/components/Navbar";
import CompanyList from "@/components/CompanyList";
import SecondSection from "@/components/SecondSection";
import VideoSection from "@/components/VideoSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FirstSection />
      <SecondSection />
      <VideoSection />
      <CompanyList />
      <MazeSection />
    </>
  );
}
