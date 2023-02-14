import React from "react";

import { BsArrowDown } from "react-icons/bs";

const Hero = ({}) => {
    return (
        <section className="screen-width  flex flex-col justify-center items-center py-16 px-8 border-white border-b-2">
            <div className="text-4xl text-bold text-center">
                <h1>Nice to meet you! </h1>
                <h1 className="underline decoration-indigo-500 decoration-4">I'm Nemanja Vidovic.</h1>
            </div>

            <div className="text-center my-24 text-lg">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque nostrum molestiae aperiam. Non illum
                saepe quaerat, numquam sequi eveniet a!
            </div>

            <button className="button text-2xl px-6 h-16 rounded-3xl">CONTACT ME</button>
            <div className="mt-20">
                <BsArrowDown className="w-10 h-10 animate-bounce" />
            </div>
        </section>
    );
};

export default Hero;
