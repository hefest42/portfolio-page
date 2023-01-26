import React from "react";

const Project = () => {
    return (
        <div className="md:w-[45%] w-[95%] my-20">
            <div>
                <img
                    src="https://cdn2.unrealengine.com/egs-fortnite-kid-laroi-announce-carousel-desktop-1248x702-f15122cae6ef.jpg?h=1080&resize=1&w=1920"
                    alt=""
                    loading="lazy"
                />
            </div>
            <h1 className="text-3xl">PROJECT NAME</h1>
            <div className="my-4 flex justify-start items-center">
                <p className="mr-4">HTML</p>
                <p className="mr-4">CSS</p>
                <p className="mr-4">REACT</p>
            </div>
            <div>
                <button className="pb-2 mr-6 border-b-4 text-2xl border-indigo-500">VIEW PROJECT</button>
                <button className="pb-2 mr-6 border-b-4 text-2xl border-indigo-500">VIEW CODE</button>
            </div>
        </div>
    );
};

export default Project;
