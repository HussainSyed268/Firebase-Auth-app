import React from "react";
const Card = (props) => {
    return (
        <div className="flex flex-col bg-[#ffffff] rounded-lg shadow-md">
            <div className="flex flex-col justify-end h-4/6 items-center">
                <img className="h-2/6 rounded-t-lg" src={props.img} alt="user" />
                <h1 className=" text-slate-600 font-normal text-5xl mt-8">{props.num}</h1>
            </div>
            <div className="flex h-2/6 justify-center items-start mt-4">
                <h1 className="text-slate-400 font-normal text-3xl">{props.text}</h1>
            </div>
        </div>
    );
}
export default Card;