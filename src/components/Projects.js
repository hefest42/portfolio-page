import React from "react";

import Project from "./Project";

const PROJECTS = [{}, {}, {}, {}];

const Projects = ({ executeScroll }) => {
    return (
        <section className="lg:w-[80%] md:py-10 py-16 px-3">
            <div className="flex justify-between">
                <h2 className="text-4xl">Projects</h2>
                <button
                    className="pb-2 border-b-4 text-lg md:text-xl border-indigo-500"
                    onClick={() => executeScroll()}
                >
                    CONTACT ME
                </button>
            </div>
            <div className="mt-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <Project />
                    <Project />
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <Project />
                    <Project />
                </div>
            </div>
        </section>
    );
};

export default Projects;
