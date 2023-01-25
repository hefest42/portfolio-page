import React from "react";

const Hero = () => {
    return (
        <section className="flex flex-col justify-center items-center py-28 px-8">
            <div className="text-4xl text-bold text-center">
                <h1>Nice to meet you! </h1>
                <h1 className="underline decoration-indigo-500 decoration-4">I'm Nemanja Vidovic.</h1>
            </div>

            <div className="text-center my-24 text-lg">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque nostrum molestiae aperiam. Non illum
                saepe quaerat, numquam sequi eveniet a!
            </div>

            <h2 className="underline decoration-indigo-500 decoration-4 text-2xl">CONTACT ME</h2>
        </section>
    );
};

export default Hero;
