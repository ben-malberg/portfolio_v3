"use client";

import PullImage from "@/utils/PullImage";
import { useEffect, useState } from "react";

const Bio = (props: any) => {
    const { setShowBio, showBio, setShowWork, setShowContact } = props;
    const [bannerImage, setBannerImage] = useState(null);

    useEffect(() => {
        const bannerfied = PullImage("cactus-banner");
        setBannerImage(bannerfied);
    }, []);

    const handleToggleBio = () => {
        setShowBio(!showBio);
        setShowWork(false);
        setShowContact(false);
    };

    return (
        <>
            {/* I want to click on this div to hide/reveal my bio */}
            <div className="bannerContainer" onClick={handleToggleBio}>
                {bannerImage}
                <span className="bannerText">BIO</span>
            </div>
            {showBio && <div className="testText">BIO DISPLAYING</div>}
        </>
    );
};

export default Bio;
