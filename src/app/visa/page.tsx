import Image from 'next/image';


function Visa() {
    return (<div>
        <Image className='mx-auto' src={'/img/visa.webp'} alt={'visa'} width={1390} height={150} />
        <div className='relative mx-auto bottom-[80px] bg-white w-[70%] h-48 z-50 py-4 px-14 text-center rounded-lg border border-zinc-300'>
            <h1 className='text-4xl font-bold text-[#2b2f33]'>ویزای سفر</h1>
            <input type="search" className="border p-3 w-[750px] border-zinc-300 rounded-lg ml-2 mt-10" placeholder="کشورمقصد" />
            <button className="border p-3 border-zinc-300 rounded-lg bg-yellow-500 px-[70px] hover:bg-yellow-600">جستجو</button>

        </div>

    </div>);
}

export default Visa;