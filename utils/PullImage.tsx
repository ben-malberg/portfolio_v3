import { getImage } from "@/sanity/sanity-utils";

const PullImage = async (slug: string) => {
    const allImages = await getImage();
    const selectedImage = allImages.find(
        (imageName) => imageName.slug === slug
    )!;
    return [selectedImage.image, selectedImage.altImage];
};

export default PullImage;
