

function TimelineDash ({tallestLine = 40}) {

    return(
        <div
            className={"w-[100%] -ml-1 place-self-center"}
            style={{
                marginBottom: (tallestLine + "vh")
            }}>
            <hr className=" border-black border-[6px]"/>
        </div>
    )
}

export default TimelineDash;