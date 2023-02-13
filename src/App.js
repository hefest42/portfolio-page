import { useRef } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import SkillsSection from "./components/SkillsSection";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
    const contactRef = useRef(null);

    const executeScroll = () => contactRef.current.scrollIntoView({ behavior: "smooth" });

    return (
        <div className="f-full bg-black text-white flex flex-col justify-start items-center">
            <div className="lg:w-[80%] md:w-[95%] flex flex-col justify-start items-center">
                <Header />
                <Hero executeScroll={executeScroll} />
                <SkillsSection />
                <Projects />
            </div>
            <Footer />
        </div>
    );
}

export default App;
