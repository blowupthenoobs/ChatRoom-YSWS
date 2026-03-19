import { useNavigate } from "react-router-dom";

function ProjectItem ({index}) {
    const sticker = ["/Stickers/hcyay.gif", "/Stickers/orpheusBox.png", "/Stickers/starEmoji.png", "/Stickers/strawberryEmoji.png"]
    const navigate = useNavigate();

    return(
        <div className="bg-orange-300 w-[27%] aspect-video rounded-md mr-20 cursor-pointer" onClick={() => navigate("/")}>
            <h3 className="text-[30px] mt-2">This is a project</h3>
            <img src="/Stickers/orpheusBox.png" className="place-self-center h-[150px]"/>
            <p className="place-self-start pl-10 pr-10">A small description goes here...</p>
        </div>
    )
}

export default ProjectItem;