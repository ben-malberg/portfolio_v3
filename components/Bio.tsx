import PullImage from "@/utils/PullImage";
import Bannerfy from "@/utils/Bannerfy";
import Image from "next/image";

const Bio = async () => {
    const bannerObject = await PullImage("cactus-banner");
    const bioBannerImage = Bannerfy(bannerObject);

    return (
        <>
            <div className="bannerTest">
                {bioBannerImage}
            </div>
        </>
    );
};

export default Bio;
