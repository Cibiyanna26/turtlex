import React from "react";
import Close from "../components/Screen1/Close";
import Login from "../components/Screen1/Login";
import Footer from "../components/Screen1/Footer";
import { Toaster } from 'react-hot-toast';

const Screen1 = () =>{
    return(
        <>
            <div className="relative">
                <Toaster/>
                <Close/>
                <Login/>
                <Footer/>
            </div>
        </>
    )
}

export default Screen1;