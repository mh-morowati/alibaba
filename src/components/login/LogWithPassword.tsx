'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";


function LogWithPassword() {
    const [password,setPassword] = useState('');
    const [emailOrNumber,setEmailOrNumber] = useState('');
    const router = useRouter();


    const onclick = () =>{
        if(password === '12345' && emailOrNumber === '09121234567' || emailOrNumber === "abcd123@gmail.com"){
            router.push('/login/user-account');
        };
    };
    return ( <>
    <h1 className='text-xl text-black font-bold'>ورود با کلمه عبور</h1>
    <h1 className="mt-3 mb-1">abcd123@gmail.com | 09121234567 & password:12345</h1>
                <h3 className='text-black'>شماره موبایل یا آدرس ایمیل به همراه کلمه عبور خود را وارد کنید.</h3>
                <input className='p-2 rounded-lg w-72 border border-zinc-400 mt-11' type="text" name="" id=""
                 placeholder="آدرس ایمیل یاشماره موبایل" onChange={(e) => setEmailOrNumber(e.target.value)}/>
                <br />
                <input className='p-2 rounded-lg w-72 border border-zinc-400 mt-11' type="password" name="" id=""
                 placeholder="کلمه عبور" onChange={(e) => setPassword(e.target.value)} />
                <br />
                <button className='bg-blue-500 mt-11 text-white p-2 w-72 rounded-lg'
                onClick={onclick}>ورودبه علی بابا</button>
                <br />
    </> );
}

export default LogWithPassword;