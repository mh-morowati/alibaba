import AirPlaneTicket from "@/components/search/plane-in";
import Link from "next/link";


function Domestic() {
    return (<div className="md:hidden">
        <Link  href={'/domestic'}>
        <button className="w-[50%] p-2 border mt-3 rounded-lg mb-10 text-zinc-700 focus:bg-blue-500 focus:text-white">پروازداخلی</button>
        </Link>
        <Link  href={'/iranout'}>
        <button className="w-[50%] p-2 border mt-3 rounded-lg mb-10 text-zinc-700 focus:bg-blue-500 focus:text-white">پروازخارجی</button>
        </Link>
        <AirPlaneTicket />
    </div>);
}

export default Domestic;