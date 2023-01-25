import React from "react";

import Project from "./Project";

const PROJECTS = [{}, {}, {}, {}];

const Projects = () => {
    return (
        <section className="py-16 px-3">
            <div className="flex justify-between">
                <h2 className="text-4xl">Projects</h2>
                <button className="pb-2 border-b-4 text-lg border-indigo-500">CONTACT ME</button>
            </div>
            <div className="mt-6">
                <Project />
                <Project />
                <Project />
                <Project />
            </div>
        </section>
    );
};

export default Projects;
