

function StickerItem ({index}) {

    return(
        <div className={`w-[80%] min-h-[20px] rounded-md flex flex-col
            ${ fromThisUser 
                    ? "ml-auto"
                    : "mr-auto"
                }`}>
            {showpfp?
            <>
                <h3 className={`${fromThisUser? "text-right": "text-left"}`}>{user}</h3>
            </>: <>
            </>}

            {/* Textbubble and PFP */}
            <div className="flex">
                {fromThisUser?
                    <>
                    </>:
                    <>
                        {showpfp?
                        <>
                            <div className="w-[5%] mb-auto aspect-square bg-black rounded-full shrink-0 "></div>
                        </>:
                        <>
                        </>
                        }
                    </>}
                <h1 className={`p-2 rounded-lg
                    ${ fromThisUser 
                        ? "ml-auto mr-1 bg-blue-400 text-right"
                        : "mr-auto ml-1 bg-red-500 text-left"
                    }`}>{text}</h1>
                {fromThisUser && showpfp?
                <>
                    <div className="w-[5%] mb-auto aspect-square bg-black rounded-full shrink-0"></div>
                </>: <>

                </>}
            </div>
            
        </div>
    )
}

export default TextMessageBox;