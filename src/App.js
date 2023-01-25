import Header from "./components/Header";
import Hero from "./components/Hero";
import SkillsSection from "./components/SkillsSection";
import Contact from "./components/Contact";

function App() {
    return (
        <div className=" bg-black text-white">
            <Header />
            <Hero />
            <SkillsSection />
            <Contact />
        </div>
    );
}

export default App;
