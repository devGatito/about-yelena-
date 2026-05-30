import Navbar from "../components/Navbar";
import HeroIsomeetStyle from "../components/Hero";
import SnakeScrollGallery from "../components/SnakeScrollGallery";
import MainTopicsSection from "../components/MainTopicsSection";
import Footer from "../components/Footer";



export default function HomePage() {
  return (
     <main className="min-h-screen bg-background text-foreground">
      <Navbar />
     <HeroIsomeetStyle/>
     <SnakeScrollGallery/>
     <MainTopicsSection/> 
     <Footer/>
    

    </main>
  );
}