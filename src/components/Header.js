import React from "react";

import { BsGithub } from "react-icons/bs";

const Header = () => {
    return (
        <header className="lg:w-[80%] w-full flex flex-row justify-between items-center p-4">
            <h1 className="lg:text-2xl">nemanjaVidovic</h1>
            <div>
                <BsGithub className="lg:w-7 lg:h-7" />
            </div>
        </header>
    );
};

export default Header;
