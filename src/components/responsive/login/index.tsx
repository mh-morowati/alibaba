'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LogWithNumber from '@/components/login/LogWithNumber';
import LogWithPassword from '@/components/login/LogWithPassword';

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
                <LogWithNumber/>
                <button onClick={onpassword} className='mt-5 text-blue-500 hover:border'>ورودباکلمه عبور</button>
            </div>}
            {withPassword && <div className='p-14 text-center max-md:p-2'>
                <LogWithPassword/>
                <button onClick={onpassword} className='mt-5 text-blue-500 hover:border'>ورودبارمزیکبارمصرف</button>
            </div>}
        </div>
    </>);
}

export default LoginRes;