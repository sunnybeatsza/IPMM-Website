import NavBar from "../components/NavBar";
import ProgramsHeader from "../components/ProgramsHeader";
import ProgramsFilter from "../components/ProgramsFilter";
import ProgramGrid from "../components/ProgramGrid";
import Footer from "../components/Footer";

export default function Programs() {
  return (
    <>
      <NavBar />
      <main className="flex-grow flex flex-col items-center w-full">
        <ProgramsHeader />
        <ProgramsFilter />
        <ProgramGrid />
      </main>
      <Footer />
    </>
  );
}
