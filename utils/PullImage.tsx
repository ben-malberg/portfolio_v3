import { getImage } from "@/sanity/sanity-utils";
import Image from 'next/image';

const PullImage = async (imageSlug: string) => {
    const imageObject = await getImage(imageSlug);

    return imageObject ? (
        <Image
            key={imageObject._id}
            src={imageObject.image}
            alt={imageObject.altImage}
            fill
            className="navbarLogo"
        />
    ) : (
        <div>error</div>
    );
};

// return bannerObject ? (
//     <Image
//         key={bannerObject._id}
//         src={bannerObject.image}
//         alt={bannerObject.altImage}
//         width={1008}
//         height={142}
//         className="bannerImage"
//     />
// ) : (
//     <div>error</div>
// );

export default PullImage;
