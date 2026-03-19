import { useNavigate } from "react-router-dom";

function MakeNewProjectButton ({index}) {
    const navigate = useNavigate();

    return(
        <div className="w-[27%] aspect-video rounded-md cursor-pointer border-black border-[5px] bg-white"
        style={{
            borderImage:"repeating-linear-gradient(45deg, black 0 20px, transparent 20px 30px) 1"
        }} onClick={() => navigate("/")}>

        </div>
    )
}

export default MakeNewProjectButton;