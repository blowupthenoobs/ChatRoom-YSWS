import { useState } from "react"
import { useNavigate } from "react-router-dom";

import TextMessageBox from "../ApplicationStuffs/TextMessageBox";

export default function LandingPage() {
    const navigate = useNavigate();


    const [openTab, changeTab] = useState("none");

    const expandTab = function (newState) {
        if(openTab !== newState)
            changeTab(newState);
        else
            changeTab("none");
    }

    return (
        <div className="ml-3">
            <h1 className="text-[50px] text-black pt-[10px]">Welcome to Chatroom</h1>
            <div className="bg-orange-300 h-[40vh] w-[60%] rounded-md place-self-center text-center content-center">
                <div className="w-[95%] h-[90%] bg-white rounded-md place-self-center flex flex-col justify-end p-2">
                        <TextMessageBox user={"blowupthenoobs"} text="I just made a textbox!" fromThisUser={false}/>
                        <TextMessageBox user={"Jeffery"} text="Congrats man! nice job staying on schedule" fromThisUser={true}/>
                        <TextMessageBox user={"Jeffery"} sticker={0} fromThisUser={true} showpfp={false}/>
                        <TextMessageBox user={"blowupthenoobs"} text="testing a really long text block to see what will happen, this is kinda important to know for the styling cuz it'll let me know how big messages will look on the website when someone enevitably sends one" fromThisUser={false} showpfp={true}/>
                    </div>
            </div>
            <br/>
            <p className="text-[20px] w-[500px] place-self-center">Meet a small group of people to help keep you accountable and motivated to accomplish your goals and earn rewards along the way!</p>
            <br/>
            <button className="mt-5 bg-green-300 w-[150px] place-self-center rounded-md text-[25px] p-2 font-medium" onClick={() => navigate("/homepage")}>Get Started</button>





            <h2 className="text-[45px] place-self-center mt-[30px]">How it works</h2>

            <div className="mt-10 w-[60%] place-self-center">
                <h3 className="text-[35px] place-self-start">Step 1</h3>
                {/* wanted 50% of 100, now we have 60% */}
                <div className="flex bg-orange-300 min-h-[20vh] w-[83.3333%] mr-[16.6667%] rounded-md place-self-center text-center">
                    <div className="w-[50%] content-center">
                        <p>put image thing here</p>
                    </div>
                    <div className="w-[50%] content-center p-5">
                        <p className="text-[25px]">Once started, navigate</p>
                        <p className="text-[25px]">to projects and hit the create new button</p>
                    </div>
                </div>
            </div>

            <div className="mt-20 w-[60%] place-self-center">
                <h3 className="text-[35px] place-self-end">Step 2</h3>
                {/* wanted 50% of 100, now we have 60% */}
                <div className="flex bg-orange-300 min-h-[20vh] w-[83.3333%] ml-[16.6667%] rounded-md place-self-center text-center content-center">
                    <div className="w-[50%] content-center p-5">
                        <p className="text-[25px]">Describe what your project will be and fill out the other details about your project that you can</p>
                    </div>
                    <div className="w-[50%] content-center">
                        <p>put image thing here</p>
                    </div>
                </div>
            </div>
            
            <div className="mt-10 w-[60%] place-self-center">
                <h3 className="text-[35px] place-self-start">Step 3</h3>
                {/* wanted 50% of 100, now we have 60% */}
                <div className="flex bg-orange-300 min-h-[20vh] w-[83.3333%] mr-[16.6667%] rounded-md place-self-center text-center">
                    <div className="w-[50%] content-center">
                        <p>put image thing here</p>
                    </div>
                    <div className="w-[50%] content-center p-5">
                        <p className="text-[23px]">After you fill in the details, try setting some of the goals for your project. You can be as specific or general as you want, but note that more specific descriptions and increments will not only be easy to judge on completion, but also help give a clear roadmap for completion.</p>
                        {/* <p className="text-[25px]">to projects and hit the create new button</p> */}
                    </div>
                </div>
            </div>

            <div className="mt-20 w-[60%] place-self-center">
                <h3 className="text-[35px] place-self-end">Step 2</h3>
                {/* wanted 50% of 100, now we have 60% */}
                <div className="flex bg-orange-300 min-h-[20vh] w-[83.3333%] ml-[16.6667%] rounded-md place-self-center text-center content-center">
                    <div className="w-[50%] content-center p-5">
                        <p className="text-[25px]">Describe what your project will be and fill out the other details about your project that you can</p>
                    </div>
                    <div className="w-[50%] content-center">
                        <p>put image thing here</p>
                    </div>
                </div>
            </div>





            <h2 className="text-[45px] place-self-center mt-[30px]">FAQ</h2>
            
            <div className="bg-white w-[600px] place-self-center mt-[10px]">
                <h3 className="text-[30px] border-black border-[1.5px] cursor-pointer" onClick={() => expandTab("dbldp")}>Can I double dip with another YSWS? \/</h3>
                {openTab === "dbldp"?
                <>
                    <p className="text-[25px] p-5 pt-2">You can put your projects from other YSWS programs if you want the community and or accountability from working with others, but you will not earn rewards from this program if you are doing so.</p>
                </>:
                <>
                </>}
            </div>

            <div className="bg-white w-[600px] place-self-center mt-[10px] mb-10">
                <h3 className="text-[30px] border-black border-[1.5px] cursor-pointer" onClick={() => expandTab("cntprjt")}>Can I continue working on old projects? \/</h3>
                {openTab === "cntprjt"?
                <>
                    <p className="text-[25px] p-5 pt-2">You can continue your work on older projects as long as you make it clear how much time was spent before this program started, and all time counted for it must be from after this ysws started.</p>
                </>:
                <>
                </>}
            </div>

            <div className="h-10 m-10"></div>
        </div>
    )
}