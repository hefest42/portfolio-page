import Header from "./components/Header";
import Hero from "./components/Hero";
import SkillsSection from "./components/SkillsSection";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
    return (
        <div className=" bg-black text-white">
            <Header />
            <Hero />
            <SkillsSection />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
