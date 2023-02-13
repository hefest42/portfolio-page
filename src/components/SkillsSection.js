import React from "react";

const SkillsSection = () => {
    return (
        <section className="lg:w-[80%] w-full py-16 text-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1 place-items-center md:place-items-start">
            <div className="p-10">HTML</div>
            <div className="p-10">CSS</div>
            <div className="p-10">JavaScript</div>
            <div className="p-10">React</div>
            <div className="p-10">Redux</div>
            <div className="p-10">Sass</div>
        </section>
    );
};

export default SkillsSection;
