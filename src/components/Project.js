import React from "react";

const Project = () => {
    return (
        <div className="w-full h-80 flex flex-col-reverse justify-center items-start">
            <div className="w-[30rem] h-full flex flex-col justify-between items-start">
                <div>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic natus cum rerum fugit tempore, quas
                    nostrum cupiditate quaerat odit optio a sint nulla? Omnis, amet!
                </div>

                <div className="flex">
                    <p className="bg-slate-700 rounded-3xl px-4 py-2 mr-4">HTML</p>
                    <p className="bg-slate-700 rounded-3xl px-4 py-2 mr-4">CSS</p>
                    <p className="bg-slate-700 rounded-3xl px-4 py-2 mr-4">React</p>
                </div>
            </div>

            <div className="w-full h-full">
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
