import { getImages } from "@/sanity/sanity-utils";

const PullImages = async (imageArray: string[]) => {
    const selectedImages = await getImages();

    return imageArray.map((slugName) => {
        return selectedImages.find(
            (imageObject) => imageObject.slug === slugName
        );
    });
};

export default PullImages;