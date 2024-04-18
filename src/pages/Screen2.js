import React , {useEffect} from "react";
import Topbar from "../components/Screen2/Topbar";
import Content from "../components/Screen2/Content";
import FooterNavbar from "../components/Screen2/FooterNavbar";


const Screen2=() =>{
 
    return(
        <>
         
            <Topbar />
            {/* <div className="h-[calc(100vh-190px)] overflow-y-auto no-scrollbar"> */}
                <Content />
            {/* </div> */}
            <FooterNavbar />
            
        </>
    )
}

export default Screen2;