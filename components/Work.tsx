"use client";

import PullImage from "@/utils/PullImage";
import { useEffect, useState } from "react";

const Work = (props: any) => {
    const { setShowBio, setShowWork, showWork, setShowContact } = props;
    const [bannerImage, setBannerImage] = useState(null);

    useEffect(() => {
        const bannerfied = PullImage("straw-banner");
        setBannerImage(bannerfied);
    }, []);

    const handleToggleBio = () => {
        setShowWork(!showWork);
        setShowBio(false);
        setShowContact(false);
    };

    return (
        <>
            {/* I want to click on this div to hide/reveal my bio */}
            <div className="bannerContainer" onClick={handleToggleBio}>
                {bannerImage}
                <span className="bannerText">WORK</span>
            </div>
            {showWork && <div className="testText">WORK DISPLAYING</div>}
        </>
    );
};

export default Work;
