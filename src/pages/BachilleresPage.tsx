import BachilleresFriendship from "../components/aylin/bacho/BachilleresFriendship";
import BachilleresGallery from "../components/aylin/bacho/BachilleresGallery";
import BachilleresGratitude from "../components/aylin/bacho/BachilleresGratitude";
import BachilleresHero from "../components/aylin/bacho/BachilleresHero";
import BachilleresIntro from "../components/aylin/bacho/BachilleresIntro";
import BachilleresMemories from "../components/aylin/bacho/BachilleresMemories";
import Navbar from "../components/Navbar";

export default function BachilleresPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background text-foreground">
        <BachilleresHero />
        <BachilleresMemories />
       {/*  <BachilleresIntro />
        
        <BachilleresGratitude />
        <BachilleresFriendship />
        <BachilleresGallery /> */}
      </main>
    </>
  );
}