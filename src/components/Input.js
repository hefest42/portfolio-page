import React from "react";

const Input = ({ type, name }) => {
    return (
        <div className="flex flex-col">
            <label className="mt-4 text-slate-400" htmlFor={name}>
                {name}
            </label>
            <input
                className="bg-transparent border-b-[2px] border-slate-400 outline-none py-2 "
                type={type}
                id={name}
                name={name}
                required="yes"
            />
        </div>
    );
};

export default Input;
