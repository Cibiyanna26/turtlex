import React from "react";
import { Link } from "react-router-dom";

const Resources = () => {
    return (
        <>
            <div className="flex flex-col gap-[12px]">
                <div className="font-bold text-[18px]">Resources</div>
                <Link to={'#'} className="text-[16px] flex flex-row items-center gap-[16px]" aria-label="resources available">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.9763 2.5H7.49996C5.92861 2.5 5.14294 2.5 4.65478 2.98816C4.16663 3.47631 4.16663 4.26198 4.16663 5.83333V14.1667C4.16663 15.738 4.16663 16.5237 4.65478 17.0118C5.14294 17.5 5.92861 17.5 7.49996 17.5H12.5C14.0713 17.5 14.857 17.5 15.3451 17.0118C15.8333 16.5237 15.8333 15.738 15.8333 14.1667V7.35702C15.8333 7.0164 15.8333 6.84608 15.7699 6.69294C15.7064 6.5398 15.586 6.41937 15.3451 6.17851L12.1548 2.98816C11.9139 2.7473 11.7935 2.62687 11.6404 2.56343C11.4872 2.5 11.3169 2.5 10.9763 2.5Z" stroke="#707070" stroke-width="2" />
                        <path d="M7.5 10.8333L12.5 10.8333" stroke="#707070" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M7.5 14.1667L10.8333 14.1667" stroke="#707070" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M10.8334 2.5V5.83333C10.8334 6.61901 10.8334 7.01184 11.0775 7.25592C11.3215 7.5 11.7144 7.5 12.5 7.5H15.8334" stroke="#707070" stroke-width="2" />
                    </svg>
                    <div className="text-[#2752E7] tracking-wide">Offical website</div>
                </Link>
                <Link to={'#'} className="text-[16px] flex flex-row gap-[16px]" aria-label="resources available">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.6086 17.5H6.29634C4.89958 17.5 4.20121 17.5 3.76729 17.0118C3.33337 16.5237 3.33337 15.738 3.33337 14.1667V5.83333C3.33337 4.26199 3.33337 3.47631 3.76729 2.98816C4.20121 2.5 4.89958 2.5 6.29634 2.5H13.7037C15.1005 2.5 15.7989 2.5 16.2328 2.98816C16.6667 3.47631 16.6667 4.26199 16.6667 5.83333V11.8096C16.6667 12.1503 16.6667 12.3206 16.6103 12.4737C16.5539 12.6269 16.4469 12.7473 16.2328 12.9882L12.6562 17.0118C12.4421 17.2527 12.335 17.3731 12.1989 17.4366C12.0628 17.5 11.9114 17.5 11.6086 17.5Z" stroke="#707070" stroke-width="1.5" />
                        <path d="M11.6666 17.5V13.6111C11.6666 12.6945 11.6666 12.2362 11.9514 11.9514C12.2361 11.6667 12.6945 11.6667 13.6111 11.6667H17.5" stroke="#707070" stroke-width="1.5" />
                    </svg>

                    <div className="text-[#2752E7] tracking-wide">Whitepaper</div>
                </Link>

            </div>
        </>
    )
}

export default Resources;