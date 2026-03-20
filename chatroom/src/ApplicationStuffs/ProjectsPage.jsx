import { useState } from "react"
import { useNavigate } from "react-router-dom";

import NavBar from "./NavBar";
import ProjectItem from "./ProjectItem";
import MakeNewProjectButton from "./MakeNewProjectButton";

export default function ProjectsPage() {

    return (
        <div className="flex flex-col">
            <NavBar/>
            <div className="w-[calc(100%-70px)] ml-auto">
                <h1 className="text-[50px]">Projects</h1>
                <div className="w-full p-20 place-self-center rounded-lg pt-[40px] flex flex-row flex-wrap gap-x-[5%] gap-y-10">
                    <ProjectItem/>
                    <MakeNewProjectButton/>
                </div>
            </div>
            
        </div>
    )
}