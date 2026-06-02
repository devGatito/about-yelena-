import AcademicFormationSection from "../components/aylin/mi-carrera/AcademicFormationSection";
import MiCarreraHero from "../components/aylin/mi-carrera/MiCarreraHero";
import SkillsSection from "../components/aylin/mi-carrera/SkillsSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function MiCarreraPage() {
  return (<><Navbar/>

    <main>
      {/* <MiCarreraHero /> */}
      <AcademicFormationSection/>
      <SkillsSection/>
      <Footer/>
    </main>
    </>
  );
}