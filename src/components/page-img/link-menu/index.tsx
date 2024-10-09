import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material/SvgIcon/SvgIcon";
import Link from "next/link";


interface LinkProps {
    linkHref: string;
    linkName: string;
    icon: OverridableComponent<SvgIconTypeMap<object, "svg">> & {
        muiName: string;
    };
}


function LinkMenu(props: LinkProps) {
    return ( <Link className="basis-1/6 text-[#50575e] text-center" href={props.linkHref}>
        <props.icon className=""/>
        <p>{props.linkName}</p>
    </Link> );
}

export default LinkMenu;