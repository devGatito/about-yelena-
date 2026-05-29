
import HeroIsomeetStyle from "./components/Hero"
import Navbar from "./components/Navbar"
import SnakeScrollGallery from "./components/SnakeScrollGallery"
import MainTopicsSection from "./components/MainTopicsSection"
import Footer from "./components/Footer"

function App() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
     <HeroIsomeetStyle/>
     <SnakeScrollGallery/>
     <MainTopicsSection/> 
     <Footer/>
    

    </main>
  )
}

export default App