import React from "react";

import Input from "./Input";

const Contact = ({ contactRef }) => {
    const sendEmailHandler = (e) => {
        e.preventDefault();
    };

    return (
        <div className=" w-11/12 border-b-4 flex flex-col justify-center items-center" ref={contactRef}>
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col justify-start items-center">
                    <h1 className="text-5xl">Contact</h1>
                    <p className="text-lg text-center mt-8 text-slate-300">
                        I would love to hear about your project and how i could help. Please fill in the from, and I'll
                        get back to you as soon as possbile.
                    </p>
                </div>

                <form className="w-full py-12" onSubmit={sendEmailHandler}>
                    <Input type="text" name="NAME" />
                    <Input type="email" name="EMAIL" />

                    <div className="mt-4">
                        <label className="text-slate-400" htmlFor="text-area">
                            MESSAGE
                        </label>
                        <textarea
                            required="yes"
                            className="w-full h-[6rem] bg-transparent text-xl mt-4 border-b-[2px] border-slate-400 outline-none"
                            name="text-area"
                            id="text-area"
                            cols="30"
                            rows="10"
                        ></textarea>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;

{
    /* <div className="w-full lg:py-2 py-8">
    <label className="w-full text-slate-400" htmlFor="email">
        EMAIL
    </label>
    <input
        required="yes"
        className="w-full h-10 mt-4 text-xl bg-slate-800 border-b-2 border-white outline-none"
        type="email"
        name="email"
        id="email"
    />
</div>; */
}

{
    /* <div className="w-full lg:py-2 py-8">
    <label className="w-full text-lg text-slate-400" htmlFor="text-area">
        MESSAGE
    </label>
    <textarea
        required="yes"
        className="w-full h-[6rem] text-xl mt-4 bg-slate-800 border-b-2 border-white outline-none"
        name="text-area"
        id="text-area"
        cols="30"
        rows="10"
    ></textarea>
    <div className="w-full flex justify-end mt-8">
        <button className="pb-2 border-b-4 border-indigo-500 lg:text-xl">SEND MESSAGE</button>
    </div>
</div>; */
}
