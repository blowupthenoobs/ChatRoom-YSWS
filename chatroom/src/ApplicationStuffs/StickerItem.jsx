

function StickerItem ({index}) {
    const sticker = ["/Stickers/hcyay.gif"]

    return(
        <div>
            <img src={sticker[index]} className="h-[100px]" alt=""/>
        </div>
    )
}

export default StickerItem;