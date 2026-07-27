import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import CorePhilosophy from "./components/CorePhilosophy";
import FeaturedPrograms from "./components/FeaturedPrograms";
import EventsAndLeadership from "./components/EventsAndLeadership";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="flex-grow">
        <HeroSection />
        <CorePhilosophy />
        <FeaturedPrograms />
        <EventsAndLeadership />
      </main>
      <Footer />
    </>
  );
}
