import Header from "./components/Header";
import Hero from "./components/Hero";
import SkillsSection from "./components/SkillsSection";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    return (
        <div className=" bg-black text-white flex flex-col justify-start items-center">
            <Header />
            <Hero />
            <SkillsSection />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
