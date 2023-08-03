import BannerfyImage from "@/utils/BannerfyImage";
import useSWR from "swr";

const Contact = (props: any) => {
    const { setShowBio, setShowWork, setShowContact, showContact } = props;

    // SWR
    // Create a function to fetch the banner data
    const fetchBanner = async () => BannerfyImage("tree-banner");
    // Use the useSWR hook to fetch the data and handle caching
    const { data: bannerImage, error } = useSWR("tree-banner", fetchBanner);
    if (error) {
        console.error("Error fetching banner: ", error);
    }

    const handleToggleBio = () => {
        setShowContact(!showContact);
        setShowBio(false);
        setShowWork(false);
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
                <span className="bannerText">CONTACT</span>
            </div>
            {showContact && <div className="testText">CONTACT DISPLAYING</div>}
        </>
    );
};

export default Contact;
