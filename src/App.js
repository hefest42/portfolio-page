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
            <Footer />
        </div>
    );
}

export default App;
