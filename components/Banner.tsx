import BannerfyImage from "@/utils/BannerfyImage";
import PullImage from "@/utils/PullImage";
import useSWR from "swr";

interface BannerProps {
    bannerName: string;
    bannerSlug: string;
    bannerSelected: boolean;
    handleToggleBanner: () => void;
    content: React.ReactNode;
    loader: boolean;
}

const Banner: React.FC<BannerProps> = ({
    bannerName,
    bannerSlug,
    bannerSelected,
    handleToggleBanner,
    content,
    loader,
}) => {
    // SWR
    // Create a function to fetch the banner data
    const fetchBanner = async () => BannerfyImage(bannerSlug);
    // Use the useSWR hook to fetch the data and handle caching
    const {
        data: bannerImage,
        error,
        isLoading,
    } = useSWR(bannerSlug, fetchBanner);
    if (error) {
        console.error(`Error fetching ${bannerName} banner: `, error);
    }

    return isLoading && loader ? (
        <div className="loaderDiv">BM</div>
    ) : (
        <>
            <div className="bannerContainer" onClick={handleToggleBanner}>
                {!isLoading && (
                    <>
                        {bannerImage}
                        <span className="bannerTitle">{bannerName}</span>
                    </>
                )}
            </div>
            {!isLoading && (
                <div
                    className={`bannerContent ${
                        bannerSelected ? bannerName : ""
                    }`}
                >
                    {content}
                </div>
            )}
        </>
    );
};

export default Banner;
