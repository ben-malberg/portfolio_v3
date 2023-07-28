const project = {
    name: "project",
    title: "Projects",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Project Title",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "name" },
        },

        {
            name: "excerpt",
            title: "Project Summary",
            type: "string",
        },
        {
            name: "content",
            title: "Project Backstory",
            type: "array",
            of: [{ type: "block" }],
        },
        {
            name: "image1",
            title: "Screenshot1",
            type: "image",
            options: { hotspot: true },
        },
        {
            name: "image2",
            title: "Screenshot2",
            type: "image",
            options: { hotspot: true },
        },
        {
            name: "altImage1",
            title: "Alt Text for Image1",
            type: "string",
        },
        {
            name: "altImage2",
            title: "Alt Text for Image2",
            type: "string",
        },
        {
            name: "url",
            title: "URL",
            type: "url",
        },
    ],
};

export default project;
