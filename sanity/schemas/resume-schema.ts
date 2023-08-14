const resume = {
    name: "resume",
    title: "Resume",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title",
            description: "Title of the resume document",
        },
        {
            name: "resume",
            type: "file",
            title: "Resume File",
            description: "Upload the resume file here",
        },
    ],
};

export default resume;
