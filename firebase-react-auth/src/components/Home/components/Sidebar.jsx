// Create a basic sidebar component and style using tailwindcss
import React, { useState, useEffect } from 'react';
import Options from './Options';
import speed from "../../../assets/speed.png";
import clockred from "../../../assets/clockred.png";
import diamond from "../../../assets/diamond.png";
import table from "../../../assets/table-grid.png";
import apps from "../../../assets/application.png";
import briefcase from "../../../assets/briefcase.png";
import paperplane from "../../../assets/paper-plane.png";
const Sidebar = (props) => {
    // const [sidebar, setSidebar] = useState(false);
    // useEffect(() => {
    //     if (props.sidebar === true) {
    //         setSidebar(true);
    //         console.log("I am in the sidebar and I am true");
    //     }
    //     else {
    //         setSidebar(false);
    //     };
    // }, [props.sidebar]);
    return (
        <>
            {props.sidebar && (
                <div className="flex flex-col bg-[#ffffff] rounded-lg shadow-md w-3/6">
                    <div className="flex justify-start h-1/6 items-center bg-[#214265]">
                        <div className="ml-8 h-24 w-24 bg-cover bg-center bg-man rounded-full"></div>
                        <div className="flex flex-col justify-center items-start mx-4">
                            <h1 className="text-white font-normal text-2xl mt-3">{props.name}</h1>
                            <h1 className="text-white font-normal text-md mb-2">{props.email}</h1>
                            <div className="flex items-center">
                                <div className="h-2 w-2 bg-green-400 rounded-full mr-2"></div>
                                <h1 className="text-green-400 font-normal text-lg">Online</h1>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col h-5/6 justify-start items-center bg-[#17283a]">
                        <div className='flex items-center h-20 w-full border-b border-orange-500'>
                            <h1 className="text-white mt-2 ml-8 font-normal text-2xl mb-2">General</h1>
                        </div>
                        <div className='flex flex-col w-full mt-6'>
                            <Options img={speed} text={"Dashboard"} opt={true} />
                            <Options img={clockred} text={"Widgets"} opt={false} />
                            <Options img={diamond} text={"Elements"} opt={true} />
                            <Options img={table} text={"Tables"} opt={false} />
                            <Options img={apps} text={"Apps"} opt={true} />
                            <Options img={briefcase} text={"Pricing Tables"} opt={false} />
                            <Options img={paperplane} text={"Contact"} opt={false} />
                        </div>
                    </div>
                </div>)}
        </>
    );
}
export default Sidebar;