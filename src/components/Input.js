import React from "react";

import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Input = ({ type, name }) => {
    return (
        <div className="bg-slate-700 w-full h-10 rounded-3xl flex justify-start items-center mt-4">
            <label className="text-slate-400 ml-4 flex justify-start items-center" htmlFor={name}>
                {name === "Name" ? (
                    <FaUserAlt className="w-[20px] h-[20px]" />
                ) : (
                    <MdEmail className="w-[20px] h-[20px]" />
                )}
            </label>
            <input
                className="flex-1 bg-transparent outline-none ml-2 text-lg"
                type={type}
                id={name}
                name={name}
                required="yes"
                placeholder={name}
            />
        </div>
    );
};

export default Input;
