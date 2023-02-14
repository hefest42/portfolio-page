import React from "react";

import Input from "./Input";

const Contact = ({ contactRef }) => {
    const sendEmailHandler = (e) => {
        e.preventDefault();
    };

    return (
        <div className="screen-width border-b-2 lg:pb-10 flex flex-col justify-center items-center" ref={contactRef}>
            <div className="md:w-1/2 lg:w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start">
                <div className=" lg:w-5/12 lg:mt-4 flex flex-col justify-start items-center">
                    <h1 className="text-5xl">Contact</h1>
                    <p className="text-lg lg:text-start text-center mt-8 text-slate-300">
                        I would love to hear about your project and how i could help. Please fill in the from, and I'll
                        get back to you as soon as possbile.
                    </p>
                </div>

                <form className="w-full lg:w-5/12 py-12 lg:py-0" onSubmit={sendEmailHandler}>
                    <Input type="text" name="Name" />
                    <Input type="email" name="Email" />

                    <div className="mt-4 h-48 bg-slate-700 rounded-3xl flex flex-col justify-start items-start">
                        <textarea
                            required="yes"
                            className="w-full bg-transparent text-xl mt-4 px-4 outline-none"
                            name="text-area"
                            id="text-area"
                            cols="40"
                            rows="10"
                            placeholder="Message"
                        />
                    </div>

                    <button className="bg-indigo-500 w-full h-10 rounded-3xl mt-4">Send</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
