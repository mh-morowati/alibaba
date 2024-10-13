'use client'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { useState } from 'react';



function Login() {
    const [loginPage, setLoginPage] = useState(false);
    const [number, setNumber] = useState(true);
    const [withPassword, setWithPassword] = useState(false);

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

    return (<>
        <button className="py-[1px] px-6" onClick={onclick}><PersonOutlineIcon /><span>ورود یا ثبت‌نام</span></button>
        {loginPage && <div className='w-[600px] h-[500px] bg-white z-[9999999999] absolute mt-28 right-[450px] rounded-lg p-5'>
            <button onClick={close} className='float-left text-3xl text-black'>X</button>
            {number && <div className='p-14 text-center'>
                <h1 className='text-xl text-black font-bold'>ورود یا ثبت‌نام</h1>
                <h3 className='text-black my-5'>برای ادامه شماره موبایل خود را وارد کنید.</h3>
                <input className='p-2 rounded-lg w-72 border border-zinc-400 mt-11' type="number" name="" id="" placeholder='شماره موبایل' />
                <br />
                <button className='bg-blue-500 mt-11 text-white p-2 w-72 rounded-lg'>تاییدودریافت کد</button><br />
                <button onClick={onpassword} className='mt-5 text-blue-500 hover:border'>ورودباکلمه عبور</button>
            </div>}
            {withPassword && <div className='p-14 text-center'>
                <h1 className='text-xl text-black font-bold'>ورود با کلمه عبور</h1>
                <h3 className='text-black my-5'>شماره موبایل یا آدرس ایمیل به همراه کلمه عبور خود را وارد کنید.</h3>
                <input className='p-2 rounded-lg w-72 border border-zinc-400 mt-11' type="text" name="" id="" placeholder="آدرس ایمیل یاشماره موبایل" />
                <br />
                <input className='p-2 rounded-lg w-72 border border-zinc-400 mt-11' type="password" name="" id="" placeholder="کلمه عبور" />
                <br />
                <button className='bg-blue-500 mt-11 text-white p-2 w-72 rounded-lg'>ورودبه علی بابا</button>
                <br />
                <button onClick={onpassword} className='mt-5 text-blue-500 hover:border'>ورودبارمزیکبارمصرف</button>
            </div>}
        </div>}
    </>);
}

export default Login;