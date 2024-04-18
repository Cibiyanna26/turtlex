import React from "react";
import Close from "../components/Screen1/Close";
import Login from "../components/Screen1/Login";
import Footer from "../components/Screen1/Footer";
import { Toaster } from 'react-hot-toast';
import FooterNavbar from "../components/Screen2/FooterNavbar";

const Screen1 = () =>{
    
    return(
        <div className="h-[100vh]">
                <Toaster/>
                <Close/>
                <Login/>
                <FooterNavbar/>
        </div>
    )
}

export default Screen1;