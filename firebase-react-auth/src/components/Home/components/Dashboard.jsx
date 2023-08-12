import React from "react";
import Card from '../components/Card.jsx'
import Socials from "./Socials.jsx";
import user from '../../../assets/user.png';
import clock from '../../../assets/clock.png';
import cloud from '../../../assets/cloud1.png';
import chat from '../../../assets/chat.png';
import fb from '../../../assets/fb.png';
import twitter from '../../../assets/twitter.png';
import link from '../../../assets/in.png';
import google from '../../../assets/google.jpeg';

const Dashboard = () => {
    return (
        <div className="flex flex-col bg-[#f4f4f4] h-[91vh]">
            <div className="flex h-16 w-full bg-[#ffffff] ">
                <h1 className="py-4 ml-10 text-2xl font-poppins font-normal shadow-b-md">Dashboard</h1>
            </div>
            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-10 lg:h-[40vh] w-11/12 mt-10 mx-auto bg-[#f4f4f4]">
                <Card img={user} num={2500} text={"Welcome"} />
                <Card img={clock} num={"123.50"} text={"Average Time"} />
                <Card img={cloud} num={"1,805"} text={"Collections"} />
                <Card img={chat} num={54} text={"Comments"} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:h-[32vh] w-11/12 mt-10 mx-auto bg-[#f4f4f4]">
                <Socials social={fb} one={"35k"} two={"Friends"} three={"128"} four={"Feeds"} />
                <Socials social={twitter} one={"58.4k"} two={"Followers"} three={"978"} four={"Tweets"} />
                <Socials social={link} one={"758+"} two={"Contacts"} three={"365"} four={"Feeds"} />
                <Socials social={google} one={"450"} two={"Followers"} three={"57"} four={"Circles"} />
            </div>
        </div>
    );
};
export default Dashboard;