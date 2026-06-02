import HeroSection from "../components/aylin/bacho/HeroSection";
import { BachilleresSection } from "../components/aylin/sobremi/BachilleresSection";
import { DreamsSection } from "../components/aylin/sobremi/DreamsSection";
import { FamilySection } from "../components/aylin/sobremi/FamilySection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function AylinSobreMiPage() {
  return (
    <><Navbar />
    <main className="min-h-[calc(100dvh-10rem)] bg-background">
      <HeroSection />
      <FamilySection />
      <BachilleresSection />
      <DreamsSection />
      <Footer/>
      {/* 
      
      
      */}
    </main>
    </>
  );
}