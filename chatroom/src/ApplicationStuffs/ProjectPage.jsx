import { useState } from "react"
import { useNavigate } from "react-router-dom";

import NavBar from "./NavBar";
import ProjectItem from "./ProjectItem";
import MakeNewProjectButton from "./MakeNewProjectButton";

import TimelineDot from "./TimelineDot";
import TimelineDash from "./TimelineDash";

import { FaPencil } from "react-icons/fa6";

export default function ProjectPage() {

    return (
        <div className="flex flex-col">
            <NavBar/>
            <div className="w-[calc(100%-70px)] ml-auto">
                <input className="h-[50px] text-[50px] text-center p-[10px] pt-[20px] pb-[20px] rounded-md place-self-center mt-5" value={"YSWS Pitch"}/>
                {/* <h1 className="text-[50px]">YSWS Pitch</h1> */}

                <div className="w-[70%] place-self-center mt-20 flex flex-row bg-orange-300 rounded-lg">
                    <div className="flex flex-col p-5 w-[30%]">
                        <img src="/Stickers/orpheusBox.png" className="w-[70%] place-self-center"/>
                        <button className=" bg-green-300 w-[100px] place-self-center rounded-md p-2 font-medium flex place-content-center">Edit<FaPencil className="ml-3 mt-1"/></button>
                    </div>
                    <div className="w-[70%] flex flex-col p-5 gap-y-5">
                        <div className="w-[50%] place-self-center">
                            <h3 className="text-left ml-2 text-[20px]">Github Link</h3>
                            <input type="text" placeholder="https://github.com/your-username/project-name" className="w-full p-3 rounded-md place-self-center" value={"https://github.com/blowupthenoobs/ChatRoom-YSWS"}/>
                        </div>

                        <div className="w-[50%] place-self-center">
                            <h3 className="text-left ml-2 text-[20px]">Demo Link</h3>
                            <input type="text" placeholder="https://blowupthenoobs.dev" className="w-full p-3 rounded-md place-self-center" value={"https://chatroom-ysws.netlify.app/"}/>
                        </div>
                        <div className="w-[100%] place-self-center mt-2">
                            <h3>Say a bit about your project</h3>
                            <textarea placeholder="project description..." className="w-[80%] p-3 rounded-md place-self-center" rows={5} value={"Here's a little demo on my YSWS pitch. Nothing functional yet, but with the framework done, it should be pretty easy to build the backend (as I'm better at that, lol.)"}/>
                        </div>
                    </div>
                    
                </div>

                <div className="w-[70%] h-[calc(60vh+100px)] p-5 place-self-center mt-20 bg-orange-300 rounded-lg">
                    <h1 className="text-[40px]">Project Timeline</h1>
                    <div className="ml-1 flex w-full items-center">
                        {/* <div className="w-[50px] mb-auto aspect-square bg-black rounded-full shrink-0 "></div> */}
                        <TimelineDot requiredText={"start"}/>
                        <TimelineDash/>
                        <TimelineDot size={25} lineLength={30} presetGoal="Finish Landingpage" presetTimeline="2026-03-17"/>
                        <TimelineDash/>
                        <TimelineDot size={30} lineLength={20} presetGoal="Finish Homepage" presetTimeline="2026-03-18"/>
                        <TimelineDash/>
                        <TimelineDot size={20} lineLength={25} presetGoal="Finish Projects Menu" presetTimeline="2026-03-19"/>
                        <TimelineDash/>
                        <TimelineDot size={35} lineLength={20} presetGoal="Write Individual Project Page" presetTimeline="2026-03-20"/>
                        <TimelineDash/>
                        <TimelineDot size={15} lineLength={30} presetGoal="Submit!" presetTimeline="2026-03-21"/>
                        <TimelineDash/>
                        <TimelineDot requiredText={"end"}/>
                    </div>
                </div>

                <div className="h-[25vh]"></div>
                
            </div>
            
        </div>
    )
}