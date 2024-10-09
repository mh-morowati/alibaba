import Image from "next/image";
import Link from "next/link";


function Header() {
    return (<div>
        <nav className="bg-white py-2 px-14 border-b">
            <div>
                <Link href={'/'}><Image src={"/img/alibaba-logo.svg"} alt={""} width={140}height={40}/></Link>
            </div>
            <div>

            </div>
        </nav>

    </div>);
}

export default Header;