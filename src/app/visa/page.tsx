import Image from 'next/image';


function Visa() {
    return (<div>
        <Image className='mx-auto max-md:w-[100%]' src={'/img/visa.webp'} alt={'visa'} width={1390} height={150} />
        <div className='relative mx-auto md:bottom-[60px] bg-white md:w-[70%] md:h-48 z-50 md:py-4 md:px-14 text-center 
        rounded-lg border border-zinc-300 max-md:w-[90%]'>
            <h1 className='md:text-4xl font-bold text-[#2b2f33] max-md:text-xl max-md:my-2'>ویزای سفر</h1>
            <input type="search" className="border md:p-3 md:w-[750px] border-zinc-300 rounded-lg md:ml-2 md:mt-10
            max-md:w-[90%] max-md:p-1" placeholder="کشورمقصد" />
            <button className="border md:p-3 border-zinc-300 rounded-lg bg-yellow-500 md:px-[70px] hover:bg-yellow-600
            max-md:w-[90%] max-md:p-1">جستجو</button>

        </div>

    </div>);
}

export default Visa;