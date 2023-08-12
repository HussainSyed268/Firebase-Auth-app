import React from "react";
const Card = (props) => {
    return (
        <div className="flex items-center justify-between sm:flex-col sm:items-normal sm:justify-normal bg-[#ffffff] rounded-lg shadow-md">
            <div className="flex flex-col justify-end h-3/6 sm:h-2/6 items-center mb-8 sm:mt-4 lg:mt-10">
                <img className="h-4/6 rounded-t-lg " src={props.img} />
            </div>
            <div className="flex flex-col h-2/6 justify-center items-center mr-8 sm:mt-4 sm:mr-0">
                <h1 className=" text-slate-600 text-3xl sm:font-normal sm:text-4xl md:text-5xl sm:mb-4">{props.num}</h1>
                <h1 className="text-slate-400 text-2xl sm:font-normal sm:text-2xl md:text-3xl">{props.text}</h1>
            </div>
        </div>
    );
}
export default Card;