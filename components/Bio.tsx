import PullImage from "@/utils/PullImage";
import useSWR from "swr";

const Bio = () => {
    // SWR
    // Create a function to fetch the logo data
    const fetchLogo = async () => PullImage("my-portrait");
    // Use the useSWR hook to fetch the data and handle caching
    const { data: portrait, error } = useSWR("my-portrait", fetchLogo);
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
    const greeting = "I strive to create beautiful, intuitive and delightful experiences."
    const thanks = "Thank you for visiting."

    return (
        <div className="bioContainer">
            <div className="portraitImage">{portrait}</div>
            <div className="textContent">
                <div className="nameHeader">{bioHeader}</div>
                <div className="subHeader">{bioSubHeader}</div>
                <div className="stack">{bioStack.map((item)=> `${item} `)}</div>
                <div className="greeting">{greeting}</div>
                <div className="thanks">{thanks}</div>
            </div>
        </div>
    );
};

export default Bio;
