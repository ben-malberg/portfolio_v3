import useSWR from "swr";
import PullImage from "@/utils/PullImage";

interface BannerProps {
    handleToggleBanner: (bannerIndex: number) => void;
}

const Navbar = ({ handleToggleBanner }: BannerProps) => {
    // SWR
    // Create a function to fetch the logo data
    const fetchLogo = async () => PullImage("bm-logo-white");
    // Use the useSWR hook to fetch the data and handle caching
    const { data: logo, error, isLoading } = useSWR("bm-logo-white", fetchLogo);
    if (error) {
        console.error("Error fetching BM logo: ", error);
    }

    return (
        <div className="navbarContainer">
            {!isLoading && (
                <>
                    <div
                        className="navbarLogoContainer"
                        onClick={() => handleToggleBanner(3)}
                    >
                        {logo ? (
                            <>
                                <div className="navbarLogo">{logo}</div>
                                <div
                                    className="navbarLogoText"
                                    style={{ fontSize: ".70rem" }}
                                >
                                    BEN MALBERG
                                </div>
                            </>
                        ) : (
                            <div
                                className="navbarLogoText"
                                style={{ fontSize: ".70rem" }}
                            >
                                BEN MALBERG
                            </div>
                        )}
                    </div>
                    <ul className="navbarMenuItems">
                        <li onClick={() => handleToggleBanner(0)}>BIO</li>
                        <li onClick={() => handleToggleBanner(1)}>WORK</li>
                        <li onClick={() => handleToggleBanner(2)}>CONTACT</li>
                    </ul>
                </>
            )}
        </div>
    );
};

export default Navbar;
