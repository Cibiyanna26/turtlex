import React from "react";
import Topbar from "../components/Screen2/Topbar";
import Content from "../components/Screen2/Content";
import FooterNavbar from "../components/Screen2/FooterNavbar";
const Screen2=() =>{
    return(
        <>
            <div>
                <Topbar/>
                <div className="px-[24px] pt-[10px]">
                    <Content/>
                </div>
                <FooterNavbar />
            </div>
        </>
    )
}

export default Screen2;