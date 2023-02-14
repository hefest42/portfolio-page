import React from "react";

import Project from "./Project";

const PROJECTS = [{}, {}, {}, {}];

const Projects = ({ executeScroll }) => {
    return (
        <section className="w-full py-10 flex flex-col justify-center items-center">
            <div className="w-11/12 flex justify-between lg:w-[60%]">
                <h2 className="text-4xl">Projects</h2>
                <button className="button px-4 h-10 rounded-3xl" onClick={() => executeScroll()}>
                    CONTACT ME
                </button>
            </div>

            <Project />
            <Project picSide="left" />
            <Project />
        </section>
    );
};

export default Projects;
