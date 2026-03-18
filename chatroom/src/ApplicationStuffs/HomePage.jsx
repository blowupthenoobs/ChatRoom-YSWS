import { useState } from "react"

import NavBar from "./NavBar";
import TextMessageBox from "./TextMessageBox";

// Send Icons I've tried
import { IoSendSharp } from "react-icons/io5";
// import { AiOutlineSend } from "react-icons/ai";
import { RiSendPlaneFill } from "react-icons/ri";

import { CiFileOn } from "react-icons/ci";
import { BiSticker } from "react-icons/bi";
import { MdOutlineEmojiEmotions } from "react-icons/md";

export default function HomePage() {

    return (
        <div className="">
            <NavBar/>
            <div>   {/* can't have margins here for some reason */}
                <div className="h-[50px]"></div>
                <div className="w-[70%] h-[525px] bg-orange-300 place-self-center rounded-lg p-[30px]">
                    <div className="w-[100%] h-[90%] bg-white rounded-md place-self-center flex flex-col justify-end p-2">
                        <TextMessageBox user={"blowupthenoobs"} text="I just made a textbox!" fromThisUser={false}/>
                        <TextMessageBox user={"Jeffery"} text="Congrats man! nice job staying on schedule" fromThisUser={true}/>
                        <TextMessageBox user={"Jeffery"} sticker={0} fromThisUser={true} showpfp={false}/>
                        <TextMessageBox user={"blowupthenoobs"} text="testing a really long text block to see what will happen, this is kinda important to know for the styling cuz it'll let me know how big messages will look on the website when someone enevitably sends one" fromThisUser={false} showpfp={true}/>
                    </div>

                    <div className="w-full flex place-self-center h-[10%] mt-4 justify-between">
                        <input type="text" className="w-[50%] rounded-lg pl-1 ml-2" placeholder="Enter a message here:"/>
                        <button className="rounded-md w-[50px] h-[50px] ml-auto p-1 border-l border-r border-orange-200 text-[22px] bg-[#fdbd79]"><MdOutlineEmojiEmotions className="w-full"/></button>
                        <button className="rounded-md w-[50px] h-[50px] p-1 border-l border-r border-orange-200 text-[25px] bg-[#fdbd79]"><BiSticker className="w-full"/></button>
                        <button className="rounded-md w-[50px] h-[50px] p-1 border-l border-r border-orange-200 text-[25px] bg-[#fdbd79]"><CiFileOn className="w-full"/></button>
                        {/* <button className="rounded-full w-[50px] h-[50px] bg-blue-400 ml-auto text-[30px]"><RiSendPlaneFill className="w-full"/></button> */}
                        <button className="rounded-full w-[50px] h-[50px] bg-blue-400 ml-5 text-[30px]"><IoSendSharp className="ml-1 w-full"/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}