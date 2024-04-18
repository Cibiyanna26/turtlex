import React from "react";
import { notifyMessage } from "../../utils/notify";
import { Link } from "react-router-dom";
const Close = () =>{
    return (
        <div className="w-full h-[56px] py-[16px] pl-[24px] border-[1px] border-[#CFCFCF]">
            <Link to="/home" className="" aria-label="navigate to home screen" title="close signin -> home">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 5L5 19" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M5 5L19 19" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </Link>
        </div>
    )
}

export default Close;