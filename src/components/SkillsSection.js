import React from "react";

const SkillsSection = () => {
    return (
        <section className="w-[90%] p-16 border-y-2 flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <div className="text-3xl p-6">HTML</div>
                <div className="text-3xl p-6">CSS</div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="text-3xl p-6">JavaScript</div>
                <div className="text-3xl p-6">React</div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="text-3xl p-6">Redux</div>
                <div className="text-3xl p-6">Sass</div>
            </div>
        </section>
    );
};

export default SkillsSection;
