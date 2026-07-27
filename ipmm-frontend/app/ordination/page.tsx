import NavBar from "../components/NavBar";
import OrdinationHero from "../components/OrdinationHero";
import OrdinationProcess from "../components/OrdinationProcess";
import OrdinationEligibility from "../components/OrdinationEligibility";
import OrdinationScripture from "../components/OrdinationScripture";
import OrdinationFAQ from "../components/OrdinationFAQ";
import OrdinationCTA from "../components/OrdinationCTA";
import Footer from "../components/Footer";

export default function Ordination() {
  return (
    <>
      <NavBar />
      <main>
        <OrdinationHero />
        <OrdinationProcess />
        <OrdinationEligibility />
        <OrdinationScripture />
        <OrdinationFAQ />
        <OrdinationCTA />
      </main>
      <Footer />
    </>
  );
}
