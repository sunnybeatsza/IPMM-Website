import NavBar from "../components/NavBar";
import AboutHeroSection from "../components/AboutHeroSection";
import HistoryNarrative from "../components/HistoryNarrative";
import MissionVisionValues from "../components/MissionVisionValues";
import LeadershipTeam from "../components/LeadershipTeam";
import StatementOfFaith from "../components/StatementOfFaith";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <NavBar />
      <main className="flex-grow">
        <AboutHeroSection />
        <HistoryNarrative />
        <MissionVisionValues />
        <LeadershipTeam />
        <StatementOfFaith />
      </main>
      <Footer />
    </>
  );
}
