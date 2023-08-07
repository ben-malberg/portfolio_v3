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
        outline: "1px dotted grey",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    };

    const tempContent = <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>

    return (
        <>
            <div className="bannerContainer" onClick={handleToggleBanner}>
                {bannerImage ? bannerImage : <div style={loaderDiv}></div>}
                <span className="bannerTitle">{bannerName}</span>
            </div>
            <div className={`bannerContent ${bannerSelected ? "expanded" : null}`}>
                {tempContent}
            </div>
        </>
    );
};

export default Banner;
