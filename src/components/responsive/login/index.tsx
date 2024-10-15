'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function LoginRes() {
    const [number, setNumber] = useState(true);
    const [withPassword, setWithPassword] = useState(false);


    const onpassword = () => {
        setNumber((prev) => !prev);
        setWithPassword((prev) => !prev);
    };

    return (<>
        <div className='md:w-[600px] md:h-[500px] bg-white z-[9999999999] absolute md:right-[450px] rounded-lg p-5 max-md:w-[100%]'>
           <Link href={'/'}> 
           <Image className='md:hidden mx-auto' src={'/img/alibaba-logo.svg'} alt={'alibaba-logo'} width={110} height={50} />
           </Link>
            {number && <div className='p-14 text-center max-md:p-2'>
                <h1 className='text-xl text-black font-bold'>ورود یا ثبت‌نام</h1>
                <h3 className='text-black my-5'>برای ادامه شماره موبایل خود را وارد کنید.</h3>
                <input className='p-2 rounded-lg w-72 border border-zinc-400 max-md: mt-5 max-md:w-[96%]' type="number" name="" id="" placeholder='شماره موبایل' />
                <br />
                <button className='bg-blue-500 mt-5 text-white p-2 w-72 rounded-lg max-md:w-[90%]'>تاییدودریافت کد</button><br />
                <button onClick={onpassword} className='mt-5 text-blue-500 hover:border'>ورودباکلمه عبور</button>
            </div>}
            {withPassword && <div className='p-14 text-center max-md:p-2'>
                <h1 className='text-xl text-black font-bold'>ورود با کلمه عبور</h1>
                <h3 className='text-black my-5'>شماره موبایل یا آدرس ایمیل به همراه کلمه عبور خود را وارد کنید.</h3>
                <input className='p-2 rounded-lg w-72 border border-zinc-400 max-md:w-[96%] max-md: mt-5' type="text" name="" id="" placeholder="آدرس ایمیل یاشماره موبایل" />
                <br />
                <input className='p-2 rounded-lg w-72 border border-zinc-400 max-md:w-[96%] max-md: mt-5' type="password" name="" id="" placeholder="کلمه عبور" />
                <br />
                <button className='bg-blue-500 text-white p-2 w-72 rounded-lg max-md:w-[90%] max-md: mt-5'>ورودبه علی بابا</button>
                <br />
                <button onClick={onpassword} className='mt-5 text-blue-500 hover:border'>ورودبارمزیکبارمصرف</button>
            </div>}
        </div>
    </>);
}

export default LoginRes;