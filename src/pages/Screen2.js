import React , {useEffect} from "react";
import Topbar from "../components/Screen2/Topbar";
import Content from "../components/Screen2/Content";
import FooterNavbar from "../components/Screen2/FooterNavbar";


const Screen2=() =>{
 
    return(
        <div className="">
         
            <Topbar />
            <div className=" overflow-y-auto no-scrollbar">
                <Content />
            </div>
            <FooterNavbar />
            
        </div>
    )
}

export default Screen2;