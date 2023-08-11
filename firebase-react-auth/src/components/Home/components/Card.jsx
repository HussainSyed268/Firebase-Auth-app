import React from "react";
import user from '../../../assets/user.png';
const Card = () => {
    return (
        <div className="flex flex-col bg-[#f4f4f4] h-[92.8vh]">
            <div className="flex h-16 w-full bg-[#ffffff]">
                <img src={user} width={30} height={30} alt='user' />
            </div>
            <div className=" ">

            </div>
        </div>
    );
}
export default Card;