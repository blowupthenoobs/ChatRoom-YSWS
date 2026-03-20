

import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { FaRegTrashCan } from "react-icons/fa6";

function TimelineDot ({size = 50, lineLength = 40, longestLine = 40, requiredText = "", presetGoal = "", presetTimeline = ""}) {
    const newSize = " w-[" + size.toString() + "px] h-[" + size.toString() + "px]";
    const topMargin = " mt-[" + ((50 - size) / 2).toString() + "px]";

    return(
        <div
            className={"flex flex-col items-center"}
            style={{
                marginBottom:((longestLine - lineLength) + "vh")
            }}>

            {requiredText === "" && (<div className="h-10"></div>)}

            <div
                className={"-ml-1 aspect-square bg-black rounded-full shrink-0"} 
                style={{
                    width: size,
                    height: size
            }}></div>

            <div
                className={"w-2 bg-black place-self-center -ml-1 -mt-1 rounded-md"}
                style={{
                    height: (lineLength.toString() + "vh")
            }}></div>

            {requiredText === "" && (<div className="h-10"></div>)}

            <div className="w-0 h-0 flex flex-col items-center justify-center mt-2">
                {requiredText === ""?
                    <>
                        <input className="p-2 rounded-md text-center w-[150px]" placeholder="goal" value={presetGoal}/>
                        <input className="mt-1 rounded-md text-center" type="date" value={presetTimeline}/>
                        <div className="flex flex-row gap-1 mt-1">
                            <button className="bg-green-300 w-[60px] place-self-center rounded-md p-2 text-[20px] flex place-content-center"><IoIosArrowDropleft/></button>
                            <button className="bg-green-300 w-[60px] place-self-center rounded-md p-2 text-[20px] flex place-content-center"><IoIosArrowDropright/></button>
                        </div>
                        <button className="bg-red-500 w-[115px] place-self-center rounded-md p-2 text-[17px] flex place-content-center mt-1"><FaRegTrashCan/></button>
                    </>:
                    <>
                        <p className="text-[20px]">{requiredText}</p>
                    </>}
            </div>
        </div>
        
    )
}

export default TimelineDot;