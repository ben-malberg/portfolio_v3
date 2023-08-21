import DownloadResumeUtil from "@/utils/DownloadResumeUtil";
import PullImage from "@/utils/PullImage";
import useSWR from "swr";
import { HiMiniArrowUpRight } from "react-icons/hi2";

const Contact: React.FC = () => {
    // SWR
    // Create a function to fetch the logo data
    const fetchResume = async () => DownloadResumeUtil();
    // Use the useSWR hook to fetch the data and handle caching
    const {
        data: resume,
        error: error1,
        isLoading: isLoading1,
    } = useSWR("resume", fetchResume);

    if (error1) {
        return <>{`Error fetching resume from SWR: ", ${error1}`}</>;
    }

    return (
        <>
            <div className="contactContainer">
                <div className="contactContactInfo">
                    <ul className="contactLinkItems">
                        {isLoading1 ? (
                            <li>LOADING RESUME</li>
                        ) : resume ? (
                            resume.map((item) => (
                                <li key={item._id}>
                                    <a
                                        className="contactLink"
                                        href={item.resumeURL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        RESUME
                                    </a>
                                    <HiMiniArrowUpRight />
                                </li>
                            ))
                        ) : (
                            <li>RESUME UNAVAILABLE</li>
                        )}
                        <li>
                            <a
                                className="contactLink"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://github.com/thejourneyville"
                            >
                                GITHUB
                            </a>
                            <HiMiniArrowUpRight />
                        </li>
                        <li>
                            <a
                                className="contactLink"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="mailto:bmalberg2020@gmail.com?subject=contacting from bmalberg.com"
                            >
                                EMAIL
                            </a>
                            <HiMiniArrowUpRight />
                        </li>
                        <li>
                            <a
                                className="contactLink"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.linkedin.com/in/benjamin-malberg/"
                            >
                                LINKEDIN
                            </a>
                            <HiMiniArrowUpRight />
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Contact;
