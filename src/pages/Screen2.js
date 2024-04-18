import React  from "react";
import Topbar from "../components/Screen2/Topbar";
import Content from "../components/Screen2/Content";
import FooterNavbar from "../components/FooterNavbar";


const Screen2=() =>{
 
    return(
        <div className="h-[100vh] overflow-y-auto">
            <Topbar />
            <div className=" overflow-y-auto no-scrollbar z-10 relative top-[60px] h-[calc(100vh-160px)]">
                <Content />
            </div>
            <FooterNavbar />
            
        </div>
    )
}

export default Screen2;