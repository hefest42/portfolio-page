import React from "react";

const Project = ({ picSide }) => {
    return (
        <div
            className={`w-11/12 h-[35rem] mt-10 flex flex-col-reverse justify-center items-center md:h-[16rem] md:justify-between lg:w-[60%] lg:h-[22rem] lg:mt-16 ${
                picSide === "left" ? "md:flex-row-reverse" : "md:flex-row"
            } ${picSide === "left" ? "lg:flex-row-reverse" : "lg:flex-row"}`}
        >
            <div className="w-full h-full flex flex-col justify-between items-start md:w-5/12">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quos veritatis voluptatem amet
                    minima facere aut quis ipsa nisi aliquam, porro dignissimos velit itaque eveniet!
                </p>

                <div className="flex">
                    <p className="bg-slate-700 rounded-3xl px-4 py-2 mr-4">HTML</p>
                    <p className="bg-slate-700 rounded-3xl px-4 py-2 mr-4">CSS</p>
                    <p className="bg-slate-700 rounded-3xl px-4 py-2 mr-4">React</p>
                </div>

                <div className="w-full flex justify-between items-center">
                    <button className="button w-5/12 rounded-3xl h-10">View Project</button>
                    <button className="button w-5/12 rounded-3xl h-10">Live Demo</button>
                </div>
            </div>

            <div className="w-full h-full md:w-6/12">
                <img
                    className="w-full h-full object-cover"
                    loading="lazy"
                    src="https://cdn2.unrealengine.com/egs-fortnite-kid-laroi-announce-carousel-desktop-1248x702-f15122cae6ef.jpg?h=1080&resize=1&w=1920"
                    alt=""
                />
            </div>
        </div>
    );
};

export default Project;
