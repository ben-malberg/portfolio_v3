const imageLib = {
    name: "imageLib",
    title: "Image Library",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Image Title",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "name" },
        },
        {
            name: "image",
            title: "Upload Image",
            type: "image",
            options: { hotspot: true },
        },
        {
            name: "altImage",
            title: "Alt Text for Image",
            type: "string",
        },
    ],
}

export default imageLib;