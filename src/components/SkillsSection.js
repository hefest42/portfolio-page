import React from "react";

const SkillsSection = () => {
    return (
        <section className="lg:w-[80%] w-full p-16 flex flex-col md:flex-row justify-center md:justify-between items-center">
            <div className="flex flex-col justify-center items-start">
                <div className="lg:text-5xl p-6">HTML</div>
                <div className="lg:text-5xl p-6">CSS</div>
            </div>
            <div className="flex flex-col justify-center items-start">
                <div className="lg:text-5xl p-6">JavaScript</div>
                <div className="lg:text-5xl p-6">React</div>
            </div>
            <div className="flex flex-col justify-center items-start">
                <div className="lg:text-5xl p-6">Redux</div>
                <div className="lg:text-5xl p-6">Sass</div>
            </div>
        </section>
    );
};

export default SkillsSection;
