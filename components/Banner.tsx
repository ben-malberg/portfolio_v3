import BannerfyImage from "@/utils/BannerfyImage";
import useSWR from "swr";

interface BannerProps {
    bannerName: string;
    bannerSlug: string;
    bannerSelected: boolean;
    handleToggleBanner: () => void;
    content: React.ReactNode;
}

const Banner: React.FC<BannerProps> = ({
    bannerName,
    bannerSlug,
    bannerSelected,
    handleToggleBanner,
    content
}) => {
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

    // if (bannerSelected) {
    //     setTimeout(() => {
    //       const contentElement = document.querySelector('.bannerContent');
    //       if (contentElement) {
    //         contentElement.scrollIntoView({ behavior: 'smooth' });
    //       }
    //     }, 0); // Delay in milliseconds, e.g., 1000ms (1 second)
    //   }

    return (
        <>
            <div className="bannerContainer" onClick={handleToggleBanner}>
                {bannerImage ? bannerImage : <div style={loaderDiv}>LOADING</div>}
                {bannerImage ? <span className="bannerTitle">{bannerName}</span> : null}
            </div>
            <div className={`bannerContent ${bannerSelected ? bannerName : ""}`}>
                {content}
            </div>
        </>
    );
};

export default Banner;
