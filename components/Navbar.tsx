import { getImage } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

const Navbar = async () => {
    const allImages = await getImage();
    const selectedImage = allImages.find(
        (imageName) => imageName.slug === "bm-logo-white"
    );

    return (
        <div className="navbarContainer">
            <div className="navbarLogoContainer">
                <Image
                    src={selectedImage ? selectedImage.image : ""}
                    fill
                    alt={selectedImage ? selectedImage.altImage : ""}
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
