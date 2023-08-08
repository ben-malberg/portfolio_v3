import PullImages from "@/utils/PullImages";
import useSWR from "swr";

const Bio = () => {
    // SWR
    // Create a function to fetch the logo data
    let pulledImages: string[] = [];
    const imagesToPull = ["my-portrait", "bm-logo-white"];
    const fetchLogo = async () => PullImages(imagesToPull);
    // Use the useSWR hook to fetch the data and handle caching
    const { data: images, error } = useSWR(imagesToPull, fetchLogo);

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
        "I strive to create beautiful, intuitive and delightful experiences. To help your business grow.";
    const thanks = "Thank you for visiting.";

    return (
        <div className="bioContainer">
            {images !== undefined ? <div className="portraitImage">{images[0]}</div> : null}
            <div className="textContent">
                <div className="nameHeader">{bioHeader}</div>
                <div className="subHeader">{bioSubHeader}</div>
                <div className="stack">
                    {bioStack.map((item) => `${item} `)}
                </div>
                <div className="greeting">{greeting}</div>
                <div className="thanks">{thanks}</div>
            </div>
            {images !== undefined ? <div className="logoFooter">{images[1]}</div> : null}
        </div>
    );
};

export default Bio;
