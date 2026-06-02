import { Routes, Route } from "react-router";
import "./index.css"
import HomePage from "./pages/HomePage";
import MiFamiliaPage from "./pages/MiFamiliaPage";
import SobreMiPage from "./pages/SobreMiPage";
import MiCarreraPage from "./pages/MiCarreraPage";
import TaxcoPage from "./pages/TaxcoPage";
import GaleriaPage from "./pages/GaleriaPage";
import MapaSitioPage from "./pages/MapaSitioPage";
import EnlacesRelacionadosPage from "./pages/EnlacesRelacionadosPage";
import ContactoPage from "./pages/ContactoPage";
import { EditorialHero } from "./pages/EditorialHero";
import { NotFoundPage } from "./components/NotFoundPage";
import BachilleresPage from "./pages/BachilleresPage";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<EditorialHero />} />
      <Route path="/aylin" element={<HomePage />} />
      <Route path="/aylin/familia" element={<MiFamiliaPage />} />
      <Route path="/aylin/bacho" element={<BachilleresPage />} />
      <Route path="/aylin/sobre-mi" element={<SobreMiPage />} />
      <Route path="/aylin/mi-carrera" element={<MiCarreraPage />} />
      <Route path="/aylin/taxco" element={<TaxcoPage />} />
      <Route path="/aylin/galeria" element={<GaleriaPage />} />
      <Route path="/aylin/mapa-sitio" element={<MapaSitioPage />} />
      <Route path="/aylin/enlaces-relacionados" element={<EnlacesRelacionadosPage />} />
      <Route path="/aylin/contacto" element={<ContactoPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}