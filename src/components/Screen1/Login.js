import React, { useState } from "react";
import { notifyError,notifySuccess , notifyMessage } from "../../utils/notify";
import { Toaster } from 'react-hot-toast';
import { validateEmail , validatePassword } from "../../utils/small.service";
import { wait } from "@testing-library/user-event/dist/utils";

const Login = () =>{


    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [loading,setLoading] = useState(0);

   

    function handleClick(e){
        setLoading(1);
        const waitsec = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('success');
            }, 1500);
        })
        waitsec.then((res)=>{
            console.log(res)
            if (!email || !password) {
                notifyError('Please fill all the fields');
            }
            else if (!validateEmail(email)) {
                notifyError('Please enter valid email address');
            }
            else {
                notifySuccess('Login Successful');
            }
            setLoading(0);
        })
    }

    function toggle() {
        let input_toggle = document.getElementById('toggle_button')
        let password_input = document.getElementById('password_input')

        if (password_input.type === 'password') {
            password_input.type = 'text'
            input_toggle.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#707070" width="20" height="20">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>`
    } else {
        password_input.type = 'password'
        input_toggle.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#707070" width="20" height="20">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
        </svg>`
        }
    }

    return(
        <>
            <div className="relative flex justify-center mt-[18px]">
                <div className="w-[327px] flex flex-col gap-[56px]">
                    <div className="flex flex-col gap-[48px]">
                        <div className="flex flex-col gap-[32px]">
                            <h1 className="text-[22px] font-semibold tracking-tighter h-[32px]">Sign in to Coinbase</h1>
                            <div className="flex flex-col gap-[16px]">
                                <div className="w-[327px] h-[88px] flex flex-col gap-[8px]">
                                    <label htmlFor="" className="text-[16px]">Email</label>
                                    <input 
                                        type="email" 
                                        placeholder="example@gmail.com" 
                                        className="h-[58px] border-[1px] border-[#CFCFCF] p-[16px] rounded-[4px]"
                                        value={email}
                                        onChange={(e)=>setEmail(e.target.value)}
                                        ></input>
                                </div>
                                <div className="w-[327px] h-[88px] flex flex-col gap-[8px] relative">
                                    <label htmlFor="" className="text-[16px]">Password</label>
                                    <input 
                                        type="password" 
                                        placeholder="XXXXXXXX" 
                                        className="h-[58px] border-[1px] border-[#CFCFCF] p-[16px] rounded-[4px]"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        id="password_input"
                                        ></input>
                                    <button id="toggle_button" className="absolute right-[15px] top-[50px]" onClick={()=>toggle()}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#707070" width="20" height="20">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                        </svg>
                                    </button>

                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <button 
                                className="text-[#2752E7] text-[14px]"
                                onClick={()=>notifyMessage('Feature not available, under development')}
                                >Forget password ?</button>
                            <button 
                                className="text-[#2752E7] text-[14px]"
                                onClick={()=>notifyMessage('Feature not available, under development')}
                                >Privacy policy</button>
                        </div>
                    </div>
                    <div>
                        <button 
                            className="text-center text-[16px] w-[327px] h-[58px] bg-[#2752E7] text-white rounded-[8px] hover:bg-[#2751e7de] duration-200 ease-in"
                            onClick={handleClick}
                            >{
                                loading == 0 ? 'Sign In ' : <i class="fa fa-circle-o-notch fa-spin"></i>
                            }
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;