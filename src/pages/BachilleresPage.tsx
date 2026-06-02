import MemoryCollageSection from "../components/aylin/bacho/ExperienceSection";
import GaleriaSection from "../components/aylin/bacho/GaleriaSection";
import HistoriaSection from "../components/aylin/bacho/HistoriaSection";
import MomentosSection from "../components/aylin/bacho/MomentosSection";
import PersonasSection from "../components/aylin/bacho/PersonasSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function BachilleresPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100dvh-10rem)] bg-background">
        
        <MemoryCollageSection />
        <HistoriaSection/>
        <PersonasSection/>
        <MomentosSection/>
        <GaleriaSection/>
        <Footer/>


        
      </main>
    </>
  );
}