import { downloadResume } from "@/sanity/sanity-utils";

const DownloadResumeUtil = async () => {
    const resumeObjects = await downloadResume();
    return resumeObjects;
};

export default DownloadResumeUtil;
