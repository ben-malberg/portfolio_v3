import { getProjects } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import useSWR from "swr";
import { HiMiniArrowUpRight } from 'react-icons/hi2';

const Work = () => {
    type projects = string[] | undefined;

    // SWR
    // Create a function to fetch the logo data
    const fetchedProjects = async () => getProjects();
    // Use the useSWR hook to fetch the data and handle caching
    const {
        data: projects,
        error,
        isLoading,
    } = useSWR("getProjects", fetchedProjects);

    console.log(projects ? projects : "");

    if (error) {
        console.error("Error fetching projects: ", error);
    }

    if (isLoading) {
        return "LOADING";
    }

    return (
        <div className="workContainer">
            {projects !== undefined &&
                projects.map((project, idx) => {
                    return (
                        <div className="workProject" key={project._id}>
                            <div className={idx % projects.length ? 'workTitleAndImage1' : 'workTitleAndImage0'}>
                                <div className="workTitle">{project.name}</div>
                                <div className="workImageContainer">
                                    <Image
                                        src={project.image2}
                                        fill
                                        alt={project.altImage2}
                                        className="workImageStyle"
                                    />
                                </div>
                            </div>
                            <div className="workExcerpt">{project.excerpt}</div>
                            <div className="workMobileImageAndDescription">
                                <div className="workMobileImageOuterContainer">
                                    <div className="workMobileImageContainer">
                                        <Image
                                            src={project.image1}
                                            fill
                                            alt={project.altImage1}
                                            className="workMobileImageStyle"
                                        />
                                    </div>
                                </div>
                                <div className="workContentContainer">
                                    <PortableText value={project.content} />
                                </div>
                            </div>
                            <div className="workLinks">
                                <a href={project.url} target="_blank" rel="noopener noreferrer" className="workLink">SITE LINK {<HiMiniArrowUpRight />}</a>
                            </div>
                            <hr style={{width: "100%"}}/>
                        </div>
                    );
                })}
        </div>
    );
};

export default Work;
