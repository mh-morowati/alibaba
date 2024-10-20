'use client'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { useEffect, useRef, useState } from 'react';
import LogWithNumber from './LogWithNumber';
import LogWithPassword from './LogWithPassword';



function Login() {
    const [loginPage, setLoginPage] = useState(false);
    const [number, setNumber] = useState(true);
    const [withPassword, setWithPassword] = useState(false);
    const loginRef = useRef<HTMLDivElement | null>(null);
    
    const onclick = () => {
        setLoginPage((prev) => !prev);
    };

    const close = () => {
        setLoginPage(false);
    };

    const onpassword = () => {
        setNumber((prev) => !prev);
        setWithPassword((prev) => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (loginRef.current && !loginRef.current.contains(event.target as Node)) {
                close();  // Close the login div if the click is outside
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (<>
        <button className="py-[1px] px-6" onClick={onclick}><PersonOutlineIcon /><span>ورود یا ثبت‌نام</span></button>
        {loginPage && <div className='w-[600px] h-[500px] bg-white z-[9999999999] absolute mt-28 right-[450px] rounded-lg p-5'
        ref={loginRef} >
            <button onClick={close} className='float-left text-3xl text-black'>X</button>
            {number && <div className='p-14 text-center'>
                <LogWithNumber/>
                <button onClick={onpassword} className='mt-5 text-blue-500 hover:border'>ورودباکلمه عبور</button>
            </div>}
            {withPassword && <div className='p-14 text-center'>
                <LogWithPassword/>
                <button onClick={onpassword} className='mt-5 text-blue-500 hover:border'>ورودبارمزیکبارمصرف</button>
            </div>}
        </div>}
    </>);
}

export default Login;