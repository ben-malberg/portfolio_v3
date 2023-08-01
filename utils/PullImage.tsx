import { getImage } from "@/sanity/sanity-utils";

const PullImage = async (imageSlug: string) => {
    return await getImage(imageSlug);
};

export default PullImage;
