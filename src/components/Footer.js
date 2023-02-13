import React from "react";

import Contact from "./Contact";

const Footer = () => {
    return (
        <footer className="w-full bg-slate-800 py-10 flex flex-col justify-center items-center">
            <Contact />
            <div className="w-[60%]">
                <h1>
                    nemanja
                    <span className="text-violet-500">vidovic</span>.
                </h1>
                <div>GITHUB ICON HERE</div>
                <div>DONT FORGET TO FIX THIS</div>
            </div>
        </footer>
    );
};

export default Footer;
