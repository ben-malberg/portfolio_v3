import Image from "next/image";

const Bannerfy = (imageObject: {
    _id: string;
    image: string;
    altImage: string;
}) => {
    return (imageObject ? 
        <Image
            key={imageObject._id}
            src={imageObject.image}
            alt={imageObject.altImage}
            width={1008}
            height={142}
            className="bannerImage"
        />
    : <div>error</div>
    )
};

export default Bannerfy;
