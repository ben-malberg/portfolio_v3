import { getImage } from "@/sanity/sanity-utils";
import Bannerfy from "./Bannerfy";

const PullImage = async (imageSlug: string) => {
    const bannerObject = await getImage(imageSlug);
    return Bannerfy(bannerObject);
};

export default PullImage;
