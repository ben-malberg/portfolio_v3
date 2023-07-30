import { getImage } from "@/sanity/sanity-utils";
import PullImage from "@/utils/PullImage";
import Image from "next/image";
import Link from "next/link";

const Navbar = async () => {
    const [selectedImage, selectedAlt] = await PullImage("bm-logo-white");

    return (
        <div className="navbarContainer">
            <div className="navbarLogoContainer">
                <Image
                    src={selectedImage ? selectedImage : ""}
                    fill
                    alt={selectedImage ? selectedAlt : ""}
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
