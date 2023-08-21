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
        error,
        isLoading,
    } = useSWR("bm-logo-reverse-white", fetchLogo);
    if (error) {
        console.error("Error fetching BM logo: ", error);
    }

    return (
        !isLoading &&
        <div className="footerContainer">
            <div className="footerAddress" onClick={() => handleToggleBanner(2)}>
                {`BEN MALBERG 2023`}
            </div>
            <div className="footerLogo" onClick={() => handleToggleBanner(3)}>
                {logo}
            </div>
        </div>
    );
};

export default Footer;
