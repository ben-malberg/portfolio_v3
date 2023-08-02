import { getImage } from "@/sanity/sanity-utils";
import PullImage from "@/utils/PullImage";
import Image from "next/image";
import Link from "next/link";

const Navbar = async () => {
    const logoObject = await getImage("bm-logo-white");

    return (
        <div className="navbarContainer">
            <div className="navbarLogoContainer">
                <Image
                    src={logoObject.image}
                    fill
                    alt={logoObject.altImage}
                    className="navbarLogo"
                />
            </div>
            <ul className="navbarMenuItems">
                <li>BIO</li>
                <li>WORK</li>
                <li>CONTACT</li>
            </ul>
        </div>
    );
};

export default Navbar;
