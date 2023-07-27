import { getProjects } from "@/sanity/sanity-utils";

export default async function Home() {
    const projects = await getProjects();

    return (
        <>
            {projects.map((project) => (
                <div key={project._id}>{project.excerpt}</div>
            ))}
        </>
    );
}
