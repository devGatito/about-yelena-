import BachilleresHero from "../components/aylin/bacho/BachilleresHero";
import BachilleresMemories from "../components/aylin/bacho/BachilleresMemories";
import Navbar from "../components/Navbar";

export default function BachilleresPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background text-foreground">
        <BachilleresHero />
        <BachilleresMemories />
     
      </main>
    </>
  );
}