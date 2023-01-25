import React from "react";

const Contact = () => {
    return (
        <div className="py-16 px-4 flex flex-col justify-center items-center">
            <h2 className="text-5xl">Contact</h2>
            <p className="text-lg text-center">
                I would love to hear about your project and how i could help. Please fill in the from, and I'll get back
                to you as soon as possbile.
            </p>

            <form className="w-[95%] flex flex-col justify-center items-center">
                <div className="w-full py-8">
                    <label className="w-full text-slate-400" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="w-full h-10 mt-4 text-xl bg-slate-800 border-b-2 border-white"
                        type="text"
                        name="name"
                        id="name"
                    />
                </div>

                <div className="w-full py-8">
                    <label className="w-full text-slate-400" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="w-full h-10 mt-4 text-xl bg-slate-800 border-b-2 border-white"
                        type="email"
                        name="email"
                        id="email"
                    />
                </div>

                <div className="w-full py-8">
                    <label className="w-full text-slate-400" htmlFor="text-area">
                        Message
                    </label>
                    <textarea
                        className="w-full text-xl mt-4 bg-slate-800 border-b-2 border-white outline-none"
                        name="text-area"
                        id="text-area"
                        cols="30"
                        rows="10"
                    ></textarea>
                    <div className="w-full flex justify-end mt-8">
                        <button className="pb-2 border-b-4 border-indigo-500">SEND MESSAGE</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Contact;
