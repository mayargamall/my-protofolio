import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import Toolkit from "./components/Toolkit";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="  bg-primary font-body text-body-text">
      
      
      <HeroSection />
      <AboutMe />
      <Toolkit />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
