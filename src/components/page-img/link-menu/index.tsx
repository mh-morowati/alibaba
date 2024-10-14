import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material/SvgIcon/SvgIcon";
import Link from "next/link";
{/*in this section i don't no the type of icon and i so confused but when i hover on the "icon" attribute in the
     father component i fix this problem so esily*/}

interface LinkProps {
    linkHref: string;
    linkName: string;
    icon: OverridableComponent<SvgIconTypeMap<object, "svg">> & {
        muiName: string;
    };
}


function LinkMenu(props: LinkProps) {
    return ( <Link className="basis-1/6 text-[#50575e] text-center max-md:flex" href={props.linkHref}>
        <props.icon className="max-md:mx-1"/>
        <p className="">{props.linkName}</p>
    </Link> );
}

export default LinkMenu;