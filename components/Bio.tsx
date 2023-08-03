import BannerfyImage from "@/utils/BannerfyImage";
import useSWR from "swr";

const Bio = (props: any) => {
    const { setShowBio, showBio, setShowWork, setShowContact } = props;

    // SWR
    // Create a function to fetch the banner data
    const fetchBanner = async () => BannerfyImage("cactus-banner");
    // Use the useSWR hook to fetch the data and handle caching
    const { data: bannerImage, error } = useSWR("cactus-banner", fetchBanner);
    if (error) {
        console.error("Error fetching banner: ", error);
    }

    const handleToggleBio = () => {
        setShowBio(!showBio);
        setShowWork(false);
        setShowContact(false);
    };

    return (
        <>
            {/* I want to click on this div to hide/reveal my bio */}
            <div className="bannerContainer" onClick={handleToggleBio}>
                {bannerImage ? (
                    bannerImage
                ) : (
                    <div
                        style={{
                            width: "100%",
                            height: 142,
                            border: "1px dotted red",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        loading
                    </div>
                )}
                <span className="bannerText">BIO</span>
            </div>
            <div className={`testText ${showBio ? 'visible' : ""}`}>BIO DISPLAYING</div>
        </>
    );
};

export default Bio;
