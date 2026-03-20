import { useNavigate } from "react-router-dom";

import { TbCrosshair } from "react-icons/tb";


function MakeNewProjectButton ({index}) {
    const navigate = useNavigate();

    return(
        <div className="w-[27%] aspect-video rounded-md cursor-pointer border-black border-[7px] flex items-center"
        style={{
            borderImage:"repeating-linear-gradient(45deg, black 0 35px, transparent 0px 70px) 1"
        }} onClick={() => navigate("/")}>
                <TbCrosshair className="w-full text-[100px]"/>
        </div>
    )
}

export default MakeNewProjectButton;