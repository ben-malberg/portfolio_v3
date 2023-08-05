import BannerfyImage from "@/utils/BannerfyImage";
import useSWR from "swr";

interface BannerProps {
    bannerName: string;
    bannerSlug: string;
    bannerSelected: boolean;
    handleToggleBanner: () => void;
}

const Banner = ({
    bannerName,
    bannerSlug,
    bannerSelected,
    handleToggleBanner,
}: BannerProps) => {
    // SWR
    // Create a function to fetch the banner data
    const fetchBanner = async () => BannerfyImage(bannerSlug);
    // Use the useSWR hook to fetch the data and handle caching
    const { data: bannerImage, error } = useSWR(bannerSlug, fetchBanner);
    if (error) {
        console.error(`Error fetching ${bannerName} banner: `, error);
    }

    const loaderDiv = {
        width: "100%",
        height: 142,
        border: "1px dotted red",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    };

    return (
        <>
            <div className="bannerContainer" onClick={handleToggleBanner}>
                {bannerImage ? bannerImage : <div style={loaderDiv}></div>}
                <span className="bannerTitle">{bannerName}</span>
            </div>
            <div className={`bannerContent ${bannerSelected ? "expanded" : null}`}>
                {bannerSelected && <div>CONTENT TBC</div>}
            </div>
        </>
    );
};

export default Banner;
