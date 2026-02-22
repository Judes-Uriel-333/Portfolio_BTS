import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Apropos from "./pages/Apropos";
import Competences from "./pages/Competences";
import Projets from "./pages/Projets";
import Contact from "./pages/Contact";
import CV from "./pages/CV";
import Certifications from "./pages/Certifications";
import Veille from "./pages/Veille";
import BTSE6 from "./pages/BTSE6";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/competences" element={<Competences />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/projets/bts-e6" element={<BTSE6 />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/veille" element={<Veille />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
