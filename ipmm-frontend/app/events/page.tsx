import NavBar from "../components/NavBar";
import EventsHero from "../components/EventsHero";
import UpcomingEvents from "../components/UpcomingEvents";
import PastEventsGallery from "../components/PastEventsGallery";
import BranchLocations from "../components/BranchLocations";
import Footer from "../components/Footer";

export default function Events() {
  return (
    <>
      <NavBar />
      <main>
        <EventsHero />
        <UpcomingEvents />
        <PastEventsGallery />
        <BranchLocations />
      </main>
      <Footer />
    </>
  );
}
