import React from "react";

const Project = () => {
    return (
        <div className="w-full h-80 mt-8 flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-start">
            <div className="w-[30rem] h-[100%] flex flex-col justify-between items-start">
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
                    <button className=" w-5/12 rounded-3xl h-10 bg-indigo-500">View Project</button>
                    <button className=" w-5/12 rounded-3xl h-10 bg-indigo-500">Live Demo</button>
                </div>
            </div>

            <div className="w-full lg:w-5/12 h-full">
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

// src="https://cdn2.unrealengine.com/egs-fortnite-kid-laroi-announce-carousel-desktop-1248x702-f15122cae6ef.jpg?h=1080&resize=1&w=1920"
