import { createClient, groq } from "next-sanity";
import { ImageLib } from "@/types/ImageLib";
import { Project } from "@/types/Project";

const client = createClient({
    projectId: "kdtje5p1",
    dataset: "production",
    apiVersion: "2023-07-26",
});

export async function getProjects(): Promise<Project[]> {
    return client.fetch(
        groq`*[_type == 'project']{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            excerpt,
            content,
            "image1": image1.asset->url,
            "image2": image2.asset->url,
            altImage1,
            altImage2,
            url,
        }`
    );
}

export async function getImage(): Promise<ImageLib[]> {
    return client.fetch(
        groq`*[_type == 'imageLib']{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            altImage,
        }`
    );
}
