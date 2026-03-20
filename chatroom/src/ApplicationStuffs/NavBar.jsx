import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";

import { GrCloudComputer } from "react-icons/gr";  // I think this one just looks cool, lol
import { RiComputerLine } from "react-icons/ri";

import { HiOutlineFolderOpen } from "react-icons/hi2";

import { BsShop } from "react-icons/bs";

export default function NavBar() {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;
    
    return (
        <div className="fixed h-[100vh] bg-orange-300 w-[70px] pl-0">
            <button className={`w-[90%] aspect-square mt-1 rounded-md border-t border-b border-orange-200] bg-[#fdbd79]
                ${ currentPath === "/homepage"
                    ? "text-black"
                    : "text-orange-200"
                }`} onClick={() => navigate("/homepage")}><RiComputerLine className="w-full text-[200%]"/></button>
            <button className={`w-[90%] aspect-square mt-1 rounded-md border-t border-b border-orange-200] bg-[#fdbd79]
                ${ currentPath === "/projects"
                    ? "text-black"
                    : "text-orange-200"
                }`} onClick={() => navigate("/projects")}><HiOutlineFolderOpen className="w-full text-[200%]"/></button>
            <button className={`w-[90%] aspect-square mt-1 rounded-md border-t border-b border-orange-200] bg-[#fdbd79]
                ${ currentPath === "/shop"
                    ? "text-black"
                    : "text-orange-200"
                }`} onClick={() => navigate("/")}><BsShop className="w-full text-[200%]"/></button>
        </div>
    )
}