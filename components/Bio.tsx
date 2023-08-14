import PullImages from "@/utils/PullImages";
import useSWR from "swr";

type data = JSX.Element[];

const Bio = () => {
    // SWR
    // Create a function to fetch the logo data
    const imagesToPull = ["my-portrait", "bm-logo-white"];
    const fetchLogo = async () => PullImages(imagesToPull);
    // Use the useSWR hook to fetch the data and handle caching
    const { data: images, error, isLoading } = useSWR(imagesToPull, fetchLogo);

    if (error) {
        console.error("Error fetching BM logo: ", error);
    }

    const bioHeader = "BEN MALBERG";
    const bioSubHeader = "FRONT END ENGINEER";
    const bioStack = [
        "React.js",
        "Next.js",
        "JavaScript",
        "CSS",
        "Tailwind",
        "HTML",
        "Sanity.io CMS",
        "MongoDB",
        "SQLite",
        "Python",
    ];
    const greeting =
        "I strive to create aesthetic, intuitive & wonderful experiences. Let's make this world a place worth remembering.";
    const thanks = "Thank you for visiting.";

    let portrait: JSX.Element | null = null;
    let logo: JSX.Element | null = null;

    if (!isLoading && images) {
        [portrait, logo] = images;
    }

    return (
        <div className="bioContainer">
            {portrait !== null ? (
                <div className="portraitImage">{portrait}</div>
            ) : "LOADING"}
            <div className="textContent">
                <div className="nameHeader">{bioHeader}</div>
                <div className="subHeader">{bioSubHeader}</div>
                <div className="stack">
                    {bioStack.map((item) => `${item} `)}
                </div>
                <div className="greeting">{greeting}</div>
                <div className="thanks">{thanks}</div>
            </div>
            {logo !== null ? (
                <div className="logoFooter">{logo}</div>
            ) : "LOADING"}
        </div>
    );
};

export default Bio;
