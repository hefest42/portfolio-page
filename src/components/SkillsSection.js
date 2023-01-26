import React from "react";

const SkillsSection = () => {
    return (
        <section className="w-[95%] p-16 border-y-2 flex flex-col justify-center items-center">
            <div className="flex flex-col md:flex-row justify-center items-center">
                <div className="md:hidden text-3xl p-6">HTML</div>
                <div className="md:hidden text-3xl p-6">CSS</div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center">
                <div className="md:hidden text-3xl p-6">JavaScript</div>
                <div className="md:hidden text-3xl p-6">React</div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center">
                <div className="md:hidden text-3xl p-6">Redux</div>
                <div className="md:hidden text-3xl p-6">Sass</div>
            </div>
            <div className="hidden w-full h-full md:flex flex-row justify-between items-center">
                <div className="h-full flex flex-col justify-between">
                    <div className="py-6 text-4xl">HTML</div>
                    <div className="py-6 text-4xl">CSS</div>
                </div>
                <div className="h-full flex flex-col justify-between">
                    <div className="py-6 text-4xl">JavaScript</div>
                    <div className="py-6 text-4xl">React</div>
                </div>
                <div className="h-full flex flex-col justify-between">
                    <div className="py-6 text-4xl">Redux</div>
                    <div className="py-6 text-4xl">Sass</div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
