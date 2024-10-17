'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";

function LogWithNumber() {
    const [number,setNumber] = useState('');
    const [receiveCode,setReceiveCode] = useState(false);
    const [message,setMessage] = useState('');
    const [userPass,setUserPass] = useState('');
    const [password,setPassword] = useState('');
    const router = useRouter();

    const validateEmailOrNumber = (input: string): boolean => {
        const phonePattern = /^09[0-9]{9}$/; // Updated pattern to start with "091" and followed by 8 digits
    
        return phonePattern.test(input);
      };

    const onclick = () =>{
        if(validateEmailOrNumber(number)){
            setReceiveCode(true);
            const pass = Math.round(Math.random() * 100000);
            setPassword(pass.toString());
        }
        else setMessage('لطفاشماره معتبرواردکنید!')
    };

    const loginAccount = () =>{
        if(password == userPass) router.push('/login/user-account');
    };
    return ( <>
    <h1 className='text-xl text-black font-bold'>ورود یا ثبت‌نام</h1>
            { !receiveCode && <><h3 className='text-black my-5'>برای ادامه شماره موبایل خود را وارد کنید.</h3>
                <input className='p-2 rounded-lg w-72 border border-zinc-400 mt-11' type="number" name="" id="" 
                placeholder='شماره موبایل' value={number} onChange={(e) => setNumber(e.target.value)} />
                <p className="text-sm text-red-600">{message}</p>
                <br />
                <button className='bg-blue-500 mt-3 text-white p-2 w-72 rounded-lg'
                onClick={onclick}>تاییدودریافت کد</button><br /></>}
                {receiveCode && <>
                <h1 className="mb-1 mt-3">{password}</h1>
                <h3 className='text-black mb-5'>رمزیکبارمصرف راواردکنید</h3>
                <input type="number" className='p-2 rounded-lg w-72 border border-zinc-400 mt-11'
                onChange={(e) => setUserPass(e.target.value)} /><br />
                <button className='bg-blue-500 mt-3 text-white p-2 w-72 rounded-lg'
                onClick={loginAccount}>ورود</button><br />
                </>}
    </> );
}

export default LogWithNumber;