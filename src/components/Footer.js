import React from "react";

import Contact from "./Contact";

const Footer = () => {
    return (
        <footer className="w-full bg-slate-800 py-10 flex flex-col justify-center items-center">
            <Contact />
            <div>Lorem, ipsum.</div>
            <div>something goes here maybe github link</div>
        </footer>
    );
};

export default Footer;
