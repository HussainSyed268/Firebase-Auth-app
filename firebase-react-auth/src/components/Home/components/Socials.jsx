import React from "react";
const Socials = (props) => {
    return (
        <div className="flex flex-col bg-[#ffffff] rounded-lg shadow-md">
            <div className="h-3/6 w-full">
                <img className="h-full w-full rounded-t-lg" src={props.social} alt="social" />
            </div>
            <div className="flex h-2/6 justify-center items-start mt-6">
                <div className="flex flex-col justify-center items-center mx-4 min-[1700px]:mx-10">
                    <h1 className="text-black font-semibold text-2xl min-[1420px]:text-3xl mb-2">{props.one}</h1>
                    <h1 className="text-slate-400 font-normal text-2xl min-[1420px]:text-3xl">{props.two}</h1>
                </div>
                <div className="flex flex-col justify-center items-center mx-4 min-[1700px]:mx-10">
                    <h1 className="text-black font-semibold text-2xl min-[1420px]:text-3xl mb-2">{props.three}</h1>
                    <h1 className="text-slate-400 font-normal text-2xl min-[1420px]:text-3xl">{props.four}</h1>
                </div>
            </div>
        </div>
    );
}
export default Socials;