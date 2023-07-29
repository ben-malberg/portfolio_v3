import { PortableText } from "@portabletext/react";
import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";

const AllProjects = async () => {
    const projects = await getProjects();

    return (
        <>
            {projects.map((project) => {
                return (
                    <>
                        <div key={project._id} className="imagesContainer">
                            <div className="webImageContainer">
                                <Image
                                    src={project.image1}
                                    fill
                                    alt={project.altImage1}
                                    className="imageStyle"
                                />
                            </div>
                            <div className="mobileImageContainer">
                                <Image
                                    src={project.image2}
                                    fill
                                    alt={project.altImage2}
                                    className="imageStyle"
                                />
                            </div>
                        </div>
                        <PortableText value={project.content} />
                    </>
                );
            })}
        </>
    );
};

export default AllProjects;
