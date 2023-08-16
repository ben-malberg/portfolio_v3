import { getImages } from "@/sanity/sanity-utils";
import Image from "next/image";

const PullImages = async (imageArray: string[]) => {
    const selectedImages = await getImages();
    const matchedImages = imageArray.map((slugName) => {
        console.log("imageObjects: ", selectedImages);
        return selectedImages.filter(
            (imageObject) => imageObject.slug === slugName
        )[0];
    });
    console.log("matchedimages: ", matchedImages);
    return matchedImages.map((item) => {
        return (
            <Image
                key={item._id}
                src={item.image}
                alt={item.altImage}
                fill
                className="navbarLogo"
            />
        );
    });
};
export default PullImages;
