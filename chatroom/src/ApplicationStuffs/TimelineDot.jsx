

function TimelineDot ({size = 50, lineLength = 60}) {
    const outerClassName = "-ml-1 mb-auto aspect-square bg-black rounded-full shrink-0";
    const newSize = " w-[" + size.toString() + "px] h-[" + size.toString() + "px]";
    const topMargin = " mt-[" + ((50 - size) / 2).toString() + "px]";

    return(
        <div className={"flex flex-col mt-[" + (lineLength).toString() + "px]"}>
            <div className={"h-[" + (50 + lineLength).toString() + "px] w-2 bg-blue-500 place-self-center -ml-1 "}></div>
            <div className={outerClassName + newSize + topMargin}></div>
            <div className={"h-[" + (50 + lineLength).toString() + "px] w-2 bg-blue-500 place-self-center -ml-1 "}></div>
        </div>
        
    )
}

export default TimelineDot;