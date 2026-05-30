import FamilyBonds from "../components/aylin/familia/FamilyBonds";
import FamilyClosing from "../components/aylin/familia/FamilyClosing";
import FamilyGallery from "../components/aylin/familia/FamilyGallery";
import FamilyHero from "../components/aylin/familia/FamilyHero";
import FamilyIntro from "../components/aylin/familia/FamilyIntro";
import FamilyMembers from "../components/aylin/familia/FamilyMembers";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


export default function MiFamiliaPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background text-foreground">
        <FamilyHero />
        <FamilyIntro />
        <FamilyMembers />
        <FamilyBonds />
       
        <Footer/> 
       
       {/*  
        
         <FamilyGallery />
        
        
         */}
      </main>
    </>
  );
}