import { PortableTextBlock } from "sanity";

export type Project = {
    _id: string;
    _createdAt: Date;
    name: string;
    slug: string;
    excerpt: string;
    content: PortableTextBlock[];
    image1: string;
    image2: string;
    altImage1: string;
    altImage2: string;
    url: string;
};
