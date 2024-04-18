import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


const FooterNavbar = () => {

    const location = useLocation();

    const isHome = location.pathname === "/home";
    const isSignin = location.pathname === "/signin";



    return(

        <>
            <div className="w-[100vw] fixed bottom-0  h-[80px] border-[1px] border-[#CFCFCF] z-40 bg-white  flex flex-col justify-center">
                <div className="relative top-[7px] px-[37.5px]  h-[45px] flex flex-row justify-center gap-[35px]">
                    <Link to="/home" className="flex flex-col items-center w-[40px] h-[45px]">
                        <svg width="30" height="30" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.85288 8.94909C3.5 9.69275 3.5 10.5388 3.5 12.2308V17.5152C3.5 19.8651 3.5 21.04 4.25315 21.77C4.96838 22.4632 6.09756 22.4981 8.28571 22.4999V16.2691C8.28571 14.9993 9.33871 14.0229 10.5714 14.0229H14.4286C15.6613 14.0229 16.7143 14.9993 16.7143 16.2691V22.4999C18.9024 22.4981 20.0316 22.4632 20.7468 21.77C21.5 21.04 21.5 19.8651 21.5 17.5152V12.2308C21.5 10.5388 21.5 9.69275 21.1471 8.94909C20.7942 8.20544 20.1315 7.65485 18.8061 6.55369L17.5204 5.48552C15.1247 3.49517 13.9268 2.5 12.5 2.5C11.0732 2.5 9.8753 3.49517 7.47961 5.48552L6.1939 6.55369C4.86847 7.65485 4.20576 8.20544 3.85288 8.94909ZM14.7143 22.5V16.2691C14.7143 16.1623 14.616 16.0229 14.4286 16.0229H10.5714C10.384 16.0229 10.2857 16.1623 10.2857 16.2691V22.5H14.7143Z" 
                                fill={`${isHome ? '#2752E7' : '#707070'}`} />
                        </svg>
                        <div className={`tracking-wide text-[12px] ${isHome ? 'text-[#2752E7]' : 'text-[#707070]'}`}>Home</div>
                    </Link>

                    <Link to={"/signin"} className="flex flex-col items-center w-[40px] h-[45px]">
                        <svg width="30" height="30" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.3706 20.9156C20.9663 20.7957 21.3194 20.1705 21.0091 19.6481C20.3805 18.5895 19.4083 17.6592 18.1721 16.9465C16.5449 16.0085 14.5511 15.5 12.5 15.5C10.4489 15.5 8.45512 16.0085 6.82788 16.9465C5.59166 17.6592 4.61947 18.5895 3.99086 19.6481C3.68063 20.1705 4.03372 20.7957 4.62935 20.9156C9.82434 21.9614 15.1757 21.9614 20.3706 20.9156Z" 
                                fill={`${isSignin ? '#2752E7' : '#707070'}`} />
                            <circle cx="12.5" cy="8.5" r="6" fill={`${isSignin ? '#2752E7' : '#707070'}`} />
                        </svg>
                        <div className={`tracking-wide text-[12px] ${isSignin ? 'text-[#2752E7]' : 'text-[#707070]'}`}>Sign In</div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default FooterNavbar;