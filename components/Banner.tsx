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
    content
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
        width: "100vw",
        height: 142,
        boxShadow: '0 -1px 0 rgb(100, 100, 100), 0 1px 0 rgb(100, 100, 100)',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 100,
    };

    const tempContent = <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>

    return (
        <>
            <div className="bannerContainer" onClick={handleToggleBanner}>
                {bannerImage ? bannerImage : <div style={loaderDiv}>LOADING</div>}
                {bannerImage ? <span className="bannerTitle">{bannerName}</span> : null}
            </div>
            <div className={`bannerContent ${bannerSelected ? "expanded" : null}`}>
                {content}
            </div>
        </>
    );
};

export default Banner;
