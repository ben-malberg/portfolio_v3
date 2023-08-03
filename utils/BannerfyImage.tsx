import Image from 'next/image'
import { getImage } from "@/sanity/sanity-utils";

const BannerfyImage = async (imageSlug: string) => {
    const bannerObject = await getImage(imageSlug);

    return bannerObject ? (
        <Image
            key={bannerObject._id}
            src={bannerObject.image}
            alt={bannerObject.altImage}
            width={1008}
            height={142}
            className="bannerImage"
        />
    ) : (
        <div>{`error loading: ${imageSlug}`}</div>
    );
};

export default BannerfyImage;
