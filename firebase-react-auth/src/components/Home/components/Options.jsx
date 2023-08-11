import React, { useEffect } from "react";
import { useState } from "react";
import arrow from "../../../assets/arrow.png";

const Options = (props) => {
    const [opt, setOpt] = useState(false);
    useEffect(() => {
        if (props.opt === true) {
            setOpt(true);
        };
    }, [props.opt]);

    return (
        <div className="pl-12 flex h-20 w-full justify-start items-center hover:bg-slate-700 duration-200">
            <img className="h-10 w-10" src={props.img} alt="img" />
            <h1 className="text-white font-normal text-xl ml-4">{props.text}</h1>
            {opt && <img className=" ml-2 h-4 w-4" src={arrow} width={32} height={32} alt="arrow" />}
        </div>)
};
export default Options;