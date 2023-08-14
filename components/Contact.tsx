import DownloadResumeUtil from "@/utils/DownloadResumeUtil";
import useSWR from "swr";

const Contact: React.FC = () => {
    // SWR
    // Create a function to fetch the logo data
    const fetchResume = async () => DownloadResumeUtil();
    // Use the useSWR hook to fetch the data and handle caching
    const { data: resume, error, isLoading } = useSWR("resume", fetchResume);

    if (error) {
        return <>{`Error fetching resume from SWR: ", ${error}`}</>;
    }

    return (
        <>
            <div className="contactContainer">
                {isLoading ? (
                    <div>LOADING RESUME</div>
                ) : resume ? (
                    resume.map((item) => (
                        <a
                            key={item._id}
                            href={item.resumeURL}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Resume
                        </a>
                    ))
                ) : (
                    <div>RESUME UNAVAILABLE</div>
                )}
            </div>
        </>
    );
};

export default Contact;
