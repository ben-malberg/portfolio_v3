import PullImage from "@/utils/BannerfyImage";
import PullImages from "@/utils/PullImages";
import Image from "next/image";

const Hero = async () => {
    // const [selectedImage1, selectedAlt1] = await PullImage("cactus-banner");
    const selectedImages = await PullImages([
        "cactus-banner",
        "straw-banner",
        "tree-banner",
    ]);
    console.log("selectedImages: ", selectedImages);
    // const [selectedImage2, selectedAlt2] = await PullImage("straw-banner");
    // const [selectedImage3, selectedAlt3] = await PullImage("tree-banner");
    const heroHeader = "Ben Malberg";
    const heroSubheader = "Front End Developer";
    const heroStack = [
        "React.js",
        "Next.js",
        "JavaScript",
        "CSS",
        "Tailwind",
        "HTML",
        "Sanity.io CMS",
        "MongoDB",
        "SQLite",
        "Python",
    ];

    const matchedResults = selectedImages.map((item, idx) => {
        return (
            <Image
                key={idx}
                src={item.image}
                alt={item.altImage}
                width={1008}
                height={142}
                className="heroLogo"
            />
        );
    });

    return <>{matchedResults}</>;
};

export default Hero;
