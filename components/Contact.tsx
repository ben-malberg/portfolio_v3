"use client";

import PullImage from "@/utils/PullImage";
import { useEffect, useState } from "react";

const Contact = (props:any) => {
    const { setShowBio, setShowWork, setShowContact, showContact } = props;
    const [bannerImage, setBannerImage] = useState(null);

    useEffect(() => {
        const bannerfied = PullImage("tree-banner");
        setBannerImage(bannerfied);
    }, []);

    const handleToggleBio = () => {
        setShowContact(!showContact);
        setShowBio(false);
        setShowWork(false);
    }

    return (
        <>
            {/* I want to click on this div to hide/reveal my bio */}
            <div className="bannerContainer" onClick={handleToggleBio}>
                {bannerImage}
                <span className="bannerText">CONTACT</span>
            </div>
            {showContact && <div className="testText">CONTACT DISPLAYING</div>}
        </>
    );
};

export default Contact;
