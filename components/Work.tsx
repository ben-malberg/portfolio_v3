import BannerfyImage from "@/utils/BannerfyImage";
import useSWR from "swr";

const Work = (props: any) => {
    const { setShowBio, setShowWork, showWork, setShowContact } = props;

    // SWR
    // Create a function to fetch the banner data
    const fetchBanner = async () => BannerfyImage("straw-banner");
    // Use the useSWR hook to fetch the data and handle caching
    const { data: bannerImage, error } = useSWR("straw-banner", fetchBanner);
    if (error) {
        console.error("Error fetching banner: ", error);
    }

    const handleToggleBio = () => {
        setShowWork(!showWork);
        setShowBio(false);
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
                <span className="bannerText">WORK</span>
            </div>
            {showWork && <div className="testText">WORK DISPLAYING</div>}
        </>
    );
};

export default Work;
