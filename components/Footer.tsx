import PullImage from "@/utils/PullImage";
import useSWR from "swr";

interface BannerProps {
    handleToggleBanner: (bannerIndex: number) => void;
}

const Footer = ({ handleToggleBanner }: BannerProps) => {
    // SWR
    // Create a function to fetch the logo data
    const fetchLogo = async () => PullImage("bm-logo-reverse-white");
    // Use the useSWR hook to fetch the data and handle caching
    const {
        data: logo,
        error: error2,
        isLoading: isLoading2,
    } = useSWR("bm-logo-reverse-white", fetchLogo);
    if (error2) {
        console.error("Error fetching BM logo: ", error2);
    } else if (!isLoading2) {
        console.log("logo: ", logo);
    }

    return (
        <div className="footerContainer">
            <div className="footerAddress">
                BAY AREA CA USA
            </div>
            <div className="footerLogo" onClick={() => handleToggleBanner(3)}>
                {logo}
            </div>
        </div>
    );
};

export default Footer;
