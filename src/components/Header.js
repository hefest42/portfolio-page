import React from "react";

import { BsGithub } from "react-icons/bs";

const Header = () => {
    return (
        <header className="flex flex-row justify-between items-center p-4">
            <h1>Lorem, ipsum.</h1>
            <div>
                <BsGithub className="w-5 h-5" />
            </div>
        </header>
    );
};

export default Header;
