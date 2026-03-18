import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";

export default function NavBar() {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;
    
    return (
        <div className="fixed h-[100vh] bg-orange-300 w-[70px] pl-0">
            <button className={`w-[90%] aspect-square mt-1 rounded-md border-t border-b border-orange-200
                ${ currentPath === "/homepage"
                    ? "text-black"
                    : "text-orange-200"
                }`} onClick={() => navigate("/homepage")}>home</button>
            <button className={`w-[90%] aspect-square mt-1 rounded-md border-t border-b border-orange-200
                ${ currentPath === "/projects"
                    ? "text-black"
                    : "text-orange-200"
                }`} onClick={() => navigate("/projects")}>projects</button>
        </div>
    )
}