import { useNavigate } from "react-router-dom";

function ProjectItem ({index}) {
    const sticker = ["/Stickers/hcyay.gif", "/Stickers/orpheusBox.png", "/Stickers/starEmoji.png", "/Stickers/strawberryEmoji.png"]
    const navigate = useNavigate();

    return(
        <div className="bg-orange-300 w-[30%] aspect-video rounded-md cursor-pointer" onClick={() => navigate("/project/example")}>
            <h3 className="text-[30px] mt-2">This is a project</h3>
            <img src="/Stickers/orpheusBox.png" className="place-self-center w-[30%]"/>
            <p className="place-self-start pl-10 pr-10">Here's a little demo on my YSWS pitch. Nothing functional yet, but with the framework done...</p>
        </div>
    )
}

export default ProjectItem;